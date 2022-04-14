/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnderlineIcon from "../constant/icons/underlineIcon";
import { RegisterSchema } from "../constant/registerSchema";
import ColorMode from "../components/colorMode";
import { useAuthContex } from "../context/authContext";
import LoadingIcon from "../constant/icons/loadingIcon";

function Register() {
  const { mode, setRegisterForm } = useAuthContex();
  const [loading, setLoading] = useState(false);

  return (
    <div className="register">
      <div className="title">
        <h2>Kayıt</h2>
        <UnderlineIcon params={mode === "dark" && { color: "#FFBF5E" }} />
      </div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          user_name: "",
          password: "",
          password_confirm: "",
          checkbox: false,
        }}
        onSubmit={(auth, { resetForm }) => {
          setRegisterForm(auth);
          setLoading(true);
          setTimeout(() => {
            toast.success("Sisteme kayıt yaptınız", 2000);
            resetForm();
            setLoading(false);
          }, 3000);
        }}
        validationSchema={RegisterSchema}
      >
        {
          ({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className={values.first_name ? "form-group" : "form-group required"}>
                  <label>İSİM</label>
                  <input
                    type="text"
                    placeholder="İsmini gir"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                  <span className="form-error">{touched.first_name && errors.first_name}</span>
                </div>
                <div className={values.last_name ? "form-group" : "form-group required"}>
                  <label>SOYİSİM</label>
                  <input
                    type="text"
                    placeholder="Soyismini gir"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                  <span className="form-error">{touched.last_name && errors.last_name}</span>
                </div>
              </div>
              <div className={values.email ? "form-group" : "form-group required"}>
                <label>E-POSTA</label>
                <input
                  type="text"
                  placeholder="E-posta adresini gir"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  autoComplete="on"
                />
                <span className="form-error">{touched.email && errors.email}</span>
              </div>
              <div className={values.user_name ? "form-group" : "form-group required"}>
                <label>KULLANICI ADI</label>
                <input
                  type="text"
                  placeholder="Kullanıcı adını gir"
                  name="user_name"
                  value={values.user_name}
                  onChange={handleChange}
                  autoComplete="on"
                />
                <span className="form-error">{touched.user_name && errors.user_name}</span>
              </div>
              <div className={values.password ? "form-group" : "form-group required"}>
                <label>ŞİFRE</label>
                <input
                  type="password"
                  placeholder="Şifreni gir"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  autoComplete="on"
                />
                <span className="form-error">{touched.password && errors.password}</span>
              </div>
              <div className={values.password_confirm ? "form-group" : "form-group required"}>
                <label>ŞİFRENİ TEKRAR GİR</label>
                <input
                  type="password"
                  placeholder="Şifreni doğrula"
                  name="password_confirm"
                  value={values.password_confirm}
                  onChange={handleChange}
                  autoComplete="on"
                />
                <span className="form-error">{touched.password_confirm && errors.password_confirm}</span>
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="agreement"
                  value={values.checkbox}
                  onChange={handleChange}
                />
                <label htmlFor="agreement">Sözleşmeyi kabul ediyorum</label>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className={loading ? "disabled" : ""}
                  disabled={loading}
                >
                  {loading ? <LoadingIcon /> : "KAYIT OL"}
                </button>
              </div>
            </form>
          )
        }
      </Formik>
      <ColorMode />
    </div>
  );
}

export default Register;

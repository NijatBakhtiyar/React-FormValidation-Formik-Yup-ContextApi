import React from 'react'
import UnderlineIcon from '../constant/icons/underlineIcon';
import { Formik } from 'formik';
import { RegisterSchema } from '../constant/registerSchema';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import ColorMode from '../components/colorMode';
import { useAuthContex } from '../context/authContext'
{/* <ToastContainer/> */ }

function Register() {
  const { mode } = useAuthContex();
  const [formData, setFormData] = useState(null)

  toast.success('Sistemde kayıtlı böyle bir kullanıcı yoktur', 2000);

  return (
    <div className="register">
      <div className="title">
        <h2>Kayıt</h2>
        <UnderlineIcon params={mode === "dark" && { color: "#FFBF5E" }} />
      </div>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          user_name: '',
          password: '',
          password_confirm: ''
        }}
        onSubmit={auth => {
          setFormData(auth)
          // console.log(auth)
        }}
        validationSchema={RegisterSchema}
      >
        {
          ({ values, handleChange, handleSubmit, errors, touched }) =>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className={errors.first_name ? "form-group error" : "form-group" && values.first_name ? "form-group" : "form-group required"}>
                  <label>İSİM</label>
                  <input
                    type="text"
                    placeholder='İsmini gir'
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                  />
                  <span className='form-error'>{errors.first_name}</span>
                </div>
                <div className={errors.last_name ? "form-group error" : "form-group" && values.last_name ? "form-group" : "form-group required"}>
                  <label>SOYİSİM</label>
                  <input
                    type="text"
                    placeholder='Soyismini gir'
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                  />
                  <span className='form-error'>{errors.last_name}</span>
                </div>
              </div>
              <div className={errors.email ? "form-group error" : "form-group" && values.email ? "form-group" : "form-group required"}>
                <label >E-POSTA</label>
                <input
                  type="text"
                  placeholder='E-posta adresini gir'
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <span className='form-error'>{errors.email}</span>
              </div>
              <div className={errors.user_name ? "form-group error" : "form-group" && values.user_name ? "form-group" : "form-group required"}>
                <label>KULLANICI ADI</label>
                <input
                  type="text"
                  placeholder='Kullanıcı adını gir'
                  name="user_name"
                  value={values.user_name}
                  onChange={handleChange}
                />
                <span className='form-error'>{errors.user_name}</span>
              </div>
              <div className={errors.password ? "form-group error" : "form-group" && values.password ? "form-group" : "form-group required"}>
                <label>ŞİFRE</label>
                <input
                  type="password"
                  placeholder='Şifreni gir'
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <span className='form-error'>{errors.password}</span>
              </div>
              <div className={errors.password_confirm ? "form-group error" : "form-group" && values.password_confirm ? "form-group" : "form-group required"}>
                <label>ŞİFRENİ TEKRAR GİR</label>
                <input
                  type="password"
                  placeholder='Şifreni doğrula'
                  name="password_confirm"
                  value={values.password_confirm}
                  onChange={handleChange}
                />
                <span className='form-error'>{errors.password_confirm}</span>
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="agreement"/>
                <label htmlFor='agreement'>Sözleşmeyi kabul ediyorum</label>
              </div>
              <div className="form-group">
                <button type='submit'>KAYIT OL</button>
              </div>
            </form>

        }
      </Formik>

      <ColorMode />
    </div>
  )
}

export default Register
import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    first_name: yup
        .string()
        .required("İsim zorunludur"),
    last_name: yup
        .string()
        .required("Soyisim zorunludur"),
    email: yup
        .string()
        .email("Lütfen geçerli bir eposta adresi giriniz.")
        .required("Eposta alanı zorunludur."),
    user_name: yup
        .string()
        .required("Kullanıcı alanı zorunludur"),
    password: yup
        .string()
        .typeError("Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin")
        .min(8, "Şifreniz 8 karakterden az olamaz")
        .max(32, "Şifreniz 32 karakterden fazla olamaz")
        .required("Şifre alanı zorunludur."),
    password_confirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    checkbox: yup
        .boolean()
        .oneOf([yup.ref("checkbox"), null], "Passwords must match"),

});

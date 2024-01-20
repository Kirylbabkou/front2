// import React from "react";
import { React, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

import Button from "../../components/shared/ui/button/Button";
// import Input from "../../components/shared/ui/input/Input";
// import LoginForm from "./LoginForm";

import { ROUTES } from "../../components/shared/consts/routes";

// function validateEmail(value) {
//   if (!value) {
//     return "Required";
//   } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
//     return "Некорректный адрес почты";
//   }
// }

// function validatePassword(value) {
//   if (!value) {
//     return "Required";
//   }
// }

const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Некорректный адрес почты"),
  password: yup.string().required("Required"),
});

const SignIn = () => {
  let navigate = useNavigate();
  function handleLogin() {
    navigate(ROUTES.ENTER);
  }
  return (
    <section>
      <div>
        <h2>У нас много новинок</h2>
        <h3>
          Вдохновляйся работами мастеров. Участики нашего комьюнити делятся
          полезной информацией и представляют свои работы.
        </h3>
      </div>
      <div>
        <h2>Мы рады вас видеть!</h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            handleLogin();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label>Электронная почта</label>
              <Field
                className="input"
                name="email"
                // validate={validateEmail}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
              {/* <Input className="input" /> */}

              <label>Пароль</label>
              <Field
                className="input"
                name="password"
                type="password"
                // validate={validatePassword}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}

              <Button
                className="button button_colored"
                btnText="Войти"
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </div>
      {/* <LoginForm /> */}
    </section>
  );
};

export default SignIn;

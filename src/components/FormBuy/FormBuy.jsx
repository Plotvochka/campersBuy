import { Field, Form, Formik } from "formik";

import css from "./FormBuy.module.css";
import Button from "../Button/Button.jsx";

const FormBuy = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Name*"
              className={css.input}
            />
          </div>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              className={css.input}
            />
          </div>
          <div>
            <Field
              id="text"
              name="text"
              type="text"
              placeholder="Booking date*"
              className={css.input}
            />
          </div>
          <div>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
              className={css.input}
            />
          </div>
          <Button type="submit" className={css.btnForm}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormBuy;

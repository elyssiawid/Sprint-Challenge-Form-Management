import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { networkInterfaces } from "os";
import * as Yup from "yup";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        console.log("response back from server (get request)", res);
        this.setState({ foods: res.data }, () => {
          console.log("STATE AFTER FOODS HAVE BEEN SET", this.state);
        });
      })
      .catch(err => console.log(err.response));
  }

  render() {
    const { errors, touched, values, status } = this.props;
    return (
      <div className="user-form">
        <h1>User Form</h1>
        <Form>
          <Field type="text" name="username" placeholder="username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Field type="text" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <button type="submit">Submit!</button>
        </Form>
        {this.state.foods
          ? this.state.foods.map(food => <p key={food.id}>{food.name}</p>)
          : null}
      </div>
    );
  }
}

const FormikUserForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setFoods }) {
    console.log("submit", values);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log("RESPONSE BACK FROM SERVER (POST request)", res);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikUserForm;

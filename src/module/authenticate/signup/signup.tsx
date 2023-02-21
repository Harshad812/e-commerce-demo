import { useFormik } from "formik";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DeviceMobile, Lock, Mail, Sitemap, User } from "tabler-icons-react";
import "../../../assets/css/auth.css";

import { Input } from "../../../components";
import { RoutesMapping } from "../../../routes";

interface UserDetailPayload {
  name: string;
  email: string;
  website: string;
  comment: string;
  gender: string;
  mobile: string;
  password: string;
}

export const Signup = () => {
  const navigate = useNavigate();

  const initialValues: UserDetailPayload = {
    name: "",
    email: "",
    website: "",
    comment: "",
    gender: "",
    mobile: "",
    password: "",
  };

  const handleSubmit = (value: UserDetailPayload) => {
    if (value !== initialValues) {
      localStorage.setItem("UserDetails", JSON.stringify(value));
      navigate(RoutesMapping.Signin);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: any) => handleSubmit(value),
    validate: (values: UserDetailPayload) => {
      const errors: Partial<UserDetailPayload> = {};

      if (!values.name) errors.name = "Please Enter Name";
      if (!values.website) errors.website = "Please Enter Website";
      if (!values.comment) errors.comment = "Please Enter Comment";
      if (!values.mobile) {
        errors.mobile = "Please Enter Mobile";
      } else if (values.mobile.length < 10) {
        errors.mobile = "Please Enter Valid Mobile";
      }

      if (!values.password) errors.password = "Please Enter Password";

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  });

  const error = useMemo(() => formik.errors, [formik.errors]);

  return (
    <div className="auth-container">
      <div className="card">
        <div className="logo">
          <span>Signup</span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-container">
            <Input
              placeholder="Enter Name"
              label={"Name"}
              icon={<User />}
              value={formik.values.name}
              onChange={formik.handleChange}
              type="name"
              name="name"
              error={error.name}
            />
            <Input
              placeholder="Enter Email"
              label={"Email"}
              icon={<Mail />}
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              name="email"
              error={error.email}
            />
            <Input
              placeholder="*********"
              name="password"
              label={"Password"}
              icon={<Lock />}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={error.password}
            />
            <Input
              placeholder="Enter Link"
              name="website"
              label={"Website"}
              icon={<Sitemap />}
              value={formik.values.website}
              onChange={formik.handleChange}
              error={error.website}
            />
            <Input
              placeholder="Enter Mobile"
              name="mobile"
              label={"Mobile"}
              icon={<DeviceMobile />}
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={error.mobile}
            />
            <div className="comment-section ">
              <span>Comment</span>
              <textarea
                placeholder="Enter Comments"
                name="comment"
                defaultValue={formik.values.comment}
                onChange={formik.handleChange}
              ></textarea>
            </div>

            <div className="gender-section">
              <span>Gender {formik.values.gender}</span>
              <div className="radio-group">
                <div className="radio-button">
                  <span>Female</span>
                  <input
                    type="radio"
                    value="Female"
                    checked={formik.values.gender === "Female"}
                    onChange={formik.handleChange}
                    name="gender"
                  />
                </div>

                <div className="radio-button">
                  <span>Male</span>
                  <input type="radio" value="Male" name="gender" />
                </div>
                <div className="radio-button">
                  <span>Other</span>
                  <input type="radio" value="Other" name="gender" />
                </div>
              </div>
            </div>

            <div className="button-section">
              <button className="submit-button" type="submit">
                Signup
              </button>
              <div className="link-section">
                <button onClick={() => navigate(RoutesMapping.Signin)}>
                  Signin
                </button>
                <button>Forgate Password</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

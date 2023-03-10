import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "tabler-icons-react";
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

export const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetailPayload>();
  const userData = localStorage.getItem("UserDetails");
  useEffect(() => {
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [userData]);

  const initialValues: Pick<UserDetailPayload, "email" | "password"> = {
    email: "",
    password: "",
  };

  const handleSubmit = (value: any) => {
    if (value) {
      if (value.email === user?.email && value.password === user?.password) {
        alert("You have successfully Signed in.");
        navigate(RoutesMapping.Home);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: any) => handleSubmit(value),
    validate: (values: Pick<UserDetailPayload, "email" | "password">) => {
      const errors: Partial<UserDetailPayload> = {};

      if (!values.password) {
        errors.password = "Please Enter Password";
      }

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
          <span>Signin</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-container">
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

            <div className="button-section">
              <button className="submit-button" type="submit">
                Signin
              </button>
              <div className="link-section">
                <button onClick={() => navigate(RoutesMapping.Signup)}>
                  SignUp
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

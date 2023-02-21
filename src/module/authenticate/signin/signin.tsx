import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/auth.css";
import { EmailIcon } from "../../../assets/icon/email";
import { LockIcon } from "../../../assets/icon/lock";
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
  const initialValues: Pick<UserDetailPayload, "email" | "password"> = {
    email: "",
    password: "",
  };

  const handleSubmit = (value: any) => {
    console.log("value", value);
    navigate(RoutesMapping.Home);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: any) => handleSubmit(value),
  });

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
              icon={<EmailIcon />}
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              name="email"
            />
            <Input
              placeholder="*********"
              name="password"
              label={"Password"}
              icon={<LockIcon />}
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <div className="button-section">
              <button className="submit-button" type="submit">
                Signin
              </button>
              <div className="link-section">
                <button>Signin</button>
                <button>Forgate Password</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

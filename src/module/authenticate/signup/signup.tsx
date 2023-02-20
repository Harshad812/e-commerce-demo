import { useFormik } from "formik";
import "../../../assets/css/auth.css";
import { EmailIcon } from "../../../assets/icon/email";
import { LockIcon } from "../../../assets/icon/lock";
import { Input } from "../../../components";

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
  const initialValues: UserDetailPayload = {
    name: "",
    email: "",
    website: "",
    comment: "",
    gender: "",
    mobile: "",
    password: "",
  };

  const handleSubmit = (value: any) => {
    console.log("value", value);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: any) => handleSubmit(value),
  });

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
              icon={<EmailIcon />}
              value={formik.values.name}
              onChange={formik.handleChange}
              type="name"
              name="name"
            />
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
            <Input
              placeholder="Enter Link"
              name="website"
              label={"Website"}
              icon={<EmailIcon />}
              value={formik.values.website}
              onChange={formik.handleChange}
            />
            <Input
              placeholder="Enter Mobile"
              name="mobile"
              label={"Mobile"}
              icon={<LockIcon />}
              value={formik.values.mobile}
              onChange={formik.handleChange}
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

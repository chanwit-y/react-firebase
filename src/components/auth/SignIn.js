import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { signIn } from "../../store/actions/authAction";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  // const firebase = useFirebase();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(signIn({firebase}, loginInfo))
          dispatch(signIn(loginInfo))
        }}
        className="white"
      >
        <h5 className="grey-text text-darken-5">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={loginInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

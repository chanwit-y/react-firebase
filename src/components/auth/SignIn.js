import { useState } from "react";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
  });

  const handleChange = (e) => {
    setLoginInfo(prev => ({...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="container">
      <form
        onSubmit={() => {
          console.log(loginInfo);
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

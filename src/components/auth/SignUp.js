import { useState } from "react";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setSignUpInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="container">
      <form
        onSubmit={() => {
          console.log(signUpInfo);
        }}
        className="white"
      >
        <h5 className="grey-text text-darken-5">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={signUpInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={signUpInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={signUpInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={signUpInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
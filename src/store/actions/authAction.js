export const signIn = ({ firebase }, loginInfo) => {
  return (dispatch, getState, { firebase, firestore }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

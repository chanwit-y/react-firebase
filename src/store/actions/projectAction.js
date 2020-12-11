export const createProject = ({firestore }, project) => {
  return (dispatch, getState) => {
      firestore.collection('projects').add({
          ...project,
          authorFirstName: 'Beer',
          authorLastName: 'Beer',
          authorId: 12345,
          createAt: new Date()
      }).then(() => {
          console.log('success')
          dispatch({ type: "CREATE_PROJECT", project: project });
      }).catch((err) => {
          dispatch({ type: "CREATE_PROJECT_ERROR", err });
      })
  };
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { createProject } from "../../store/actions/projectAction";

const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();
  // const firestore = useFirestore();

  const handleChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    // dispatch(createProject({ firestore }, project));
    dispatch(createProject(project));
  };

  return (
    <div className="container">
      <form className="white">
        <h5 className="grey-text text-darken-5">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={project.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content project</label>
          <textarea
            id="content"
            cols="30"
            rows="10"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button
            className="btn pink lighten-1 z-depth-0"
            type="button"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;

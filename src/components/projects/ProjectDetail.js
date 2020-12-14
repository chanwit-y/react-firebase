import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const ProjecrtDetail = (props) => {
  useFirestoreConnect("projects");
  const id = props.match.params.id;
  const selectorProjects = useSelector(
    (state) => state.firestore.data.projects
  );
  const project = selectorProjects[id];

  return (
    project && (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by {`${project.authorFirstName} ${project.authorLastName}`}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProjecrtDetail;

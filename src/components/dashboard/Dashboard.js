import Notification from "./Notification";
import ProjectList from "../projects/ProjectList"
import { useState } from 'react'
import { useSelector } from "react-redux";
import { useFirestoreConnect } from 'react-redux-firebase'

import { useEffect } from "react";

const Dashboard = () => {
  useFirestoreConnect("projects");
  const selectorProjects = useSelector(state => state.firestore.data.projects);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(selectorProjects && Object.values(selectorProjects))
    setProjects(selectorProjects && Object.values(selectorProjects))
  }, [selectorProjects])

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
            <ProjectList projects={projects} /> 
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return <div className="project-list section">
    {projects?.map(project => <ProjectSummary key={project.authorId} project={project} />)}
  </div>;
};

export default ProjectList;
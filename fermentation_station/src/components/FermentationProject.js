import {React,useState} from 'react'
import "../css/FermentationProject.css"
export const FermentationProject = ({ project, editProject,deleteProject }) => {
  const [expandToggle, setExpandToggle] = useState(false);
  const handleEdit=()=>{
    editProject(project);
  };
  const handleDelete=()=>{
    deleteProject(project);
  };
  return (
    <>
      
      {project.project && (
      <div className='Projects'>
      <h2>{project.project}</h2>
      <button onClick={handleEdit}> Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={(e) => setExpandToggle(!expandToggle)}>More Information</button>
      </div>
      )}
      {expandToggle &&(
        <div>
        <p>ID</p>
        <p>{project.id}</p>
        <p>Description: {project.description}</p>
        <p>End date: {project.end_date}</p>
        </div>
      )}
      </>
  )
}

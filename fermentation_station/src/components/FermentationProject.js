import {React,useState} from 'react'

export const FermentationProject = ({ project, editProject,deleteProject }) => {
  const [expandToggle, setExpandToggle] = useState(false);
  const handleEdit=()=>{
    editProject(project);
  };
  const handleDelete=()=>{
    deleteProject(project);
  };
  return (
    <div className='Projects'>
      <p>{project.project}</p>
      {project.project && (
      <>
      <button onClick={handleEdit}> Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={(e) => setExpandToggle(!expandToggle)}>More Information</button>
      </>
      )}
      {expandToggle &&(
        <div>
        <p>Description: {project.description}</p>
        <p>End date: {project.end_date}</p>
        </div>
      )}
      </div>
  )
}

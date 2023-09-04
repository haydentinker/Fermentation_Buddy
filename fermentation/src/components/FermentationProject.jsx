import {React,useState} from 'react'
import "../css/FermentationProject.css"
import { TfiTrash,TfiPencilAlt,TfiAngleDown } from "react-icons/tfi";
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
      <button onClick={handleEdit}> <TfiPencilAlt/></button>
      <button onClick={handleDelete}><TfiTrash/></button>
      <button onClick={(e) => setExpandToggle(!expandToggle)}><TfiAngleDown/></button>
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

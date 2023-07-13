import React from 'react'

export const FermentationProject = ({ project, editProject,deleteProject }) => {
  const handleEdit=()=>{
    editProject(project.id);
  };
  const handleDelete=()=>{
    deleteProject(project.id);
  };
  return (
    <div className='Projects'>
      <p>{project.project}</p>
      {project.id && (
      <>
      <button onClick={handleEdit}> Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </>
      )}
      </div>
  )
}

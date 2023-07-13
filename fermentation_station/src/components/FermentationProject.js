import React from 'react'

export const FermentationProject = ({project,editProject}) => {
  return (
    <div className='Projects'>
      <p>{project.project}</p>
      <button onClick={()=>editProject(project.id)}> Edit</button>
    </div>
  )
}

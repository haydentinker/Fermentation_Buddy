import React, {useState} from 'react'

export const EditProjectForm = ({editProject,project}) => {
  const [value,setValue]=useState("")
  const handleSubmit = e=>{
    e.preventDefault();
    editProject(project.id);
    setValue("")
  }
  return (<div>
    <form className="EditProjectForm" onSubmit={handleSubmit}><input type="text" className="ProjectInput" placeholder='What is the updated Value'
    value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button type="submit" className='project-btn'>Update</button>
    </form>
    </div>
  )
}
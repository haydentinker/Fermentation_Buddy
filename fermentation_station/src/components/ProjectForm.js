import React, {useState} from 'react'
import '../static/ProjectForm.css'
export const ProjectForm = ({addProject}) => {
  const [value,setValue]=useState({
    name:"",
    description:"",
    start_date:"",
    push_notifications:false

  })
  const handleSubmit = e=>{
    e.preventDefault();
    addProject(value);
    setValue("")
  }
  return (
  
    <form className="ProjectForm" onSubmit={handleSubmit}>
      <div className='FormGroup'>
      <label className="ProjectLabel">Name</label>
      <input type="text" className="ProjectInput" placeholder='Scoby-wan Kenobi'
      value={value.name} onChange={(e)=>setValue(e.target.value)}/>
      
      <label className="ProjectLabel">Description</label>
      <input type="text" className="ProjectInput" placeholder='Kombucha'
      value={value.description} onChange={(e)=>setValue(e.target.value)}/>
      <label className="ProjectLabel">End Date</label>
      <input type="text" className="ProjectInput" placeholder='09/10/23'
      value={value.end_date} onChange={(e)=>setValue(e.target.value)}/>
      <label className="ProjectLabel">Would you like to receive notifications?</label>
      <input type="checkbox" className="ProjectInput" checked={value.push_notifications} onChange={(e)=>setValue(e.target.checked)}/>
    <button type="submit" className='ProjectBtn'>Submit</button>
    </div>
    </form>
    
  )
}


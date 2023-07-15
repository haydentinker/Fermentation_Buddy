import React from 'react'
import "../static/Footer.css";
export const Footer = () => {
    const handleSubmit=()=>{};
  return (
    <div className='Footer'>
        <h2>Contact</h2>
        <form className="ProjectForm" onSubmit={handleSubmit}>
        <label
          className={`Contact`}>
          Name
        </label>


        </form>
    </div>
  )
}

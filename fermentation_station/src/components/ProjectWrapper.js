import React, { useState } from 'react'
import '../static/ProjectWrapper.css'
import { ProjectForm } from "./ProjectForm"
import { v4 as uuidv4 } from 'uuid';
import { FermentationProject } from './FermentationProject';
import { EditProjectForm } from './EditProjectForm';

export const ProjectWrapper = () => {
  const [projects, setProjects] = useState([])

  const deleteProject =deleteProj=>{
    setProjects(projects.filter(project=>project.id!==deleteProj.id));
  }
  const addProject = newProject => {
    setProjects([...projects, { id: uuidv4(), project:newProject.project,description:newProject.description,end_date:newProject.end_date,push_notifications:newProject.push_notifications, isEditing: false }]);
  }
  const displayEdit = toggleEdit => {
    setProjects(projects.map((proj) => (proj.id === toggleEdit.id ? { ...proj, isEditing: !proj.isEditing } : proj)));
  };
  const editProject = (updatedProject, id) => {
    setProjects(projects.map(project => project.id === id ? { ...project, project: updatedProject, isEditing: !project.isEditing } : project))
  };

  return (<div className='content'>
    <ProjectForm addProject={addProject} />
    {projects.length ? (
  <>
    <p>Current Projects</p>
    {projects.map((project, index) =>
      project.isEditing ? (
        <EditProjectForm key={project.id} project={project} editProject={editProject} />
      ) : (
        <FermentationProject
          project={project}
          key={project.id}
          editProject={displayEdit}
          deleteProject={deleteProject}
        />
      )
    )}
  </>
) : (
  <p>No Current Projects</p>
)}
    </div>
  )
}

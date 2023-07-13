import React, { useState } from 'react'
import { ProjectForm } from "./ProjectForm"
import { v4 as uuidv4 } from 'uuid';
import { FermentationProject } from './FermentationProject';
import { EditProjectForm } from './EditProjectForm';

export const ProjectWrapper = () => {
  const [projects, setProjects] = useState([])
  const addProject = project => {
    setProjects([...projects, { id: uuidv4(), project, isEditing: false }]);
  }
  const displayEdit = id => {
    setProjects(projects.map((proj) => (proj.id === id ? { ...proj, isEditing: !proj.isEditing } : proj)));
  };
  const editProject = (updatedProject, id) => {
    setProjects(projects.map(project => project.id === id ? { ...project, project: updatedProject, isEditing: !project.isEditing } : project))
  };

  return (
    <div>
      <ProjectForm addProject={addProject} />
      {projects.map((project, index) => (
        project.isEditing ? (

          <EditProjectForm key={project.id} project={project} editProject={editProject} />
        ) : (
          <FermentationProject project={project} key={project.id} editProject={displayEdit} />
        )))}
    </div>

  )
}

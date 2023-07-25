import React, { useState, useEffect } from "react";
import "../css/ProjectWrapper.css";
import { ProjectForm } from "../components/ProjectForm";
import { FermentationProject } from "../components/FermentationProject";
import { EditProjectForm } from "../components/EditProjectForm";
import { createPickle } from "../animations/createPickle";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  getDocs
} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
export const ProjectWrapper = () => {
  const { user, db,googleSignIn } = UserAuth();
  const [projects, setProjects] = useState([]);

  const deleteProject = async (deleteProj) => {
    const projectsCollectionRef = collection(
      doc(db, "users", user.uid),
      "projects"
    );
    await deleteDoc(doc(projectsCollectionRef, deleteProj.id));
    setProjects(projects.filter((project) => project.id !== deleteProj.id));
  };
  const addProject = async (newProject) => {
    try {
      const projectsCollectionRef = collection(
        doc(db, "users", user.uid),
        "projects"
      );
      const docRef = doc(projectsCollectionRef, newProject.id);
      const data = {
        project: newProject.project,
        description: newProject.description,
        end_date: newProject.end_date,
        push_notifications: newProject.push_notifications,
      };
      setDoc(docRef, data);
      console.log("Document written with ID: ", docRef.id);
      setProjects([
        ...projects,
        {
          id: newProject.id,
          project: newProject.project,
          description: newProject.description,
          end_date: newProject.end_date,
          push_notifications: newProject.push_notifications,
          isEditing: false,
        },
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const displayEdit = (toggleEdit) => {
    setProjects(
      projects.map((proj) =>
        proj.id === toggleEdit.id
          ? { ...proj, isEditing: !proj.isEditing }
          : proj
      )
    );
  };
  const editProject = async (updatedProject) => {
    const projectsCollectionRef = collection(
      doc(db, "users", user.uid),
      "projects"
    );
    try {
      const editProjectRef = doc(db, projectsCollectionRef, updatedProject.id);
      await updateDoc(editProjectRef, {
        project: updatedProject.project,
        description: updatedProject.description,
        end_date: updatedProject.end_date,
        push_notifications: updatedProject.push_notifications,
      });
      console.log("Document updated ");
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id
          ? {
              ...project,
              project: updatedProject.project,
              description: updatedProject.description,
              end_date: updatedProject.end_date,
              push_notifications: updatedProject.push_notifications,
              isEditing: false,
            }
          : project
      )
    );
  };
  useEffect(() => {
  
    const projectsRef = collection(doc(db, "users", user.uid),"projects");
    const getProjects = async ()=>{
    try{
      const projects= await getDocs(projectsRef);
      const projectData=projects.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }));
      setProjects(projectData);
    }catch (error){
      console.log(error);
    }
  };
    getProjects();
    document.body.style.backgroundPosition = "bottom";
    const intervalId = setInterval(createPickle, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [db,user.uid]);
  return (
    <div className="content">
      <ProjectForm addProject={addProject} />
      {projects.length ? (
        <>
          <p>Current Projects</p>
          {projects.map((project, index) =>
            project.isEditing ? (
              <EditProjectForm
                key={project.id}
                project={project}
                editProject={editProject}
              />
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
  );
};

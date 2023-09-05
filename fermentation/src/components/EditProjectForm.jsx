import React, { useState } from 'react'
import '../css/ProjectForm.css'
export const EditProjectForm = ({ editProject, project }) => {
  const [value, setValue] = useState(project)
  const [errors, setErrors] = useState({
    date_error: false,
    name_error: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    editProject(value);
    setValue({
      ...value,
      project: "",
      description: "",
      end_date: "",
      push_notifications: false,
    });
  };
  return (<div>
    <form className="ProjectForm" onSubmit={handleSubmit}>
      <div className="FormGroup">
        <label
          className={`ProjectLabel ${errors.name_error ? "ErrorLabel" : ""}`}
        >
          Name
        </label>
        <input
          type="text"
          className="ProjectInput"
          placeholder="Scoby-wan Kenobi"
          value={value.project}
          onChange={(e) => setValue({ ...value,project: e.target.value })}
        />

        <label className="ProjectLabel">Description (Optional)</label>
        <input
          type="text"
          className="ProjectInput"
          placeholder="Kombucha"
          value={value.description}
          onChange={(e) => setValue({ ...value, description: e.target.value })}
        />

        <label
          className={`ProjectLabel ${errors.date_error ? "ErrorLabel" : ""}`}
        >
          End Date (MM-DD-YY)
        </label>
        <input
          type="text"
          className="ProjectInput"
          placeholder="09-10-23"
          value={value.end_date}
          onChange={(e) => setValue({ ...value, end_date: e.target.value })}
        />

        <label className="ProjectLabel">
          Would you like to receive notifications?
        </label>
        <input
          type="checkbox"
          className="ProjectInput"
          checked={value.push_notifications}
          onChange={(e) =>
            setValue({ ...value, push_notifications: e.target.checked })
          }
        />

        {errors.name_error && (
          <p className="ErrorMessage">Please enter a project name</p>
        )}

        {errors.date_error && (
          <p className="ErrorMessage">
            Please enter a valid date format (e.g., 09-10-23)
          </p>
        )}

        <button type="submit" className="ProjectBtn">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addP.css'; // Make sure this path is correct relative to your file structure

function AddProject() {
  const [title, setTitle] = useState('');
  const [teammatesN, setTeammatesN] = useState('');
  const [teammatesM, setTeammatesM] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!description) {
      setShowError(true); // Show error if description is empty
      return;
    }

    // Handle project upload logic here
    console.log("Project submitted:", { title, teammatesN, teammatesM, projectDate, description });
  };

  return (
    <div className="Container">
      <h1>Add a New KFUPM Senior Project</h1>

      {/* Alert for form errors */}
      {showError && (
        <div className="error" role="alert">
          Description is required.
          <button type="button" className="btn-close" onClick={() => setShowError(false)} aria-label="Close"></button>
        </div>
      )}

      <section className="form-group">
        <label htmlFor="title">
          <strong>Title:</strong>
        </label>
        <input 
          type="text" 
          placeholder="Please Enter The Title" 
          id="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="teammatesN">
          <strong>Teammate's Names:</strong>
        </label>
        <input 
          type="text" 
          placeholder="Comma Separated" 
          id="teammatesN" 
          value={teammatesN}
          onChange={(e) => setTeammatesN(e.target.value)}
        />

        <label htmlFor="teammatesM">
          <strong>Teammate's Majors:</strong>
        </label>
        <input 
          type="text" 
          placeholder="Comma Separated" 
          id="teammatesM" 
          value={teammatesM}
          onChange={(e) => setTeammatesM(e.target.value)}
        />

        <label htmlFor="photo">
          <strong>Project's Image(s):</strong>
        </label>
        <input type="file" id="photo" />

        <label htmlFor="projectDate">
          <strong>Project Date:</strong>
        </label>
        <input 
          type="date" 
          id="projectDate" 
          value={projectDate}
          onChange={(e) => setProjectDate(e.target.value)}
        />

        <label htmlFor="description">
          <strong>Description:</strong>
        </label>
        <input 
          className="disc" 
          type="text" 
          placeholder="Enter Your Notes" 
          id="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </section>

      <button onClick={handleSubmit}>Upload The Project</button>
    </div>
  );
}

export default AddProject;

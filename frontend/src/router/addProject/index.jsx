import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addP.css';

function AddProject() {
  const [title, setTitle] = useState('');
  const [projectMajor, setProjectMajor] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [teammatesNames, setTeammatesNames] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // For storing image files
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    // Handling the selected files
    setImages(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare project data
    const projectData = {
      title,
      projectMajor,
      year,
      semester,
      teammatesNames: teammatesNames.split(','),
      introduction,
      description,
      images: Array.from(images).map((file) => file.name), // Just use the image name for now, can change to URL if uploading to a server
    };

    try {
      // POST request to the backend to save the project
      const response = await axios.post('http://localhost:5000/api/projects/addProject', projectData);

      if (response.status === 201) {
        setMessage('Project added successfully!');
        console.log('Project added:', response.data);

        // Optionally reset the form after successful submission
        setTitle('');
        setProjectMajor('');
        setYear('');
        setSemester('');
        setTeammatesNames('');
        setIntroduction('');
        setDescription('');
        setImages([]);
      }
    } catch (error) {
      setMessage('Error adding project');
      console.error('Error submitting project:', error);
    }
  };

  return (
    <div className="add-project">
      <div className="add-project__form">
        <h1>Add a New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Major</label>
            <input
              type="text"
              className="form-control"
              value={projectMajor}
              onChange={(e) => setProjectMajor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="date"  // Changed to date input type
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Semester</label>
            <input
              type="text"
              className="form-control"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Teammates Names (comma separated)</label>
            <input
              type="text"
              className="form-control"
              value={teammatesNames}
              onChange={(e) => setTeammatesNames(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Introduction</label>
            <input
              type="text"
              className="form-control"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Images</label>
            <input
              type="file"
              className="form-control"
              multiple  // Allow multiple image uploads
              onChange={handleImageChange}
              required
            />
            {images.length > 0 && (
              <div className="mt-3">
                <strong>Selected Images:</strong>
                <ul>
                  {Array.from(images).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit Project</button>
        </form>

        {message && <div className="alert mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default AddProject;

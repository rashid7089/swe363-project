import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addP.css';
import { apiBaseUrl } from '../../functions/authRequests';

function AddProject() {
  const [title, setTitle] = useState('');
  const [projectMajor, setProjectMajor] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [teammatesNames, setTeammatesNames] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [description, setDescription] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  }); // For storing image files
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    const { value } = event.target;
    const index = Number(event.target.placeholder.split(' ')[2]) - 1;

    setImages({
      ...images,
      [index]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // extract year
    const realYear = new Date(year).getFullYear();


    // Prepare project data
    const projectData = {
      title,
      projectMajor,
      year:realYear,
      semester,
      teammatesNames: teammatesNames.split(','),
      introduction,
      description,
      imagesLinks: Object.values(images).filter((image) => image !== ''),
    };

    if (numImages < projectData.imagesLinks.length) {
      projectData.imagesLinks = projectData.imagesLinks.slice(0, numImages);
    }

    // images regax /(https?:\/\/.*\.(?:png|jpg))/i
    const imgRegax = /(https?:\/\/.*\.(?:png|jpg))/i;
    for (let i = 0; i < projectData.imagesLinks.length; i++) {
      const img = projectData.imagesLinks[i];
      if (!imgRegax.test(img)) {
        alert('Please enter a valid image link for image ' + (i + 1));
        return;
      }
    }

    try {
      
      const response = await axios.post(`${apiBaseUrl}/project/addProject`, projectData);

      if (response.status === 201) {
        alert('Project added successfully!');
        console.log('Project added:', response.data);

       
        // setTitle('');
        // setProjectMajor('');
        // setYear('');
        // setSemester('');
        // setTeammatesNames('');
        // setIntroduction('');
        // setDescription('');
        // setImages([]);
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
              type="date"  
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
            <label>Images Links</label>
            <select type='number' value={numImages} onChange={(e) => setNumImages(e.target.value)}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))
              }
            </select>
            {[...Array(Number(numImages))].map((_, index) => (
              <input
                key={index}
                type="text"
                className="form-control"
                onChange={handleImageChange}
                required
                placeholder={`Image Link ${index + 1}`}
              />
            ))}
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit Project</button>
        </form>

        {message && <div className="alert mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default AddProject;

import { useState } from 'react';
import './addP.css';

function AddProject() {
  const [formData, setFormData] = useState({  
    title: '',
    teammatesN: '',
    teammatesM: '',
    description: '',
    photo: null,
    projectDate: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
   
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required"
    else if (!formData.teammatesN) newErrors.teammatesN = "Teammate's names are required"
    else if (!formData.teammatesM) newErrors.teammatesM = "Teammate's majors are required"
    else if (!formData.description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({});
      }, 5000);
      return;
    }

    setSubmittedData(formData);
    setFormData({
      title: '',
      teammatesN: '',
      teammatesM: '',
      description: '',
      photo: null,
      projectDate: '',
    });
    setErrors({});
  };

  return (
    <div className="Container">
      <h1>Add a New KFUPM Senior Project</h1>
      <form onSubmit={handleSubmit}>
        <section className="form-group">
          <label htmlFor="title">
            <strong>Title:</strong>
          </label>
          <input
            type="text"
            placeholder="Please Enter The Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <div className="error">{errors.title}</div>}

          <label htmlFor="teammatesN">
            <strong>Teammate's Names:</strong>
          </label>
          <input
            type="text"
            placeholder="Comma Separated"
            id="teammatesN"
            name="teammatesN"
            value={formData.teammatesN}
            onChange={handleChange}
          />
          {errors.teammatesN && <div className="error">{errors.teammatesN}</div>}

          <label htmlFor="teammatesM">
            <strong>Teammate's Majors:</strong>
          </label>
          <input
            type="text"
            placeholder="Comma Separated"
            id="teammatesM"
            name="teammatesM"
            value={formData.teammatesM}
            onChange={handleChange}
          />
          {errors.teammatesM && <div className="error">{errors.teammatesM}</div>}

          <label htmlFor="photo">
            <strong>Project's Image(s):</strong>
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleChange}
          />

          <label htmlFor="projectDate">
            <strong>Project Date:</strong>
          </label>
          <input
            type="date"
            id="projectDate"
            name="projectDate"
            value={formData.projectDate}
            onChange={handleChange}
          />

          <label htmlFor="description">
            <strong>Description:</strong>
          </label>
          <input
            className='disc'
            type="text"
            placeholder="Enter Your Notes"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <div className="error">{errors.description}</div>}
        </section>

        <button type="submit">Upload The Project</button>
      </form>
    </div>
  );
}

export default AddProject;

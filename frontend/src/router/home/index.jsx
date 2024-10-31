// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectShowcase() {
  return (
    <div>      

      {}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <select className="form-select">
              <option>Major</option>
              <option>CS</option>
              <option>SWE</option>
              <option>COE</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container">
        <div className="row">
          {/* Example Project Card */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/KFUPM-Seal.png" className="card-img-top" alt="w" />
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">Company/Team Name</p>
              </div>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectShowcase() {
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Project Showcase</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Add Project</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <select className="form-select">
              <option>Major</option>
              <option>CHE</option>
              <option>SUGE</option>
              <option>CS</option>
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
              <img src="C:\Users\ggfor\OneDrive\Documents\GitHub\swe363-proje\frontend\src\imgs\logo.jpg" className="card-img-top" alt="Project" />
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
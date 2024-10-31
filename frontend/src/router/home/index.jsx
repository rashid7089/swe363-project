import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.jpg'; 
import logo1 from './logo1.png'; 

function ProjectShowcase() {
  const projects = [
    { id: 1, title: 'UAV Obstacle Detection and Avoidance', company: 'TRS Technologies Inc.', img: logo1 },
    { id: 2, title: 'Swapp – The Clothing Swapping App', company: 'Swapp', img: logo },
    { id: 3, title: 'EDI Patio Awning Design Team 1', company: 'College of Engineering Facilities', img: logo },
  ];

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-success">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white">Project Showcase</span>
          <div className="d-flex">
          
          </div>
        </div>
      </nav>

      {/* Filters */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <select className="form-select">
              <option>Major</option>
              <option>CHE</option>
              <option>SWE</option>
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
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <Link to={`/project/${project.id}`} className="text-decoration-none text-dark">
                <div className="card h-100">
                  <img 
                    src={project.img} 
                    className="card-img-top" 
                    alt={project.title} 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.company}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo.jpg'; // Default logo
import logo1 from './logo1.png'; // Alternative logo

// Static project data
const staticProjects = [
  { id: 1, major: "coe", year: "2023", title: 'UAV Obstacle Detection and Avoidance', company: 'TRS Technologies Inc.', img: logo1 },
  { id: 2, major: "cs", year: "2022", title: 'Swapp – The Clothing Swapping App', company: 'Swapp', img: logo },
  { id: 3, major: "swe", year: "2021", title: 'EDI Patio Awning Design Team 1', company: 'College of Engineering Facilities', img: logo },
];

function ProjectShowcase() {
  const [projects, setProjects] = useState([]);
  const [searchByText, setSearchText] = useState('');
  const [searchByMajor, setSearchByMajor] = useState('');
  const [searchByYear, setSearchByYear] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isFiltersChanged, setIsFiltersChanged] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Combine static and dynamic projects
        const combinedProjects = [...staticProjects, ...data];
        setProjects(combinedProjects);
        setFilteredProjects(combinedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = projects.filter(project =>
      project.title.toLowerCase().includes(searchByText.toLowerCase())
    ).filter(project =>
      project.major.toLowerCase().includes(searchByMajor.toLowerCase())
    ).filter(project =>
      project.year.toString().includes(searchByYear)
    );

    setFilteredProjects(results);
    setIsFiltersChanged(false);
  };

  const onChange = (property, value) => {
    if (property === "text") {
      setSearchText(value);
    } else if (property === "year") {
      setSearchByYear(value);
    } else if (property === "major") {
      setSearchByMajor(value);
    }
    setIsFiltersChanged(true);
  };

  const clearFilters = () => {
    setSearchText('');
    setSearchByMajor('');
    setSearchByYear('');
    setFilteredProjects(projects);
  };

  return (
    <div className="bg-white text-dark min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-success">
        <div className="container-fluid">
          <div className="d-flex">
            {/* You can add your logo or brand here if needed */}
          </div>
        </div>
      </nav>

      {/* Filters */}
      <div className="container my-4">
        <form onSubmit={handleSearch} className="row align-items-center">
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Projects..."
              value={searchByText}
              onChange={(e) => onChange("text", e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <select
              className="form-select"
              value={searchByMajor}
              onChange={(e) => onChange("major", e.target.value)}
            >
              <option value="">Major</option>
              <option value="coe">COE</option>
              <option value="swe">SWE</option>
              <option value="cs">CS</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <select
              className="form-select"
              value={searchByYear}
              onChange={(e) => onChange("year", e.target.value)}
            >
              <option value="">Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            {filteredProjects.length !== 0 || isFiltersChanged ? (
              <button className='btn btn-success col-12' type='submit'>Search</button>
            ) : (
              <button className='btn btn-danger col-12' type='button' onClick={clearFilters}>Clear Filters</button>
            )}
          </div>
        </form>
      </div>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <div className="container">
          <div className="row">
            {filteredProjects.map((project) => (
              <div className="col-md-4 mb-4" key={project.id || project._id}>
                <Link to={`/view-Project/${project.id || project._id}`} className="text-decoration-none text-dark">
                  <div className="card h-100 home__singleProject">
                    <img
                      src={project.img || logo} // Fallback to a default image if project.img is undefined
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
      ) : (
        <div className='home__noFoundMessage'>
          <h1>404</h1>
          <h4>No Result Found, Please Try Search Again</h4>
        </div>
      )}
    </div>
  );
}

export default ProjectShowcase;

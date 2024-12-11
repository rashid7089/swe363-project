import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo.jpg'; // Default logo
import logo1 from './logo1.png'; // Alternative logo
import { apiBaseUrl } from '../../functions/authRequests';

// Static project data


function ProjectShowcase() {
  const [projects, setProjects] = useState([]);
  const [searchByText, setSearchText] = useState('');
  const [allMajors, setAllMajors] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [searchByMajor, setSearchByMajor] = useState('');
  const [searchByYear, setSearchByYear] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isFiltersChanged, setIsFiltersChanged] = useState(false);

  const getMajors = (projects) => {
    const majors = [];
    projects.forEach(project => {
      if (!majors.includes(project.projectMajor)) {
        majors.push(project.projectMajor);
      }
    });
    return majors;
  }

  const getYears = (projects) => {
    const years = [2023];
    projects.forEach(project => {
      if (!years.includes(project.year)) {
        years.push(project.year);
      }
    });
    return years;
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log(`${apiBaseUrl}/project/all`)
        const response = await fetch(`${apiBaseUrl}/project/all`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Combine static and dynamic projects
        setProjects(data);
        setFilteredProjects(data);
        return data;
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects()
    .then((projects) => {
      console.log('Projects fetched successfully');
      console.log(projects);
      setAllMajors(getMajors(projects));
      setAllYears(getYears(projects));
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = projects.filter(project =>
      project.title.toLowerCase().includes(searchByText.toLowerCase())
    ).filter(project =>
      project.projectMajor.toLowerCase().includes(searchByMajor.toLowerCase())
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
              {allMajors.map((major, index) => (
                <option key={index} value={major}>{major}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <select
              className="form-select"
              value={searchByYear}
              onChange={(e) => onChange("year", e.target.value)}
            >
              <option value="">Year</option>
              {allYears.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
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
                      src={project.imagesIds[0] || logo} // Fallback to a default image if project.img is undefined
                      className="card-img-top"
                      alt={project.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                      onError={`this.onerror=null;this.src=${logo};`}
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

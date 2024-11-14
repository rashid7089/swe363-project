import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './style.css'
import logo from './logo.jpg'; 
import logo1 from './logo1.png'; 

const projects = [
  { id: 1, major:"coe", year:"2023", title: 'UAV Obstacle Detection and Avoidance', company: 'TRS Technologies Inc.', img: logo1 },
  { id: 2, major:"cs", year:"2022", title: 'Swapp – The Clothing Swapping App', company: 'Swapp', img: logo },
  { id: 3, major:"swe", year:"2021", title: 'EDI Patio Awning Design Team 1', company: 'College of Engineering Facilities', img: logo },
];

function ProjectShowcase() {
  const [searchByText, setSearchText] = useState('');
  const [searchByMajor, setSearchByMajor] = useState('');
  const [searchByYear, setSearchByYear] = useState('');

  const [filteredProjects, setFilteredProjects] = useState(projects);
  // const [showAlert, setShowAlert] = useState(false);
  const [isflitersChanged, setIsFiltersChanged] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);


  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchByText, searchByMajor, searchByYear)
    const results = projects.filter(project => 
      project.title.toLowerCase().includes(searchByText.toLowerCase())
    ).filter(project => 
      project.major.toLowerCase().includes(searchByMajor.toLowerCase())
    ).filter(project => 
      project.year.toLowerCase().includes(searchByYear.toLowerCase())
    );

    // if (results.length === 0) {
    //   setShowAlert(true); // Show alert if no projects are found
    // } else {
    //   setShowAlert(false);
      setFilteredProjects(results); // Set filtered projects based on search
    // }
    setIsFiltersChanged(false);
  };
      

  const onChange = (property, value) => {
    if (property == "text") {
      setSearchText(value);
    }
    else if (property == "year") {
      setSearchByYear(value);
    }
    else if (property == "major") {
      setSearchByMajor(value);
    }
    setIsFiltersChanged(true);
  }

  const ClearFilters = () => {
    setSearchText('');
    setSearchByMajor('');
    setSearchByYear('');
    setFilteredProjects(projects);
  }
  

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

      {/* Alert for not found projects */}
      {/* 
        {showAlert && (
          <div className="error" role="alert">
            Sorry, project was not found (no database yet).
            <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
          </div>
        )}
      */}

      {/* Filters */}
      <div className="container my-4">
        <form onSubmit={handleSearch} className="row align-items-center">
          <div className="col-md-3 mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Projects..." 
              value={searchByText}
              onChange={(e) => onChange("text",e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <select className="form-select"
            value={searchByMajor}
            onChange={(e) => onChange("major",e.target.value)}
            >
              <option>Major</option>
              <option>COE</option>
              <option>SWE</option>
              <option>CS</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <select className="form-select" 
            value={searchByYear}
            onChange={(e) => onChange("year",e.target.value)}
            >
              <option>Year</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            {filteredProjects.length !== 0 || isflitersChanged ? 
              <button className='btn btn-success col-12' type='submit'>Search</button>:
              <button className='btn btn-danger col-12' type='button' onClick={ClearFilters}>Clear Filters</button>
            }
          </div>
        </form>
      </div>

      {/* Project Cards */}

      {filteredProjects.length > 0 ? (
        <div className="container">
        <div className="row">
          {filteredProjects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <Link to={`/view-Project/${project.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 home__singleProject">
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
      ):(
        <div className='home__noFoundMessage'>
          <h1>404</h1>
          <h4>No Result Found, Please Try Search Again</h4>
        </div>
      )}

      {/* Inline CSS for alert styling */}
      <style jsx>{`
        .error {
          position: fixed; /* Keeps it anchored at the bottom-right */
          width: 80%; /* Width now scales with the viewport */
          max-width: 600px; /* Sets a maximum width */
          min-width: 150px; /* Sets a minimum width */
          height: 50px; /* Standard error message height */
          right: 0; /* Positions at the right edge of the viewport */
          bottom: 20px; /* Adjusts vertical position */
          box-sizing: border-box;
          background: #CB8D98; /* Background color */
          border: 3px solid #981B32; /* Border color */
          border-radius: 20px; /* Rounded corners */
          display: flex;
          align-items: center;
          justify-content: center; /* Centers text inside */

          /* Text styling */
          font-family: 'JetBrains Mono';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 120%;
          letter-spacing: -0.02em;
          color: #FFFFFF; /* Text color */
        }
      `}</style>
    </div>
  );
}

export default ProjectShowcase;

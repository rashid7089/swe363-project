
import { useState } from 'react';
import '/Users/nawafalserhani/development/flutter/swe363-project-1/frontend/src/router/addProject/addP.css';
function AddProject() {
  
      
   


    return (
      <div className="Container" >
        <h1>Add a New KFUPM Senior Project</h1>
  
        <section className="form-group">
          <label htmlFor="title">
            <strong>Title:</strong>
          </label>
          <input type="text" placeholder="Please Enter The Title" id="title" />
  
          <label htmlFor="teammatesN">
            <strong>Teammate's Names:</strong>
          </label>
          <input type="text" placeholder="Comma Separated" id="teammatesN" />
  
          <label htmlFor="teammatesM">
            <strong>Teammate's Majors:</strong>
          </label>
          <input type="text" placeholder="Comma Separated" id="teammatesM" />
  
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
        >   
        </input>
  
          <label  htmlFor="description">
            <strong>Description:</strong>
          </label>
          <input className='disc' type="text" placeholder="Enter Your Notes" id="description" />
        </section>
        
  
        <button htmlFor="button">Upload The Project</button>
      </div>
    );
  }
  
  export default AddProject;

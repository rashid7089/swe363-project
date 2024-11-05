import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';

function ViewProject() {
    const project = {
        problem: "Swe Project to solve water problems",
        major: "SWE",
        publishDate: "2024-03-02",
        contributors: ["Mohammed Ali", "Saeed Ahmed", "Khaled Al-Ghamdi"],
        title: "UAV Obstacle Detection and avoidance",
        term: "241",
        summury:`The UAV Obstacle Detection and Avoidance project, developed by Boeing, represents a significant advancement in autonomous aerial vehicle technology.
            This initiative aims to create unmanned aerial vehicles capable of navigating complex environments independently, detecting potential obstacles, and executing evasive maneuvers without human intervention.` ,
        description: `Hardware Development:
        Designing and building the UAV platform Integrating sensors (e.g., cameras, LiDAR, ultrasonic sensors)
        Implementing onboard computing systems Software Development: 
        Creating algorithms for real-time obstacle detection Developing path planning and navigation systems Implementing avoidance maneuvers Testing and Validation:
        Conducting simulations in various environments Performing real-world flight tests Refining the system based on test results
        This technology has various potential applications, including search and rescue operations, infrastructure inspection, and autonomous delivery systems.
        The ability for UAVs to detect and avoid obstacles autonomously is crucial for their safe and efficient operation in complex environments.`
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    function Header({ problem, major, publishDate, contributors }) {
        return (
            <div className="px-5 py-5">
                <p className="fw-bold fs-5">{problem}</p>
                <div className="d-flex justify-content-start mb-2">
                    <p className="me-3 fw-light fs-5"><strong>Major:</strong> {major}</p>
                    <p className="fw-light fs-5"><strong>Publish Date:</strong> {publishDate}</p>
                </div>
                <hr className="border border-1 border-secondary border-dark" />
                <p className='fs-3 fw-light'><strong>Contributors:</strong></p>
                <div className="d-flex flex-wrap gap-4">
                    {contributors.map((contributor, index) => (
                        <p key={index} className="mb-0 fs-4 fw-light">{contributor}</p>
                    ))}
                </div>
            </div>
        );
    }

    function Content() {
        return (
            <div className='container mt-3' style={{ marginLeft: 40 }}>
                <div>
                    <img 
                        src={image1} 
                        alt="Project image" 
                        className="img-fluid" 
                        style={{ maxWidth: '30%', height: 'auto', float: 'left', marginRight: '15px', marginBottom: '10px', marginTop: '-20px' }} 
                        onClick={() => handleImageClick(image1)} 
                    />
                </div>
                <div className='mb-4' style={{ overflow: 'hidden' }}>
                    <h5 className="mb-5 ms-5 fs-2">{project.title}</h5> 
                    <p className="mb-5 ms-5 fs-5 fw-light"><strong>Term:</strong> {project.term}</p> 
                    <p className='mb-4 ms-5 fs-5 fw-light'>{project.summury}</p>
                </div>
    
                <div className="d-flex flex-column" style={{ clear: 'both' }}>
                    <div className='d-flex'>
                        <img 
                            src={image2} 
                            alt="Project image" 
                            style={{ maxWidth: '100px', cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }} 
                            onClick={() => handleImageClick(image2)} 
                        />
                        <img 
                            src={image3} 
                            alt="Project image" 
                            style={{ maxWidth: '100px', cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }} 
                            onClick={() => handleImageClick(image3)} 
                        />
                        <img 
                            src={image4} 
                            alt="Project image" 
                            style={{ maxWidth: '100px', cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }} 
                            onClick={() => handleImageClick(image4)} 
                        />
                        <img 
                            src={image5} 
                            alt="Project image" 
                            style={{ maxWidth: '100px', cursor: 'pointer', marginTop: '-10px' }} 
                            onClick={() => handleImageClick(image5)} 
                        />
                    </div>
                    <div className='mt-5 fs-5 fw-light'>
                        <p>{project.description}</p>
                    </div>
                </div>
    
                {/* Modal for displaying the enlarged image */}
                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Body>
                        <img 
                            src={selectedImage} 
                            alt="Enlarged view" 
                            className="img-fluid" 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
    
    

    return (
        <div>
            <Header
                problem={project.problem}
                major={project.major}
                publishDate={project.publishDate}
                contributors={project.contributors}
            />
            <Content />
        </div>
    );
}

export default ViewProject;

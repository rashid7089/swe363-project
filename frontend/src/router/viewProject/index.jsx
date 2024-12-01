import { Modal } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './logo1.jpg';
import './style.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const initalDataBase = [
    {
        id: 1,
        problem: "Swe Project to solve water problems",
        major: "Software Engineering",
        publishDate: "2024-03-02",
        contributors: ["Mohammed Ali", "Saeed Ahmed", "Khaled Al-Ghamdi"],
        title: "UAV Obstacle Detection and avoidance",
        term: "241",
        summury: `The UAV Obstacle Detection and Avoidance project, developed by Boeing, represents a significant advancement in autonomous aerial vehicle technology.
            This initiative aims to create unmanned aerial vehicles capable of navigating complex environments independently, detecting potential obstacles, and executing evasive maneuvers without human intervention.`,
        description: `Hardware Development:
            Designing and building the UAV platform Integrating sensors (e.g., cameras, LiDAR, ultrasonic sensors)
            Implementing onboard computing systems Software Development: 
            Creating algorithms for real-time obstacle detection Developing path planning and navigation systems Implementing avoidance maneuvers Testing and Validation:
            Conducting simulations in various environments Performing real-world flight tests Refining the system based on test results
            This technology has various potential applications, including search and rescue operations, infrastructure inspection, and autonomous delivery systems.
            The ability for UAVs to detect and avoid obstacles autonomously is crucial for their safe and efficient operation in complex environments.`,
        images: [image1, image2, image3, image4, image5] // Images for project with id 1
    },
    {
        id: 2,
        problem: "SWE project to promote sustainable fashion and reduce textile waste.",
        major: "Software Engineering",
        publishDate: "2024-03-02",
        contributors: ["Aisha Al-Zahrani", "Fahad Al-Dosari", "Ahmed Al-Shehri"],
        title: "Swapp – The Clothing Swapping App",
        term: "242",
        summury: `The Swapp project introduces a mobile application designed to facilitate clothing exchange among users. 
            By providing a platform for sustainable fashion choices, Swapp helps reduce the environmental impact of textile waste and promotes a circular fashion economy.`,
        description:`Project Development:
            Designing and building the mobile application platform, with user-friendly interfaces and secure accounts.
            Implementing features for users to list, browse, and exchange clothing items directly through the app.
            Developing location-based matching for users to connect locally and reduce transportation costs and emissions.
            
            Testing and User Feedback:
            Conducting usability tests to enhance user experience and optimize the exchange process.
            Gathering feedback to continuously improve app features, interface, and performance.
            
            Impact and Application:
            The Swapp app targets eco-conscious users looking for sustainable and cost-effective fashion alternatives. 
            By promoting clothing exchange, it aims to reduce waste and foster community-driven sustainability efforts.`,
        images: [image6] // Only one image for project with id 2
    }
,
    {
        id: 3,
        
        problem: "Design and implement an effective patio awning to enhance outdoor spaces for College of Engineering facilities.",
        major: "Civil Engineering",
        publishDate: "2024-03-02",
        contributors: ["Ahmed Al-Farsi", "Sara Al-Mutairi", "Hassan Al-Bishi"],
        title: "EDI Patio Awning Design Team 1",
        term: "242",
        summury: `The EDI Patio Awning Design project focuses on creating a durable and aesthetically pleasing outdoor awning for the College of Engineering. 
            This design enhances the usability of outdoor spaces, providing shade and comfort for students and faculty.`,
        description: `Project Development:
                        Designing an awning structure that balances aesthetics with durability, suitable for various weather conditions.
                        Selecting appropriate materials to ensure long-term performance, stability, and minimal maintenance.
                        Conducting structural analyses to confirm the awning's resilience and safety under different loads.
                        
                        Testing and Validation:
                        Prototyping the design and running simulations to verify strength and material suitability.
                        Gathering feedback from stakeholders to refine the design and address specific facility needs.
                        
                        Impact and Application:
                        This project aims to create comfortable outdoor spaces that encourage more activity in the College of Engineering's outdoor facilities.
                        By providing shade and weather protection, the awning design contributes to an enhanced learning and relaxation environment.`,
        images: [image6] // Only one image for project with id 2
    
        
    }


];
function ViewProject() {
    // Initial database with project details including images
    const { id } = useParams(); 
    const projectId = parseInt(id, 10);
    const project = initalDataBase.find(proj => proj.id === projectId);

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(project.images[0]);
    

    // Return early if the project is not found
    if (!project) {
        return <p>Project not found</p>;
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleMainImageClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    function Header({ problem, major, publishDate, contributors }) {
        return (
            <div className="viewproject__header">
                <h4>{problem}</h4>
                <div className="d-flex justify-content-start mb-2 viewproject__header__details">
                    <p ><strong>Major:</strong> {major}</p>
                    <p ><strong>Publish Date:</strong> {publishDate}</p>
                </div>
                <hr className="border border-1 border-secondary border-dark" />
                <p className="viewproject__header__contributors"><strong>Contributors:</strong></p>
                <ul className="viewproject__header__list">
                    {contributors.map((contributor, index) => (
                        <li key={index} className="">{contributor}</li>
                    ))}
                </ul>
            </div>
        );
    }

    function Content() {
        return (
            <div className="viewproject__content container mt-3">
            <div className='viewproject__content__topsection' >
                <div className='viewproject__content__images'>
                    <img
                        src={selectedImage} // Display the first image
                        alt="Project main image"
                        className="viewproject__content__images__mainimage"
                        onClick={() => handleMainImageClick(selectedImage)}
                    />
                    <div className="viewproject__content__images__smallImages">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project image ${index + 1}`}
                                style={{ maxWidth: '100px', cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
               
                <div className='viewproject__content__rightside'>
                    <h4 className="viewproject__content__sectiontitle">{project.title}</h4>
                    <h5><strong>Term:</strong> {project.term}</h5>
                    <p className="">{project.summury}</p>
                </div>
            </div>

            <div>
                <h4 className="viewproject__content__sectiontitle">More Details</h4>
                <div>
                    <p>{project.description}</p>
                </div>
            </div>

                {/* Modal for displaying the enlarged image */}
                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Body>
                        <img src={selectedImage} alt="Enlarged view" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    return (
        <div className='viewproject'>
            <Header
                problem={project.problem}
                major={project.major}
                publishDate={project.publishDate}
                contributors={project.contributors}
            />
            <Content project={project} />
        </div>
    );
}

export default ViewProject;

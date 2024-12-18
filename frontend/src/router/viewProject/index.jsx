import { Modal } from 'react-bootstrap';
import './style.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../functions/authRequests';

function ViewProject() {
    const { id: projectId } = useParams(); // Fetch the project title from the URL
    const [project, setProject] = useState(null); // State for project data
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling
    const [showModal, setShowModal] = useState(false); // State for image modal
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image

    // Fetch project data based on the title
    useEffect(() => {
        fetch(`${apiBaseUrl}/project/${projectId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProject(data);
                setLoading(false);
                setSelectedImage(data.imagesIds[0]);
                console.log(selectedImage)
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Handle image click for modal
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleMainImageClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    // If loading or error occurs
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!project) return <p>Project not found</p>;

    function Header({ problem, projectMajor, createdAt, teammatesNames }) {
        return (
            <div className="viewproject__header">
                <h4>{problem}</h4>
                <div className="d-flex justify-content-start mb-2 viewproject__header__details">
                    <p><strong>Major:</strong> {projectMajor}</p>
                    <p><strong>Publish Date:</strong> {new Date(createdAt).toLocaleDateString()}</p>
                </div>
                <hr className="border border-1 border-secondary border-dark" />
                <p className="viewproject__header__contributors"><strong>Contributors:</strong></p>
                <ul className="viewproject__header__list">
                    {teammatesNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        );
    }

    function Content() {
        return (
            <div className="viewproject__content container mt-3">
                <div className="viewproject__content__topsection">
                    <div className="viewproject__content__images">
                        <img
                            src={selectedImage} // Backend route to serve images
                            alt="Project main"
                            className="viewproject__content__images__mainimage"
                            onClick={handleMainImageClick}
                        />
                        <div className="viewproject__content__images__smallImages">
                            {project.imagesIds.map((imageId, index) => (
                                <img
                                    key={index}
                                    src={imageId} // Backend route for thumbnails
                                    alt={`Project image ${index + 1}`}
                                    style={{ maxWidth: '100px', cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }}
                                    onClick={() => handleImageClick(imageId)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="viewproject__content__rightside">
                        <h4 className="viewproject__content__sectiontitle">{project.title}</h4>
                        <h5><strong>Term:</strong> {project.semester}</h5>
                        <p>{project.introduction}</p>
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
                        <img
                            src={`/api/images/${selectedImage}`} 
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
        <div className="viewproject">
            <Header
                problem={project.introduction}
                projectMajor={project.projectMajor}
                createdAt={project.createdAt}
                teammatesNames={project.teammatesNames}
            />
            <Content />
        </div>
    );
}

export default ViewProject;

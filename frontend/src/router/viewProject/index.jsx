import { Modal } from 'react-bootstrap';
import './style.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../functions/authRequests';
import { fallback_image_URL } from '../../functions/fallbackImage';

function ViewProject() {
    const { id: projectId } = useParams(); // Fetch the project title from the URL
    const [project, setProject] = useState(null); // State for project data
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling
    const [showModal, setShowModal] = useState(false); // State for image modal
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image
    const [vote, setVote] = useState(0);
    const [voteHandler, setVoteHandler] = useState(false);

    // Fetch project data based on the title
    useEffect(() => {
        fetch(`${apiBaseUrl}/project/${projectId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProject(data);
                setLoading(false);
                setSelectedImage(data.imagesIds[0]);
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

    // Voting process
    const handleVoting = () => {
        setVote((prevVote) => prevVote + 1);
        setVoteHandler(true);
    };

    // Generate a believable email based on the name
    const generateEmail = (name) => {
        const formattedName = name.toLowerCase().replace(/\s+/g, '');
        return `${formattedName}@gmail.com`;
    };

    // If loading or error occurs
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!project) return <p>Project not found</p>;

    function Header({ projectMajor, createdAt, teammatesNames }) {
        return (
            <div className="viewproject__header">
                <h4>{project.title}</h4>
                <div className="d-flex justify-content-start mb-2 viewproject__header__details">
                    <p><span>Major:</span> {projectMajor}</p>
                    <p><span>Publish Date:</span> {new Date(createdAt).toLocaleDateString()}</p>
                    <p><span>Term:</span> {project.semester}</p>
                    <p><span>Number of Votes:</span> {vote}</p>
                </div>
                <hr className="border border-1 border-secondary border-dark" />
                <p className="viewproject__header__contributors"><span>Contributors:</span></p>
                <ul className="viewproject__header__list">
                    {teammatesNames.map((name, index) => (
                        <li key={index}>
                            <a 
                                href={`mailto:${generateEmail(name)}`} 
                                className="contributor-email"
                                title={`Email: ${generateEmail(name)}`}
                            >
                                {name}
                            </a>
                        </li>
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
                        <div className="viewproject__content__images__mainimage__container">
                            <img
                                src={selectedImage || fallback_image_URL}
                                alt="Project main"
                                className="viewproject__content__images__mainimage"
                                onClick={handleMainImageClick}
                                onError={(e) => e.target.src = fallback_image_URL}
                            />
                        </div>
                        <div className="viewproject__content__images__smallImages">
                            {project.imagesIds.map((imageId, index) => (
                                imageId && (
                                    <img
                                        key={index}
                                        src={imageId}
                                        alt={`Project image ${index + 1}`}
                                        style={{ width: '100px', height: "100px", border: "1px solid lightGray", cursor: 'pointer', marginRight: '10px', marginTop: '-10px' }}
                                        onClick={() => handleImageClick(imageId)}
                                        onError={(e) => e.target.src = fallback_image_URL}
                                    />
                                )
                            ))}
                        </div>
                    </div>

                    <div className="viewproject__content__rightside">
                        <h4 className="viewproject__content__sectiontitle">Introduction</h4>
                        <pre>{project.introduction}</pre>
                    </div>
                </div>

                <div>
                    <h4 className="viewproject__content__sectiontitle">Description In Depth</h4>
                    <div>
                        <pre>{project.description}</pre>
                    </div>
                </div>

                {/* Modal for displaying the enlarged image */}
                <Modal show={showModal} onHide={handleClose} centered size="xl">
                    <Modal.Body>
                        <img
                            src={selectedImage || fallback_image_URL}
                            alt="Enlarged view"
                            className="img-fluid"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    return (
        <div className="viewproject">
            <Header
                projectMajor={project.projectMajor}
                createdAt={project.createdAt}
                teammatesNames={project.teammatesNames}
            />
            
            <button 
                type="button"  
                className="btn btn-outline-success"
                onClick={handleVoting}
                disabled={voteHandler}
            >
                Vote
            </button>
            
            <Content />
        </div>
    );
}

export default ViewProject;

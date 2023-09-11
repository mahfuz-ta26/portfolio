import { useEffect, useState } from 'react';
import '../Css/Projects.css';
import { Link } from 'react-router-dom';
import ShowProjDetails from './ShowProjDetails';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [present, setPresent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('./projects.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(!loading);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  const len = projects.length;

  const handleForward = () => {
    setPresent(present + 1);
  };

  const handleBackward = () => {
    setPresent(present - 1);
  };

  return (
    <div className='holder-project'>
      <div className='project'>
        <h1>Projects...</h1>
      </div>
      <div className="project-container">
        {loading ? (
          <p className="warning">Loading data...</p>
        ) : (
          <div className="project-card">
            <h1 className="project-title">{projects[present]?.web_name}</h1>
            <p className="project-description">{projects[present]?.about}</p>
            <div className="project-links">
              
              <div className="github-links">
                <Link to={projects[present]?.git_front}>Frontend GitHub</Link>
                <Link className="live-link" to={projects[present]?.live}>
                  Visit Live Website
                </Link>
                <Link to={projects[present]?.git_server}>Backend GitHub</Link>
              </div>
            </div>
            <div className="project-navigation">
              <button
                className={`navigation-button ${present === 0 ? 'disabled' : ''}`}
                onClick={handleBackward}
                disabled={present === 0}
              >
                Prv
              </button>
              <button
               className='navigation-button'
               onClick={() => setIsOpen(!isOpen)}
              >
               Details
              </button>
              <button
                className={`navigation-button ${present === len - 1 ? 'disabled' : ''}`}
                onClick={handleForward}
                disabled={present === len - 1}
              >
                Nxt
              </button>
            </div>
          </div>
        )}
        <ShowProjDetails
            projects={projects}
            present={present}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        ></ShowProjDetails>
      </div>
    </div>
  );
};

export default Projects;


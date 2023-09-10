import { useEffect, useState } from 'react'
import '../Css/Projects.css'
import { Link } from 'react-router-dom';
import ShowProjDetails from './ShowProjDetails';


const Projects = () => {
  const [projects,setProjects] = useState([]);
  const [present,setPresent] = useState(0);
  const [loading,setLoading] = useState(true);
  const [isOpen,setIsOpen] = useState(false);
  
  
  useEffect(()=>{
    fetch('./projects.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      setProjects(data)
      setLoading(!loading)
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  },[])

  var len = projects.length

  const handelForward = () =>{
    setPresent(present+1)
  }
  const handelBackword = () =>{
    setPresent(present-1)
  }




  
  return (
    <div className='mm'>
      {
        loading ? 
        <p className='warning'>Loading data...</p>
        :
        <div>
          <div className='info pro'>
            <h1>All Projects...</h1>
            <div className="hori"></div>
          </div>

          <div className='prject-holder'>
            
            <div className='proj-des' style={{textAlign:"justify"}}>
              <Link className='main-web' to={projects[present]?.live}>Click to visite live website</Link>
              <h1>Website name:{projects[present]?.web_name}</h1>
              <h3 style={{color:"teal"}}>{projects[present]?.about}</h3>
             
              <h2><Link to={projects[present]?.git_front}>Check front end code in github</Link></h2>
              <h2><Link to={projects[present]?.git_server}>Check back end code in github</Link></h2>
            </div>
            
            <ShowProjDetails
              projects={projects}
              present={present}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></ShowProjDetails>

          </div>
          
          <div className='btn-holder'>
            <button className={present === 0? 'disable1' : 'butun1'}  disabled={present === 0}  onClick={handelBackword}>-</button>
            <button  className='details-btn-projects' onClick={()=>setIsOpen(!isOpen)}>Details</button>
            <button disabled={present === len-1}  className={present === len-1? 'disable2' : 'butun2'} onClick={handelForward}>+</button>
          </div>

            
      </div>
      }
    </div>
  )
}

export default Projects


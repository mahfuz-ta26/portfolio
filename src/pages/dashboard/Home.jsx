import '../Css/Home.css'
import propic from '../../img/proPic1.png';
import { AiFillLinkedin , AiOutlineGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Home = ({ setIsOpen , isOpen }) => {
  return (
    <div className='home-holder'>
      
      <div className='info'>
        <h1>About me...</h1>
      </div>
      
      <div className='ex-holder'>
          <img src={propic} alt="" />
          <div className='title'>
              <h5>HI THERE! I'M</h5>
              <h3><span>MAHFUZ</span> ANAM</h3>
              <p>I'm a web developer with a focus on the 
                MERN stack, but still exploring other technologies 
                and frameworks that catch my interest! if you're 
                looking for a developer to add to your team, 
                I'd love to hear from you!</p>
              <div className='icon-bttn'>
                  <button className='res' onClick={()=>setIsOpen(!isOpen)}>Resume</button>
                  <div className="link-group">
                    <Link className='linkd' to={`https://www.linkedin.com/in/md-mahfuz-anam-tasnim-535a17282/`}><AiFillLinkedin/></Link>
                    {/* <Link className='linkd' to={`https://github.com/mahfuz-ta26`}><AiOutlineGithub/></Link> */}
                    <Link className='linkd' to={`https://github.com/mat557`}><AiOutlineGithub/></Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Home
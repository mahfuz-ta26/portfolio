import '../Css/Home.css'
import propic from '../../img/proPic1.png';
import { AiFillLinkedin } from "react-icons/ai";

const Home = ({ setIsOpen , isOpen }) => {
  return (
    <div className='home-holder'>
      
      <div className='info'>
        <h1>About me...</h1>
        <div className="hori"></div>
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
                    <button className='linkd'><AiFillLinkedin/></button>
                    <button className='linkd'><AiFillLinkedin/></button>
                    <button className='linkd'><AiFillLinkedin/></button>
                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Home
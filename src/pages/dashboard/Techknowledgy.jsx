import '../Css/Techknowledgy.css';
import { AiFillHtml5 ,  } from "react-icons/ai";
import logo from '../../img/logo.jpg';
import logo1 from '../../img/logocss.jpg';
import logo2 from '../../img/logojs.jpg';
import logo3 from '../../img/logoexp.jpg';
import logo4 from '../../img/logomongo.jpg';
import logo5 from '../../img/logogit.jpg';
import logo6 from '../../img/logofire.jpg';
import logo7 from '../../img/logofigma.jpg';
import logo8 from '../../img/logocpp.jpg';


const Techknowledgy = () => {
  return (
    <div className='tech-holder'>
      
      <div className='info'>
        <h1>Familiar technologies...</h1>
        <div className="hori1"></div>
      </div>

      <div className='data-holder'>
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
        <img src={logo8} alt="" />
      </div>


    </div>
  )
}

export default Techknowledgy
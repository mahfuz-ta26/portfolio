import { Link } from 'react-router-dom';
import '../Css/DashNav.css';
import { FaLaptopHouse , FaMobileAlt , FaBookOpen , FaEdit , FaEnvelope } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';

const DashNav = ({ isOpen , setIsOpen }) => {

    
    let content =
        <>
            <div className='dashboard'>
                
                <div className='self'>
                    <img src="" alt="" />
                    <h2>Md Mahfuz Anam Tasnim</h2>
                    <p>Junior web developer</p>
                </div>



                <div className="links">
                    
                    <Link className='link'
                        to="/"><h2><AiOutlineUser className='iconing'/><span className='n'>Home</span></h2>
                    </Link>

                    <Link className='link' 
                        to="/projects"><h2><FaEdit className='iconing'/><span className='n'>Projects</span></h2>
                    </Link>

                    <Link className='link'
                        to="/contact"><h2><FaMobileAlt className='iconing'/><span className='n'>Contact</span></h2>
                    </Link>
                    
                    <Link className='link'
                        to="/techknowledgy"><h2><FaBookOpen className='iconing'/><span className='n'>Expertise</span></h2>
                    </Link>

                    <Link className='link'
                        to="/techknowledgy"><h2><FaBookOpen className='iconing'/><span className='n'>Experience</span></h2>
                    </Link>
                    
                    {/* <Link className='link'
                        to="/admin"><h2><FaBookOpen className='iconing'/><span className='n'>Admin Access</span></h2>
                    </Link> */}

                </div>

                <div className={isOpen?'open':'link1 close download'}>
                    <div className='user y'>
                        <img src="" alt="" />
                        <h2>Md Mahfuz Anam Tasnim</h2>
                        <p>Junior web developer</p>
                    </div>
                    
                    <div className='link1'>
                        <h5 className='x' onClick={()=>setIsOpen(!isOpen)}>X</h5>
                        <h2>Check resume:</h2>
                        <a href=""><FaEnvelope className='ab'/>Click</a>
                    </div>
                </div>

            </div>
        </>
  
    return content;
}

export default DashNav

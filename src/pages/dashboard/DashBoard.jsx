import React, { useEffect, useState } from 'react'
import DashNav from "./DashNav";
import { Outlet } from 'react-router-dom';


const DashBoard = ({ isOpen , setIsOpen }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    

  return (
    <>
        <div className="holder">
            <div className="glass">
                
                {screenWidth>420 && <DashNav  className={screenWidth>420? 'now' : 'never'}   isOpen={isOpen} setIsOpen={setIsOpen}></DashNav>}
                <div className='show-item'>
                    <Outlet/>
                </div>

            </div>
        </div>
        
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            {screenWidth<420 && <DashNav  className={screenWidth<420? 'now' : 'never'}   isOpen={isOpen} setIsOpen={setIsOpen}></DashNav>}
    </>
  )
}



export default DashBoard
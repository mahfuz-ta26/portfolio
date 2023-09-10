import React, { useEffect, useState } from 'react'
import DashNav from "./DashNav";
import { Outlet } from 'react-router-dom';


const DashBoard = ({ isOpen , setIsOpen }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            // window.location.reload();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // if(screenWidth<420){
    //     window.location.reload();
    // }
    
    // console.log(screenWidth,screenHeight)

  return (
    <>
        <div className="holder">
            <div className="glass">
                
                {screenWidth>420 && <DashNav  isOpen={isOpen} setIsOpen={setIsOpen}></DashNav>}
                <div className='show-item'>
                    <Outlet/>
                </div>

            </div>
        </div>
        
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            {screenWidth<420 && <DashNav  isOpen={isOpen} setIsOpen={setIsOpen}></DashNav>}
    </>
  )
}

export default DashBoard
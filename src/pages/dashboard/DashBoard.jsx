import React from 'react'
import DashNav from "./DashNav";
import { Outlet } from 'react-router-dom';


const DashBoard = ({ isOpen , setIsOpen }) => {
  return (
    <>
        <div className="holder">
            <div className="glass">
                <DashNav isOpen={isOpen} setIsOpen={setIsOpen}></DashNav>
                
                <div className='show-item'>
                    <Outlet/>
                </div>

            </div>
        </div>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
    </>
  )
}

export default DashBoard
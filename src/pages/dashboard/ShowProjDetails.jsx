import '../Css/ShowProjDetails.css';

const ShowProjDetails = ({ projects , present , isOpen , setIsOpen }) => {
    
    return (
        <div className={isOpen?'show-details':'show-nothing'}>
            <h3 className='text'>Front end :{projects[present]?.tech_front}</h3>
            <h3 className='text'>Front end :{projects[present]?.tech_back}</h3>
            <h3 className='text'>-{projects[present]?.opinion1}</h3>
            <h3 className='text'>-{projects[present]?.opinion2}</h3>
            <h3 className='text'>-{projects[present]?.opinion3}</h3>
            <h3 className='text'>-{projects[present]?.opinion4}</h3>
            <button  className='details-btn' onClick={()=>setIsOpen(!isOpen)}>Close</button>
        </div>
    )
}

export default ShowProjDetails
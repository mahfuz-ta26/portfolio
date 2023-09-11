import '../Css/ShowProjDetails.css';

const ShowProjDetails = ({ projects , present , isOpen , setIsOpen }) => {
    
    
    return (
        <div className={isOpen?'show-details':'show-nothing'}>
            <div className='modal'>
                <h3 className='text'><span style={{color:"black" ,fontWeight:"900"}}>Frontend </span>: {projects[present]?.tech_front}</h3>
                <h3 className='text'><span style={{color:"black" ,fontWeight:"900"}}>Backend</span>  : {projects[present]?.tech_back}</h3>
                <h3 className='text' style={{paddingTop:"2rem",fontWeight:"400"}}><span style={{color:"black" ,fontWeight:"900"}}>** </span>{projects[present]?.opinion1}</h3>
                <h3 className='text' style={{fontWeight:"400"}}><span style={{color:"black" ,fontWeight:"900"}}>* </span>{projects[present]?.opinion2}</h3>
                <h3 className='text' style={{fontWeight:"400"}}><span style={{color:"black" ,fontWeight:"900"}}>* </span>{projects[present]?.opinion3}</h3>
                <h3 className='text' style={{fontWeight:"400"}}><span style={{color:"black" ,fontWeight:"900"}}>* </span>{projects[present]?.opinion4}</h3>
                <h3 className='text' style={{fontWeight:"400"}}><span style={{color:"black" ,fontWeight:"900"}}>* </span>{projects[present]?.opinion5}</h3>
                <button  className='details-btn' onClick={()=>setIsOpen(!isOpen)}>Close</button>
            </div>
        </div>
    )
}

export default ShowProjDetails
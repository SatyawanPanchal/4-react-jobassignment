import React from 'react'
import Duties from './Duties';


const JobsCurrently = ({jobs,currentItem=0}) => {
    console.log("i am in jobscurrently ",jobs[currentItem]);
     const{ id,order,title,dates,duties,company } = jobs[currentItem]
  
    if (!jobs || jobs.length === 0 || !jobs[currentItem]) 
    {
        return <div>Loading...</div>;
    }
     return (
    <div className='job_container'>
         
            
                <div>
                    
                    <Duties duties={duties}/>
                    
                </div>
            
        
    </div>
  )
}

export default JobsCurrently

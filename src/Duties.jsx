import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Duties = ({ duties }) => {
    console.log("duties here are ", duties);
    return (
 <div className='duty_container' >       
        <div >


            {duties.map((duty, index) => {
                return <div className='single_duty' key={index}>
                    <div>
                        <FaAngleDoubleRight />
                    </div>
                    <div>
                        <p>{duty}</p>
                    </div>
                </div>
            })}

        </div>

        </div>
    )
}

export default Duties

import React from 'react'

const Menu = ({ jobs, setCurrentItem }) => {

    return (
        <div className='menu_container'>
            {jobs.map((job, index) =>
                <button key={job.id} onClick={() => setCurrentItem(index)}>{job.company}</button>
            )}

        </div>
    )
}

export default Menu

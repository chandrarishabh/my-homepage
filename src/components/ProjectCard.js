import React from 'react'

function ProjectCard(props){
    return (
        <div className='card'>
            <img/>
            <h1>{props.data.heading}</h1>
            <hr/>
            
        </div>
    )
}

export default ProjectCard

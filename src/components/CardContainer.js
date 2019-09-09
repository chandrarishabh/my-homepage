import React from 'react'
import CardContent from './CardContent';

function CardContainer(props) {
    return (
        <div className='cardContainer'>
            <CardContent
                heading = {props.heading}
                date = {props.date}
                imageurl = {props.imageurl}
                details = {props.details}
            />
        </div>
    )
}

export default CardContainer

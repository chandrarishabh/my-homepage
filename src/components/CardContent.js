import React from 'react'



function CardContent(props) {

    let imgurl;
    try{
        imgurl = require(`../data/${props.imageurl}`);
    }catch(e){
        if(e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
        imgurl = require('../data/me.jpeg');
    }


    return (
        <div className='card-outerbox'>
            <div className='card-header'>
                <h3>{props.heading}</h3>
                <p>{props.date}</p>
            </div>
            <div className='card-image'>
                <img src={imgurl}/>
                <div className='card-details'>
                    <p>
                        {props.details}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default CardContent

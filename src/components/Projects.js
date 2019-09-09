import React from 'react';
import View from './View';
import './styles.css';
import CardContainer from './CardContainer';
import CardContent from './CardContent';

const projectList = [
    {
        heading:'2048 The Game',
        date:'August, 2019',
        imageurl : '2048game.jpg',
        details : 'Recreating famous game of 2048 entirely in ReactJS!'
    }
    ,{
        heading:'SNEAK100',
        date:'June, 2019',
        imageurl : 'sneak.jpg',
        details : 'SNEAK100 is a GUI program allows you to hide texts within images. To make it more secure it encrypts the text before hiding the text. For encryption it uses a modified RSA algorithm. You can also generate your own unique realtime key pair for encryption and decryption that makes it even more secure.'
    },
    {
        heading:'Dogs Vs Cats',
        date:'January, 2019',
        imageurl : 'dogscats.jpg',
        details : 'Algorithm to classify whether images contain either a dog or a cat. Dataset taken from kaggle. The training archive contains 25,000 images of dogs and cats.'
    }

]



function Projects() {

    const objectList = projectList.map((p)=>{
        return <CardContainer
            heading = {p.heading}
            date = {p.date}
            imageurl = {p.imageurl}
            details = {p.details}
        />
    })
    
    return (
        <div>
            <View>
                <div className='pageContent'>
                    <h2>PROJECTS</h2>
                    <hr/>
                    <div className='projects-container'>
                        {objectList}
                    </div>
                </div>
            </View>
        </div>
    )
}

export default Projects

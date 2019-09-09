import React from 'react';
import './styles.css';
import photo from '../data/me.jpeg';
import ContactCard from './ContactCard'

function IntroCard() {
    return (
        <div>
            <div className='intro'>
                <img src={photo}/>   
                <div className='intro-header'>
                    <h1>RISHABH CHANDRA</h1>
                    <h4><a href='mailto:rishabhchandra04@gmail.com'>rishabhchandra04@gmail.com</a></h4>
                </div>
                <div>  
                    <h3>ABOUT</h3>
                    <p className='pageContent'>
                        Hi, I'm Rishabh. I am a third year undergrad computer science student.
                        I love solving problems and building products. On my way to become full stack web developer.
                    </p>
                </div>
            </div>
            <div className='intro-contact-card'>
                <ContactCard/>
            </div>
        </div>
    )
}

export default IntroCard

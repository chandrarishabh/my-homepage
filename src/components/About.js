import React from 'react';
import View from './View';
import './styles.css';
import ContactCard from './ContactCard';


function About() {
    return (
        <div>
            <View>
                <div className='pageContent'>
                    <h2>ABOUT</h2>
                    <h4>A beautiful, responsive react app built using modern Javascript.</h4>
                    <hr/>
                    <p>
                        Welcome to my website.
                        Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.
                        Source available here.
                    </p>
                </div>
            </View>
        </div>
    )
}

export default About

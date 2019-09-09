import React from 'react'
import './styles.css'
import instagram from '../data/icons/instagram.png';
import github from '../data/icons/github.png';
import linkedin from '../data/icons/linkedin.png';
import facebook from '../data/icons/facebook.png';


function ContactCard() {
    return (
        <div className='contact-card'>
            <a target='_blank' href='www.facebook.com' >
                <img className='contact-card-img' src={facebook} alt='fb'/>
            </a>
            <a target='_blank' href='www.facebook.com' >
                <img className='contact-card-img' src={instagram} alt='insta'/>
            </a>
            <a target='_blank' href='www.facebook.com' >
                <img className='contact-card-img' src={github} alt='github'/>
            </a>
            <a target='_blank' href='www.facebook.com' >
                <img className='contact-card-img' src={linkedin} alt='linkedin'/>
            </a>
        </div>
    )
}

export default ContactCard

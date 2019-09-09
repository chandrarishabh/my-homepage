import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import DrawerButton from './DrawerButton';

function NavBar(props) {
    return (
        <div className='navBar'>
            <h3 className='logo'>RISHABH CHANDRA</h3>
            <div className='navItems'>
                <ul>
                    <div class="outer"><div class="inner"></div></div>
                    <Link className='link' to='/about'><li>ABOUT</li></Link>
                    <div class="outer"><div class="inner"></div></div>
                    <Link className='link' to='/projects'><li>PROJECTS</li></Link>
                    <div class="outer"><div class="inner"></div></div>
                </ul>
            </div>
            <DrawerButton handler={props.handler}/>
        </div>
    )
}

export default NavBar
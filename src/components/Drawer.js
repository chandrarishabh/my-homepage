import React from 'react';
import './styles.css';
import close_icon from '../data/cancel.png';
import {Link} from 'react-router-dom';

function Drawer(props) {
    let styleClass = 'drawer';
    if(props.show){
        styleClass = 'drawer open';
    }
    return (
        <div className='drawerContainer'>
            <div className={styleClass}>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <img onClick={props.handler} src={close_icon} height='20px' width='20px'/>
                </div>
                <ul>
                    <Link className='link' to='/about'><li>ABOUT</li></Link>
                    <Link className='link' to='/projects'><li>PROJECTS</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Drawer

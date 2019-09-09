import React,{useState} from 'react';
import NavBar from './NavBar';
import './styles.css';
import Drawer from './Drawer';
import IntroCard from './IntroCard';

const Backdrop = (props) =>{
    return(
        <div className='backdrop' onClick={props.handler}/>
    )
}

function View(props) {

    const [dToggle, setDToggle] = useState(false); // drawerToggle

    const dHandler = () => {
        console.log('DrawerButton Clicked');
        setDToggle((prev)=>!prev);
    }

    return (
        <div className='appContainer'>
            <Drawer show={dToggle} handler={()=>setDToggle(false)}/>
            {dToggle && <Backdrop handler={()=>setDToggle(false)}/>}
            <NavBar handler={dHandler}/>
            <div className='pageContainer'>
                <div className='leftWrapper'>
                    <div className='leftContainer'>
                        <IntroCard/>
                    </div>
                </div>
                <div className='rightWrapper'>
                    <div className='rightContainer'>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default View

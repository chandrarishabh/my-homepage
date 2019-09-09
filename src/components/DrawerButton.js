import React from 'react'

function DrawerButton(props) {
    return (
        <div className='hamburgerButton'>
            <div onClick={props.handler} className='hamStyle'>
                <div></div>
                <div></div>
                <div></div>    
            </div>        
        </div>
    )
}

export default DrawerButton

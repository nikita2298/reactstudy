import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>greetParent</button> */}
            <button onClick={()=>props.greetHandler('child')}>greetParent</button>
        </div>
    )
}

export default ChildComponent

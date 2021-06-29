import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    console.log(props);
    let className1=props.primary ? 'primary' : 'n'
    console.log(className1);
    return (
        <div>
            <h1 className={className1}>Stylesheet</h1>
        </div>
    )
}

export default StyleSheet


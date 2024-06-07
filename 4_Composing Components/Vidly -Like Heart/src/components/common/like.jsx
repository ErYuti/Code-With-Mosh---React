import React, { Component } from 'react'

//inpunt : liked => boolean
//output : onclick => 

const Like = (props) => {
    let classes = 'fa fa-heart';
    if(!props.liked) classes += "-o"
        return (
            <i style ={{cursor : 'pointer' }} onClick={props.onClick} className={classes} aria-hidden='true'></i>
        );
}

export default Like;
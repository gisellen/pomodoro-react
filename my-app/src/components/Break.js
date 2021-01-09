import React from 'react';

function Break(props){
    function decreaseBreak(){
        if(props.breakInterval === 1){
            return;
        }

        props.decreaseBreak();
    }

    function increaseBreak(){
        if(props.breakInterval === 60){
            return;
        }

        props.increaseBreak();
    }

    return(
        <section className="interval-container">
            <button onClick={decreaseBreak}>Down</button>
            <p>{props.breakInterval}</p>
            <button onClick={increaseBreak}>Up</button>
        </section>
    );
}

export default Break
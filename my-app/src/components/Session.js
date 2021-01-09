import React from 'react';

function Session(props){
    function decreaseSession(){
        if(props.sessionInterval === 1){
            return;
        }
        
        props.decreaseSession();
    }

    function increaseSession(){
        if(props.sessionInterval === 60){
            return;
        }

        props.increaseSession();
    }
    return(
        <section className="interval-container">
            <button onClick={decreaseSession}>Down</button>
            <p>{props.sessionInterval}</p>
            <button onClick={increaseSession}> Up</button>
        </section>

    );
}

export default Session
import React from 'react';
import Button from 'react-bootstrap/Button'

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
            <section>
                <p>Session Minutes</p>
            </section>
            <section className="interval-buttons">
                 <Button onClick={decreaseSession} variant="outline-dark">-</Button>{' '}
            <p className="minute-text">{props.sessionInterval}</p>
            <Button onClick={increaseSession} variant="outline-dark">+</Button>{' '}
            </section>
        </section>

    );
}

export default Session
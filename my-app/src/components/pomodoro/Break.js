import React from 'react';
import Button from 'react-bootstrap/Button'

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
            <section>
            <p>Break Minutes</p>
            </section>
            <section className="interval-buttons">
            <Button onClick={decreaseBreak} variant="outline-dark">-</Button>{' '}
            <p className="minute-text">{props.breakInterval}</p>
            <Button onClick={increaseBreak}  variant="outline-dark">+</Button>{' '}
            </section>
        </section>
    );
}


export default Break;
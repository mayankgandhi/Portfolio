import React from 'react'  
import './Card.css'


const Card = props => (
    <div className="Card">
        <div className="CardFront">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </div>
        <div className="CardBack">
            This is the back of the card.
        </div>
        
    </div>
)

export default Card
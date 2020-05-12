import React from 'react'  
import '../styles/Card.css';

const Card = props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <h5>Stack:{props.stack}</h5>
    </div>
)

export default Card
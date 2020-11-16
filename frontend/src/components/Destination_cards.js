import React from 'react';
import '../styles/Destination_cards.css'

function Destination_cards({ src, title, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default Destination_cards;
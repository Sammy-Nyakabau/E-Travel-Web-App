import React from 'react';
import '../styles/Recc_card.css'

function Recc_card({ src, title, description, price, onClick }) {
    return (
        <div className='Recc_card' onClick={onClick}>
            <img src={src} alt="" />
            <div className="Recc_card__info">
                <h2>{title}</h2>
                <h2>⭐⭐⭐⭐</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Recc_card
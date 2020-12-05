import React from "react";
import "../styles/RecCard.css";
import CurrencyFormat from "react-currency-format";
import StarIcon from "@material-ui/icons/Star";

function RecCard({ src, title, rating, price, onClick }) {
  return (
    <div className="Recc_card" onClick={onClick}>
      <div>
        <img className="RecCard_img" src={src} alt="" style={{ objectFit: "cover" }} />
      </div>
      <div className="Recc_card__info">
        <h2>{title}</h2>
        <div className="RecCard_rating">
          <StarIcon className="RecCard_star" style={{ fill: "D90964" }} />
          <p>{rating}</p>
        </div>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>{value} /night</h3>
            </>
          )}
          decimalscale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default RecCard;

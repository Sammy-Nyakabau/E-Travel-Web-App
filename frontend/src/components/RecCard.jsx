import React from "react";
import "../styles/Recc_card.css";
import CurrencyFormat from "react-currency-format";
import StarIcon from "@material-ui/icons/Star";

function RecCard({ src, title, rating, price, onClick }) {
  return (
    <div className="Recc_card" onClick={onClick}>
      <div>
        <img src={src} alt="" style={{ objectFit: "cover" }} />
      </div>
      <div className="Recc_card__info">
        <h2>{title}</h2>
        <div>
          <StarIcon style={{ fill: "FF9529" }} />
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

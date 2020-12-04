import React from "react";
import RecCard from "./RecCard";
import "../styles/Recommendation_options.css";

function RecommendationOptions({ one, two, three }) {
  return (
    <div className="Recommendation_options">
      <div className="recc__section">
        <RecCard
          src={one.image}
          title={one.name}
          price={one.night_price}
          rating={one.start_rating}
        />
        <RecCard
          src={two.image}
          title={two.name}
          price={two.night_price}
          rating={two.start_rating}
        />
        <RecCard
          src={three.image}
          title={three.name}
          price={three.night_price}
          rating={three.start_rating}
        />
      </div>
    </div>
  );
}

export default RecommendationOptions;

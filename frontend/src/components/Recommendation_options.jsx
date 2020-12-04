import React from 'react'
import Recc_card from "./Recc_card"
import "../styles/Recommendation_options.css"

function Recommendation_options() {
    return (
        <div className="Recommendation_options">
            <div className="recc__section">
          <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"          />
          <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"          />
          <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"
          />
      
        </div>


            {/* <div classname="recc_row">
            <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"
          />
          <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"
          />
          <Recc_card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="P/1/07❤ENTIRE CONDO! Downtown! 24 Concierge!"
            price="$80"
          />
            </div> */}
        </div>
    )
}

export default Recommendation_options

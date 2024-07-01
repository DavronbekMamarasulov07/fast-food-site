import {foods_card} from "../../../db"
import FoodComponent from "../../../utils"

const Burger = () => {
  return (
    <div className='noodles'>
      <div className="container">
        <div className="noodles_card_content">
          {
            foods_card.slice(4,8).map((element) => (
              <FoodComponent element={element} key={element.id} />

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Burger

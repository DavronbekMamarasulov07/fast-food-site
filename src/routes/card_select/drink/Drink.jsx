import {foods_card} from "../../../db"
import FoodComponent from "../../../utils"

const Drink = () => {
  return (
    <div className="noodles">
      <div className="container">
        <div className="noodles_card_content">
          {foods_card.slice(8,12).map((element) => (
            <FoodComponent element={element} key={element.id}  />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Drink

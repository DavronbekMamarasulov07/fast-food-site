
import "./Noodles.css"
import {foods_card} from "../../../db"
import FoodComponent from "../../../utils"



const Noodles = () => {
  return (
    <div className='noodles'>
        <div className="noodles_card_content">
          {
            foods_card.slice(0,4).map((element) => (
                  <FoodComponent element={element}  key={element.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Noodles



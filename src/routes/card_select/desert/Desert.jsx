import {foods_card} from "../../../db"
import FoodComponent from "../../../utils"

const Desert = () => {
  return (
    <div className="noodles">
      <div className="container">
        <div className="noodles_card_content">
          {foods_card.slice(12,16).map((element) => (
            <FoodComponent element={element} key={element.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desert;

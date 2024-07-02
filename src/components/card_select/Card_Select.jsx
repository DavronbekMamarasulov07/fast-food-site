import { NavLink } from 'react-router-dom';
import './Card_Select.css';

import noodles_img from '../../images/noodles.svg';
import drink_img from '../../images/drink.svg';
import burger_img from '../../images/burger.svg';
import desert_img from '../../images/desert.svg';

const Card_Select = () => {
  return (
    <div className="card_select_container">
      <ul className="card_select_list">
        
        <li>
          <NavLink className="card_select_list_item_link" to="/home/card_select/noodles">
            <img src={noodles_img} alt="Noodles" />
            <span>Noodles</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="card_select_list_item_link" to="/home/card_select/burger">
            <img src={burger_img} alt="Burger" />
            <span>Burger</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="card_select_list_item_link" to="/home/card_select/drink">
            <img src={drink_img} alt="Drink" />
            <span>Drink</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="card_select_list_item_link" to="/home/card_select/desert">
            <img src={desert_img} alt="Desert" />
            <span>Desert</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Card_Select;

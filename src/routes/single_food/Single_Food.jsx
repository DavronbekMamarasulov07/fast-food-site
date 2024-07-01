
import { Link, useParams } from 'react-router-dom';

import { foods_card } from '../../db';
import { BiPlus } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import "./Single_Food.css";

const Single_Food = () => {
  let { foodId } = useParams();

  const food = foods_card.find(food => food.id === parseInt(foodId));

  if (!food) {
    return <div>Food not found!</div>;
  }

  return (
    <div className='single_food_page'>
          <div className="single_nav">
             <Link to="/">Back</Link>
          </div>
          <div className="single_food">
             <div className="single_food_img">
                <img width={770} src={food.img} alt="noodles" />
             </div>
             <div className="single_food_wrapper">
                <h3>{food.name}</h3>
                <p>{food.decription}</p>
                <div className="single_food_rating">
                   <div className="single_food_rating_start">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                   </div>
                   <span>{food.rating}</span>
                </div>
                <strong className="single_food_price">${food.price}</strong>
                <button className="single_food_btn">
                   <BiPlus />
                </button>
             </div>
          </div>
    </div>
  );
};

export default Single_Food;

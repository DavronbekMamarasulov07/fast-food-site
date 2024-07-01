import { BiPlus } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FoodComponent = ({ element }) => {
    return (
        <div className="noodles_card" >
            <div className="noodles_card_img">
                <img  width={370} src={element.img} alt="noodles" />
            </div>
           
                <div className="noodles_card_wrapper">
                    <h3>{element.name}</h3>
                    <p>{element.decription}</p>
                    <div className="noodles_card_rating">
                        <div className="noodles_card_rating_start">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <span>{element.rating}</span>
                    </div>
                    <strong className="noodles_card_price">${element.price}</strong>
                    <Link to={`/single-food/${element.id}`}> 
                        <button className="noodles_card_btn">
                            <BiPlus />
                        </button>
                    </Link>
                </div>
           
        </div>
    )
}

export default FoodComponent

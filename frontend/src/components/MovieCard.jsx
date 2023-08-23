import React from "react";
import './MovieCard.css';

import {useState, useEffect} from "react";
import { addProduct, deleteProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const MovieCard = ({title, image}) => {

    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        setAdded(!added)
        dispatch(
            addProduct({ name: title, price: 120, quantity: 1 })
          );
    }

    const handleDeleteProduct = () => {
        setAdded(!added)
        dispatch(
            deleteProduct({ name: title, price: 120, quantity: 1 })
          );
    }

    return ( 
        <div className="movieCard">
            <img src={image}></img>
            <b>{title}</b> &#8377; 120.00
            <button className={added ? "addedToCart" : "addToCart"}
            onClick={added ? handleDeleteProduct : handleAddToCart}
            >{added ? "Moved to cart" : "Add to Cart"}</button>
        </div>
    )
}

export default MovieCard;
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddToCard, Delete } from "..";

const Product = (props) => {
  const { id, name, price, image, description, pet_category } =
    props.product;
  const productsLocalStorage = localStorage.getItem("products");
  if (!productsLocalStorage) {
    localStorage.setItem("products", JSON.stringify([]));
  }

  const InCart = ({ match }) => {
    if (match && match.path === "/cart") {
      return false;
    }
    return true;
  };

  const IsLogin = ({ isLogin }) => isLogin;

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <div className="product-image">
          <img src={image} alt="product" />
        </div>
        <h1 className="title">{name}</h1>
        <div className="description-box"><p className="description">{description}</p></div>
        <p className="price">{price}$</p>
        <p className={`forPet ${pet_category}`}>{pet_category}</p>
      </Link>
      <div className="btns">
        {InCart(props) && <AddToCard {...props} />}

        {InCart(props) && IsLogin(props) && (
          <>
            <button
              className="edit-btn"
              onClick={() =>
                props.openEditModalHandler("UpdateProduct", props.product)
              }
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <Delete {...props} />
          </>
        )}
      </div>

      {!InCart(props) && (
        <button
          className="delete-btn"
          onClick={() => props.deleteCartProduct(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </div>
  );
};

export default Product;

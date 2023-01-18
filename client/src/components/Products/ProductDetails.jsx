import React, { Component } from 'react';
import AddToCard from '../Buttons/AddToCard';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './productPageStyle.css';
import { Link } from 'react-router-dom';
class ProductDetails extends Component {
  state = {
    singleProduct: '',
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/products/product/${id}`)
      .then((data) => data.json())
      .then(({ data }) => this.setState({ singleProduct: data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { name, description, price, pet_category, image } =
      this.state.singleProduct;
    const { updateNumberCartProduct, updateCartProduct } = this.props;
    const productDetails = (
      <div className='product-details'>
          <Link to='/'>
            <FontAwesomeIcon icon={faArrowLeft} className='back-btn' />
          </Link>
        <div className='container'>
          <div className='product-details-container'>
            <div className='product-img'>
              <img src={image} alt='product' />
              <div className='img-overlay'>
                Some text here why not test it yourself</div>
            </div>
            <div className='product-info'>
              <h2 className='product-name'>
                {name} <span className='product-pet'>{pet_category}</span>
              </h2>
              <h4 className='product-description'>{description}</h4>
              <p className='about'>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
              <p className='product-price'>
                <sup>$</sup>
                {price}
                <span className='free'>Free Delivery</span>
              </p>
              <AddToCard
                product={this.state.singleProduct}
                alertSuccess={this.props.alertSuccess}
                alertError={this.props.alertError}
                updateNumberCartProduct={updateNumberCartProduct}
                updateCartProduct={updateCartProduct}
              />
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        {!this.state.singleProduct && <div className='loader'>Loading...</div>}
        {this.state.singleProduct && productDetails}
      </div>
    );
  }
}
export default ProductDetails;

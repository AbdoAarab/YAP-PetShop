import React, { Component } from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class ProductsFilter extends Component {
  state = {
    searchValue: '',
    selectValue: '',
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
    this.props.handleSearch(event);
  };

  handleSelect = (event) => {
    this.setState({ selectValue: event.target.value });
    this.props.handleSelect(event);
  };

  render() {
    const { openModalHandler, isLogin } = this.props;
    return (
      <div className='inputs-section'>
        <input placeholder='Search for product' onChange={this.handleSearch} />
        <div>
          {isLogin && (
            <button
              className='btn-add-product'
              onClick={() => openModalHandler('CreateProduct')}>
              <FontAwesomeIcon icon={faPlus} className='add-icon'/>
              Add Pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProductsFilter;

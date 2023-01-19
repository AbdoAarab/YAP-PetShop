import React from "react";
import styles from "./form.module.css";
const CreateProduct = ({
  handleChange,
  handleCreateProduct,
  formInput: { name,  petCategory, price, image,description },
  hasErrorValidation,
}) => {
  const petCategories = ["cat", "dog", "horse", "bird", "fish"];
  return (
    <div className={styles.container__modal__product}>
      <h1 className={styles.title__modal__product}>Enter The Pet's Details</h1>
      <form className={styles.form__group__product}>
        <div className={styles.form__input__product}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter the name of the pet..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="petCategory">Pet Category</label>
          <select
            id="petCategory"
            name="petCategory"
            value={petCategory}
            onChange={handleChange}
          >
            <option key="Select an animal type" value="" disabled selected hidden>Select an animal type</option>
            {petCategories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0"
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
            placeholder="Enter the price of the pet..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={image}
            onChange={handleChange}
            placeholder="Enter the image of the pet..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter a description about the pet..."
          >
            {description}
          </textarea>
        </div>
        {hasErrorValidation && (
          <div className={styles.form__input__product}>
            <p className="error">Inputs Should not be empty!</p>
          </div>
        )}
        <div className={styles.form__input__product}>
          <button
            className={styles.btn__create__product}
            type="button"
            onClick={handleCreateProduct}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

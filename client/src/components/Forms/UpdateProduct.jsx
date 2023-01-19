import React from "react";
import styles from "./form.module.css";
const UpdateProduct = ({
  handleChange,
  handleUpdateProduct,
  formInput: { name, petCategory, price, image,description },
  hasErrorValidation,
}) => {
  const petCategories = ["cat", "dog", "horse", "bird", "fish"];
  return (
    <div className={styles.container__modal__product}>
      <h1 className={styles.title__modal__product}> Update Pet Details </h1>
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
            onClick={handleUpdateProduct}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;

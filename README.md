<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/logo-pink.png" alt="Logo" width="150" height="80">
  </a>

<h3 align="center">YAP Shop</h3>

  <p align="center">
    Your Adorable Pet Shop
    <br />
    <br />
    <a href="https://github.com/AbdoAarab/YAP-PetShop/issues">Report Bug</a>
    ·
    <a href="https://github.com/AbdoAarab/YAP-PetShop/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#Features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Features preview">Features preview</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![HomePage](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/HomePage.png)

<br />
At YAP, we offer a wide selection of healthy and happy animals for you to adopt as a new member of your family. Whether you're looking for a new companion for yourself or your children, we have a variety of cats, dogs, birds, and other small animals to choose from. Our team of experts is dedicated to providing exceptional customer service and ensuring you find the perfect match. Thank you for choosing us as your source for adopting a new pet.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- React
- Express
- Node
- PostgreSQL

<p align="right">(<a href="#top">back to top</a>)</p>


## Features

- Add pets to your cart
- Modify quantitu of pets in your cart
- Checkout and pay for your order as you see the total cost.
- Sign in as a user to create products.
- Sign in as a user to edit and delete products

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Features preview

- View pets and filter them
 <br/>

![filters-preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/filters-preview.gif)
 <br/>

- Check and add pets to Cart
  <br/>

![Add-to-cart-Preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/Add-to-cart-Preview.gif)
  <br/>


- Change pets quantity and checkout
 <br/>

![cart-Preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/cart-Preview.gif)
 <br/>

- Sign in with your account to manage pets
 <br/>

![signin-Preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/signin-Preview.gif)
 <br/>

- Add or edit pets while signed in
 <br/>

![add-update-pet-Preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/add-update-pet-Preview.gif)
 <br/>

- 404 Page not found 
 <br/>

![404-notfound-Preview](https://github.com/AbdoAarab/YAP-PetShop/blob/main/media/404-notfound-Preview.png)
 <br/>

<p align="right">(<a href="#top">back to top</a>)</p>


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

First, here are the things you need to use the software and how to install them.

- Yarn

```
npm install -g yarn
```

- Node
- PostgreSQL

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AbdoAarab/YAP-PetShop
   ```
2. Install dependencies
   ```sh
   Yarn install
   ```
3. Create .env file
   ```sh
    touch .env
   ```
4. Add your database credentials to .env

   ```sh
    DATABASE_URL="postgres://user:password@localhost:5432/dbname"
   ```

5. Run the build script to build the database

   ```sh
   yarn build-db:dev
   ```

6. Run the development server

   ```sh
    yarn dev
   ```
7. Run the client server

   ```sh
    yarn dev:client
   ```

   <p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

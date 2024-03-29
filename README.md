# b8a10-brandshop-server-side-ornob90

# AutoMobileShop Backend

## Website Name

VehicleCommerce [Server Side]

## Description

AutoMobileShop is the backend server for a modern online automobile shopping platform. It provides a set of APIs to manage products, user carts, and advertisements for different brands and categories of automobiles. The backend is designed to support a dynamic and user-friendly front-end application for automobile enthusiasts.

## Base URL

- **https://automobile-server-lime.vercel.app**

## APIs

### 1. Get All Products

- **Endpoint:** `/products`
- **Description:** Get a list of all available automobile products.
- **HTTP Method:** GET

### 2. Get All Cart Products

- **Endpoint:** `/carts`
- **Description:** Get a list of products in the user's cart.
- **HTTP Method:** GET

### 3. Get Products by Category

- **Endpoint:** `/products/:category`
- **Description:** Get products by a specific category, e.g., "Ford" or "Honda."
- **HTTP Method:** GET

### 4. Get Single Product Details

- **Endpoint:** `/product/:id`
- **Description:** Get detailed information about a single product using its unique ID.
- **HTTP Method:** GET

### 5. Get Ads Data by Category

- **Endpoint:** `/ads/:category`
- **Description:** Get advertisements for a specific category of automobiles.
- **HTTP Method:** GET

### 6. Add a Single Product

- **Endpoint:** `/product`
- **Description:** Add a new automobile product to the database.
- **HTTP Method:** POST

### 7. Add a Single Cart Product

- **Endpoint:** `/carts`
- **Description:** Add a product to the user's cart.
- **HTTP Method:** POST

### 8. Add Multiple Products

- **Endpoint:** `/products`
- **Description:** Add multiple automobile products to the database.
- **HTTP Method:** POST

### 9. Add Ads

- **Endpoint:** `/ads`
- **Description:** Add advertisements for different automobile categories.
- **HTTP Method:** POST

### 10. Update a Product

- **Endpoint:** `/products/:id`
- **Description:** Update the details of an existing product using its unique ID.
- **HTTP Method:** PUT

### 11. Delete a Product

- **Endpoint:** `/products/:id`
- **Description:** Delete a product from the database using its unique ID.
- **HTTP Method:** DELETE

### 12. Delete a Cart Product

- **Endpoint:** `/cart/:id`
- **Description:** Delete a product from the user's cart using its unique ID.
- **HTTP Method:** DELETE

## Getting Started

1. Clone this repository.
2. Set up a MongoDB database and configure the `.env` file with the database connection information.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.

**Note:** Make sure to connect this backend with the front-end application to create a complete online automobile shopping platform.

Happy coding!

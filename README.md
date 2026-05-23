# Online Shop API & Frontend

A simple full-stack online shopping application built with React, Node.js, Express, and MySQL. The project includes product listing, product detail pages, shopping cart functionality, and RESTful APIs for managing products and cart operations.

## Features

- Product Listing Page
- Product Detail Page
- Add to Cart Functionality
- Remove from Cart
- REST API Integration
- Responsive Frontend UI
- MySQL Database Integration
- Express.js Backend
- Dynamic Routing with React Router

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6)
- CSS3
- React Router DOM

### Backend
- Node.js
- Express.js
- MySQL

## API Features

- Fetch All Products
- Fetch Single Product Details
- Add Product to Cart
- Get Cart Items
- Delete Cart Items

## Project Structure

```bash
project/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── database/
│   └── ...

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Installation

Clone Repository
git clone <your-repository-link>

Install Frontend Dependencies

cd frontend
npm install
npm run dev

Install Backend Dependencies

cd backend
npm install
npm start
Database Setup
Create a MySQL database
Import your SQL file
Configure database credentials in your backend configuration

Example:

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "online_shop"
});

Future Improvements
User Authentication
Payment Gateway Integration
Order Management
Admin Dashboard
Product Search & Filters
Wishlist Feature
JWT Authentication


Author

AHMAD NAWAZ


---

## Short GitHub Repository Description

```text
Simple full-stack online shopping application using React, Node.js, Express, and MySQL with product listing, cart

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

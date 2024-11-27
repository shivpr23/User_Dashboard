# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# User Admin Dashboard

## Project Overview

This project is a **User Admin Dashboard** built with **Vite** and **React**. The dashboard is designed for an admin to manage users, including their roles and access. Admins can log in, view a list of users, select a user, and perform role management functions. The app also includes a login section where users can select a specific account to log in and has a logout option.

## Features

- **Login Section**: Admins can log in by selecting a specific user from a list of available users.
- **Manage Users**: Admins can view all users and their details (name, role, etc.).
- **Manage User Roles**: Admins can modify the roles of users (e.g., assign admin or regular user roles).
- **Logout**: Admin can log out of the dashboard and return to the login screen.

## Setup Instructions

Follow these steps to set up the project locally on your machine:

## Prerequisites

Before starting, make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (or Yarn, if preferred)
- **Vite** (for project bundling)

## 1. Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/shivpr23/User_Dashboard.git
```
## 2. Install dependencies

Navigate to the project folder and install the necessary dependencies:

```bash
Copy code
cd user-admin-dashboard
npm install
```
## 3. Run the development server


Start the development server using Vite:

```bash
Copy code
npm run dev
```
By default, the app will be accessible at http://localhost:5173.

## 4. Build for production

To create a production build of the application, run:

```bash
Copy code
npm run build
```
This will generate optimized files for deployment in the dist/ folder.

# Explanation of Features

## 1. Login Section

The login page allows an admin to log into the dashboard by selecting a user from a predefined list. The selected user’s credentials are used to authenticate the admin and grant access to the dashboard.
Admins can choose from a list of users (with roles).
After selecting a user, the login will proceed, and the user will be redirected to the dashboard.

## 2. User Management

Once logged in, the admin will have access to a list of all users. Each user’s details, including their name and current role, will be displayed.
Admin can click on any user to view more details or update their role.

## 3. Role Management

Admins can modify the roles of users within the dashboard. The roles available may include:
Admin: Full access to the application and all its features.
User: Limited access, based on the predefined permissions.
The admin can select a user and change their role with ease.

## 4. Logout

The app includes a logout button that allows the admin to securely log out of the dashboard and return to the login screen.

## 5. UI and Design

The user interface is designed for clarity and simplicity, with the goal of providing a seamless experience for admins when managing users. It uses React components for dynamic rendering and state management, ensuring smooth interactions.

# Technologies Used

React: For building the user interface.
Vite: For fast bundling and development server.
CSS: For styling the application.
Contributing
Feel free to fork the repository and make any contributions. If you find any bugs or have feature requests, open an issue or create a pull request.

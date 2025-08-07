# Usability Evaluation Platform

## Project Overview

This project is a web-based usability evaluation platform that allows users to register as testers, evaluate the usability of software applications, and manage the issues they identify. The system supports multiple user roles including guest users, software owners, and system administrators, providing a complete and structured usability evaluation process.

## Project Features

User registration and login system
Role-based access control (Tester, Guest, Owner, Admin)
Interface for conducting usability evaluations
Issue reporting and management tools
Dashboard for admins to monitor system-wide activity
Responsive and user-friendly design built with React
RESTful API integration with a Node.js backend and MongoDB database

## Technologies Used

Frontend: React
Backend: Node.js with Express
Database: MongoDB
Authentication: JSON Web Token (JWT)
Version Control: Git
Package Manager: npm

## Getting Started

### Prerequisites

Make sure the following are installed on your machine:

* Node.js
* npm
* MongoDB

### Installation

Clone the repository and install dependencies:

git clone (https://github.com/furkanarslan00/UsabilityTestingPlatform)
cd usability-platform
npm install

### Running the Application

To start the development server:

npm start

By default, the application will run at [http://localhost:3000](http://localhost:3000)

Make sure your MongoDB server is running locally or provide a connection string if using a remote database.

## Project Structure

The project is organized into the following structure:

client/ (React frontend)
server/ (Node.js backend)

* models/
* routes/
* controllers/
* middleware/
* config/

## User Roles

Guest: Limited access, can view public content
Tester: Can register, perform usability tests, and report issues
Software Owner: Can submit their software for testing and review feedback
Admin: Has access to all system data and can manage users and reports

## Contact

Furkan Arslan
Email: [furkan0tr0arslan@gmail.com](mailto:furkan0tr0arslan@gmail.com)


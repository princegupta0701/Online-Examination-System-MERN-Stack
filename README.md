# Online Examination Application (Using MERN Stack)

The Online Examination Application is a comprehensive platform designed to facilitate the creation, administration, and evaluation of online exams. It aims to provide a seamless experience for both examiner and examinee, ensuring that exams are conducted efficiently, securely, and with minimal administrative overhead.

# Tech Stack Used:-

1. Frontend: HTML, CSS, JavaScript, React.js
2. Backend: Node.js, Express.js
3. Database: MongoDB
4. Authentication: JWT (JSON Web Tokens)
5. Smtp.js
6. nodemailer
7. Redux js
8. Ant Design

# Key Features:-

	1. User management
    2. Modular code
    3. Permission management
    4. Persistent answers on page refresh in the test portal
    5. Examination results using graphs
    6. Results can directly be downloaded as excel sheet
    7. Feedback system

# Steps to Run This Project Locally:-

## Install this project with npm For Backend

Clone the Project

```bash
	git clone <The Github Repository Link>
```
Go to the project directory
 
```bash
  cd Cloned Directory/Backend
```
Install dependencies
  
```bash  
  npm install
```

## Install this project with npm For Frontend

Go to the project directory

```bash
  cd Cloned Directory/Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Steps to Do After Cloning The Repository:-
	
	1. open the default.json file located inside the config folder in Backend directory.
	
	2. Make the required changes in default.json file Like configure the mongodb Localhost ConnectionString 
	   and also update the userid and password for Smtp(Mailer) Server module to work.
	
	3. Call the `createadmin`(located inside connection.js inside services Folder in Backend directory)
	   function after configuring admin details in it from tool.js file inside services Folder in Backend directory and run the server.

	4. To run the Backend server, use "nodemon" in a Terminal in Backend directory.
	
	5. After successfully running the Backend server the Mongo Database gets connected and the 
	   admin account gets Created.
	   
	6. Remove the `createadmin` invocation from connection.js and Restart the Backend Server.
	   
	7. To run the Frontend server, use "npm start" Command in a Terminal in Frontend directory.
	
	8. After The development server starts on "localhost:3000" in a Browser, Enter The Admin Details
	   To start using the Website ui.
	
	9. By Default Admin emailid: "admin@test.com", Password: "admin" .

## ScreenShots Of The Project

## Feedback

If you have any feedback, please reach out to Me at mailto:royp13247@gmail.com

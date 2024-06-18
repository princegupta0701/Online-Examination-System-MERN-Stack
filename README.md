# TOPIC:- Online Examination Application (Using MERN Stack)

**The Online Examination Application is a comprehensive web-based platform designed to facilitate the seamless administration, delivery, and management of online exams.**

**This application which has been made using MERN stack (MongoDB, Express.js, React and Node.js) aims at providing an educational institutions, corporate training programs and certification authorities with an efficient, scalable and user-friendly Experience.**

**The purpose is to offer a seamless experience to both the examiner and examinee by ensuring that exams are conducted effectively, securely with minimal administrative overheads.**

# Key Features:-

    1. User management
    2. Modular code
    3. Permission management
    4. Persistent answers on page refresh in the test portal
    5. Examination results using graphs
    6. Results can directly be downloaded as excel sheet
    7. Feedback system

# Tech Stack Used:-

-  Frontend: HTML, CSS, JavaScript, React.js

-  Backend: Node.js, Express.js

-  Database: MongoDB

-  Authentication: JWT (JSON Web Tokens)

-  Smtp.js

-  nodemailer

-  Redux js

-  Ant Design

# Steps to Run This Project Locally:-

## Install this project with npm For Backend

### Clone the Project

```bash
  git clone https://github.com/princegupta0701/Online-Examination-System-MERN-Stack.git
```
### Go to the project directory
 
```bash
  cd Online-Examination-System-MERN-Stack/Backend
```
### Install dependencies
  
```bash  
  npm install
```

## Install this project with npm For Frontend

### Go to the project directory

```bash
  cd Online-Examination-System-MERN-Stack/Frontend
```

### Install dependencies

```bash
  npm install
```

### Start the server

```bash
  npm start
```

# Steps to Do After Cloning The Repository:-
	
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

# ScreenShots Of The Project Modules:- 

## 1. Login Page For Admin And Examiner:

![login](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/f459e4ea-766f-4818-b2d7-8e715f19ce47)

- **Login:** In this module, The admin and the examiner is granted access to the system on providing a valid  credential.

## 2. Admin Adding New Examiner and Courses:

![Trainers](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/31182280-69c6-4a4c-8ed2-5ea349da0a9c)

- **All Examiner:** This Module Lets admin to Add new or view, update the list of Examiner.

- **All Courses:** This module helps the admin in managing the Courses. The admin can add new Courses or delete Courses that are not required for the Exams.

## 3. Examiner Panel for Question Management:

![newQuestion](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/b12b8aac-c337-4743-9b41-056eb3f67a3b)

- **Add Exam’s Questionnaire:** This module helps the examiner in creating questions for a given exam. The questions are based on Multiple Choice Questions. The examiner can also edit, update, and delete the questions. The Examiner can also add the weightage for every question and also upload any image of the question for Diagram Based Questions.

## 4. Examiner Creating A New Exam:

![newTest](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/b2f06c84-f86d-40b1-9251-4bf0ad454349)

- **New Exam:** This module helps the Examiner to Create a New exam. For example: The Type of the exam, The Title of the exam, The course on which the exam will be held, Exam Duration. Examiner can also choose the Questions on Random bases or he can manually choose the questions for a particular set of Exam.

- **All Exams:** This module helps the examinee to view the List of Exams and also delete the exam from the database.

- **Conduct Exam:** Examiner can conduct a already prepared set of Exam again and again using the ExamID.

## 5. Examinee Registration Form For The Exam:

![examRegister](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/74287929-1dfd-4191-86ad-eeddd10ebf57)

- **Registration:** All the Examinee can Register Themselves using there credentials for the Exam. After successfully Registering Themselves all the examinee will recieve there Exam Link On there Provided E-Mail Address. 

## 6. Exam Portal With MCQs and Exam Timer Support:

![testPortal](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/023f1060-54e6-419e-b57d-a02b08a3bf46)

- **Take Exam:** Examinee can appear for the exam and complete it within the given time sequence. Examinee can also mark or flag the questions so that he can go back and look it over again later. After Completing the exam the examinee has to click on the submit button to submit the exam.

## 7. Examinee Detailed Results and Analytics Panel:

![results](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/aed86c5f-0950-412c-9245-b373595a41ed)

- **View their Results:** This module helps the Examinee to view there result in which they have appeared as well as check the proper explanation for the answers and check the correct answers.

- **Send Feedback:** This module helps the examinee to send feedback to the examiner like how was the exam, or any suggestions to improve the system in future for better experience.

## 8. Exam Statistics Page With Proper Graphs:

![stats](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/3aa2da6b-d03d-4113-b028-80a81d39126c)

- **View Examinee Results:** This module helps the Examinee to check the results of the appeared Candidate with proper pass/fail ratio and also the achieved percentage of Candidates with proper Graphs.

- **Download Test Result:** Examinee can also Download The Exam Result Excel Sheet.

## 9. LocalHost MongoDb Image:

![db](https://github.com/princegupta0701/Online-Examination-System-MERN-Stack/assets/156581169/9a05df77-653e-4b77-b9b7-3f743d0c098a)

- **Database:** All The Important Credentials and Data of the users are stored in a secured database with proper Password Hashing Methods to help prevent UnAuthorised person from getting access to any passwords.

# Feedback Regarding This Project 😇

## If you have any feedback or Query Related To This Project, Please reach out to Me at mailto:royp13247@gmail.com
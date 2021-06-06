# CFGI

CFGI Mobile App. The purpose of this project is to help Community For Global Innovation (CFGI) to create a mobile application that helps international students stay in the United States through financial assistance and inexpensive legal consultation. This was prototyped, developed, and implemented from January 2021 - June 2021 for the Senior Design class at UCI. 
* https://cfgi.world/

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


### Installing


### Deployment


### Built With
* REACT Native [https://reactnative.dev/]
* React Expo CLI
* Django

### Versioning



### Authors
Zongyao Wang <br />
Ashley Zhou <br />
Victoria Rong <br />
Stephanie Kim <br />
Archita Bathole <br />
Will Gunadi <br />

#### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments
We would like to thank Professor Matthew Bietz, Saumya Gupta, and Andrew Jiang for their guidance during development of our app. We would also like to thank Sophie Alcorn and David Val Verde Vargas for believing in us and shaping our vision of the app. 


## Overview of the App
The following sections will describe the workflow of the app from both the front-end and back-end users perspective, what each of the components do, and future features that we would like implemented in the future. 

### Financial Aid
The Financial Aid is made of 4 main components/screens:
* financial.js - The landing page of the financial aid application, which briefly describes what financial aid is for and links the user to both the actual application and the terms and conditions.\ 
While this page will probably remain the same, one future feature idea that could be implemented is not allowing the user to apply for financial aid while their application is being reviewed to prevent spam and exploitation.  
* termsAndConditions.js - The terms and conditions that the user agrees to when they apply for financial aid. Nothing special about this one, it's just a long text document. Wording may change depending on legal stuff with CFGI, but the component itself will remain the same.  
* FinDocScreen.js - The actual application itself, this will have its own description down below. 
* FinAppConfirmationScreen.js - A confirmation page that will tell the user that their information has been submitted to CFGI. This will remain the same in future development.
#### FinDocScreen.js
This component is where the user will fill out their financial aid application. It's a very long document, but it essentially asks the user for personal information, such as their name, email, and their current visa status, and why they need the aid money. Each text box and dropdown menu checks if the user has selected or typed in anything, and each text box has a regex check so the user doesn't type in invalid answers (i.e., their email must have a "@" and a "." and their graduation year must be "20XX"). Even if the user manages to type in valid but bogus answers in the boxes, they're still incentivized to be honest and thorough, as the CFGI admins are manually checking the application forms. Once all of the questions are answered properly, the answers are pushed to the Django database in a user-friendly format so CFGI admins can view them, and the user is taken to a confirmation page that confirms that their information is saved. \
Future features the app should have, from most to least important:
* The ability to save the current app so the user can resume their progress
* The ability to upload an unlimited number of files to the database, specifically financial documents, and for CFGI admins to view the files so the approval process is automated as much as possible
* A measure to prevent users from spamming and abusing the financial aid application, maybe block them until their status is accepted or rejected?
* Have a calendar picker that picks today's date to track the application \

These are just a few ideas, feel free to add more as you further develop the app. 


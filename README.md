# CFGI

CFGI Mobile App. The purpose of this project is to help Community For Global Innovation (CFGI) create a mobile application that helps international students stay in the United States through financial assistance and inexpensive legal consultation. This was prototyped, developed, and implemented from January 2021 - June 2021 for the Senior Design class at UCI.

- https://cfgi.world/

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

### Installing

### Deployment

### Built With

- REACT Native [https://reactnative.dev/]
- React Expo CLI
- Django

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

The following sections will describe the flow of the app from both the front-end and back-end users perspective, what each of the components do, and future features that we would like implemented in the future.

### Navigation (App.js)

The navigation bar at the bottom of the screen is the main way the user accesses the major components, which are Home, Jobs, Legal, Financial, and Donate. Each major component, along with its sub-components, is placed under its respective stack navigator, which defines the order that the components can be navigated to. For example, the Home component and the Profile component are placed under HomeStack because when the user selects the "Home" tab in the bottom tab navigator, they are taken to the HomeStack, which sets HomeScreen as the main component, and because the user can only access their Profile via the HomeScreen. It's easier to see this hierarchial structure by reading through the code than reading this document. In every screen, there will always be a header that will display the logo, a back button, and a logout symbol. The back button will take the user to the previous component they were on. <br/>

Beyond including new components and subsequently adding new or changing each of the stack navigators, there isn't much more to add to the navigation.

##### Code Sources

- Bottom Tab Navigator: [https://reactnavigation.org/docs/bottom-tab-navigator/], [https://reactnavigation.org/docs/tab-based-navigation/]
- Stack Navigator (traversing through different components and screens): [https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nestd-navigator], [https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1], [https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/], [https://aboutreact.com/react-native-bottom-navigation/]
- Ionicons (icons used for the navigation): [https://ionic.io/ionicons]
- Hand Holding $ (had to use FontAwesome5 because this icon doesn't exist in Ionicons): [https://iconify.design/icon-sets/fa-solid/hand-holding-usd.html]

### Login, Signup, and Password Resetting (app/screens/signin.js)

Users of our application are required to have an account, which involves the general signup, login, and password resetting processes. First time users would navigate to the sign up page by clicking on the “sign up” link on the login screen, where they would create their account by inputting their first and last name, their email address, their desired username and password to sign up. Upon signing up, user’s signup information is sent to the database in a json format. After signing up successfully, users will be directed back to the login page where they can login using their username and password.

The password resetting process’ functionality has not been implemented due to time limitations, but the front-end components have already been created. Currently the button that directs the users to the password resetting sequence is commented out in the source code, to uncomment that portion, navigate to the SignIn component and uncomment the commented code fragment.

### Financial Aid

Users can apply for emergency financial aid for things such as emergency food, housing, travel expenses, etc. This aid can be anywhere from $200 to $1000. In the current iteration, assuming that they've read and agreed to the terms and conditions, users must fill out every field of the application and fully justify why they need the expenses. Once they submit their application, their information is saved to a database, where the CFGI admins can review their answers. If the CFGI admins accept their answers, they will reach out the users via email and ask the users for financial documents that support their justification. Assuming that the users have legitimate proof and the admins have accepted it, they will receive the aid. <br/>
The Financial Aid is made of 4 main components/screens:

- financial.js - The landing page of the financial aid application, which briefly describes what financial aid is for and links the user to both the actual application and the terms and conditions.
- termsAndConditions.js - The terms and conditions that the user agrees to when they apply for financial aid. Nothing special about this one, it's just a long text document. Wording may change depending on legal stuff, but the component itself will remain the same.
- FinDocScreen.js - The actual application itself, this will have its own description down below.
- FinAppConfirmationScreen.js - A confirmation page that will tell the user that their information has been submitted to CFGI.

#### FinDocScreen.js

This component is where the user will fill out their financial aid application. It's a very long document, but it essentially asks the user for personal information, such as their name, email, and their current visa status, and why they need the aid money. Each text box and dropdown menu checks if the user has selected or typed in anything, and each text box has a regex check so the user doesn't type in invalid answers (i.e., their email must have an "@" and a "." and their graduation year must be "20XX"). Even if the user manages to type in valid but bogus answers in the boxes, they're still incentivized to be honest and thorough, as the CFGI admins are manually checking the application forms. Once all of the questions are answered properly, the answers are pushed to the Django database in a user-friendly format so CFGI admins can view them, and the user is taken to a confirmation page that confirms that their information is saved. <br/>

Future features this feature could or should have, from most to least important:

- The ability to save the current application so the user can resume their progress
- The view of the application's current status
- The ability to upload an unlimited number of files to the database, specifically financial documents, and for CFGI admins to view the files so the approval process is automated as much as possible
- A measure to prevent users from spamming and abusing the financial aid application, maybe block them until their status is accepted or rejected?
- An email confirmation that is sent once the user submits their application
- Have a calendar picker that picks today's date to track the application <br/>

These are just a few ideas, feel free to add more as you further develop the app. <br/>

##### Code Sources

- Text: [https://reactnative.dev/docs/text]
- Flexbox (for layout): [https://reactnative.dev/docs/flexbox]
- React Native Responsive Screen (to keep pixel measurements consistent for both iOS and Android): [https://heartbeat.fritz.ai/handling-responsive-layouts-in-react-native-apps-1494b3f85984], [https://github.com/marudy/react-native-responsive-screen#example]
- ScrollView: [https://youtu.be/riWf6CtFkUA]
- TextInput: [https://stackoverflow.com/questions/41678570/what-is-an-alternative-of-textarea-in-react-native], [https://stackoverflow.com/questions/50985180/react-native-multi-line-textinput-text-is-centered] \* React Native Dropdown Picker: [https://reactnativeexample.com/a-picker-dropdown-component-for-react-native/], [https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage/], [https://stackoverflow.com/questions/60854888/cant-find-variable-usestate]
- Input checking: [https://youtu.be/kuzhS_Aepdc]
- Form validation: [https://youtu.be/uxawinQ2tTk]
- Regex (for input checking): [https://regex101.com/]

### Donation (app/screens/screens.js)

Users can donate to CFGI through PayPal, and our application acts as a connector between the user and PayPal. When the donate button is clicked, users will be directed to their default browser to the PayPal donation page, where users can directly donate to CFGI through PayPal, they may also choose to make payment monthly, or add the cost of processing to the donation to help the organization furthermore.

### Jobs (screens.js)

The original main purpose of the job page is to let users view a list of jobs from companies which offer sponsorship for international students. Due to the time limitation, we cannot fully deploy the functionality of this feature. The current function of this page is a signup form for potential company partners. The user will need to fill in their First Name, Last Name, Email Address, and Company Name to sign up for CFGI’s partner list. The phone number is optional. If one of the required fields such as First Name is empty, the form will not be submitted and an alert will pop up to inform the user that First Name is needed. It also does the validation check for email address and phone number to make sure the format of these two fields are correct. (i.e., their email must have an "@" and a "."). If users enter all information correctly, they can submit the form successfully. <br/>

Future features this feature could or should have, from most to least important:

- The ability to save the sign up form information to the database
- Let CFGI admin be able to view the saved information and reach out to companies through either email or phone number
- The original main functionality - let users view a list of jobs with sponsorship for international students

These are just a few ideas, feel free to add more as you further develop the app. <br/>

### Home Page (home.js)

The main purpose is to provide users quick access to general information about CFGI, its mission, and the founders of the organization.

The top right icon is the logout feature which takes users back to the sign in page. <br/>

Future features this feature could have:

- display more personalized information for users such as:
  - Saved Financial Assistance Applications so users can  
    progressively work on their applications and quickly access them
  - Upcoming appointments with attorneys to notify users about booked
    appointments <br/>

##### Code Sources

- Error Pop Up: [https://reactnative.dev/docs/alert]
- Job Card: [https://reactnativeelements.com/docs/card/]
- Input Checking: [https://www.geeksforgeeks.org/how-to-trim-white-spaces-from-input-in-reactjs/]
- ScrollView: [https://youtu.be/riWf6CtFkUA]
- Regex (for input checking): [https://regex101.com/]

### CFGI Header (cfgiheader.js, App.js)
A custom header that contains the CFGI logo shown at the top of almost every page in the app. This component is used and further stylized in App.js under the Stack Navigator component.

##### Code Sources
- Custom Header: [https://www.youtube.com/watch?v=C3oDJdlrEKE]
- Header Props: [https://reactnavigation.org/docs/stack-navigator#headerbacktitle]

### Legal Consultation with CFGI Attorney (appointment.js, legalCard.js)

The main purpose of this feature is to help international students get the legal help they need by scheduling a consultation with a CFGI networked attorney. Composed of three components/screens:

- appointment.js – The landing page; the first step in scheduling a legal consultation with a CFGI networked Attorney. When the user arrives on the page, a modal will open stating that by proceeding onwards the user acknowledges the given terms and condition. The page will show the user a list of ‘LegalCards’ of CFGI networked attorneys and the number of results. Users can fine tune their search by the two dropdowns, Expertise and/or Language. They also have the option to search directly by attorney name in the search bar. The search bar searches only within the shown list of attorneys, filtered or not. Search settings can be reset by clicking “Reset All” at the top of the dropdown. “Reset All” will clear both dropdowns and the search bar. This file is also where the attorney data is store, within an array called 'users'.
- legalCard.js – A component used in appointment.js for the attorney info. The card contains a profile picture, the attorney’s expertise areas and language fluencies. When clicked, it will open an attorney profile modal containing more detailed information about the attorney. The type of information includes: name, profile picture, expertise, language, about (short bio), location, hours available, phone number, and linkedIn/avvo.com links (if provided). The bottom of the modal profile contains the “Schedule” button which will open/navigate to the attorney’s Calendly page.
- CalendlyScreen – A component screen within legalCard.js that returns a WebView of the attorney’s Calendly link. To schedule an appointment, users must select a given meeting time length, available day, time and enter their name and email. They also have the option to provide additional notes for the attorney. Once scheduled, users will be sent a confirmation email.

Future features this feature could or should have, from most to least important:
- An automated conflict checking system before scheduling
- Restrict users to making one appointment at a time
- The ability to view current appointments and past appointments
- An FAQ for commonly asked questions
- A legal resource library e.g., guides or helpful links
- Include profile pictures of attorneys if provided, instead of the default picture currently
- Allow for multiple expertise dropdown selection search

##### How to get the specific link for CalendlyScreen:
1. Get the attorney’s embedded Calendly link code. The directions on how to get this link is provided within a short video located in the CFGI INF 191 Capstone Google Drive, in ‘Final Deliverable’ under “Other Resources”.
2. To use the WebView component, first create an external html file with the embedded Calendly link within the body tag of the html file.
3. Then, using the Amazon AWS web hosting service, create a bucket and upload the html file within. Make sure to make the bucket’s permissions and restriction to public so that the app can have access to the link. 
4. Then, AWS will provide an external link that points to the hosted html file.
5. Within the source code, under appointments.js, set the ‘calendly’ attribute of the respective attorney object with that AWS link.

##### Code Sources
- Modal: [https://reactnative.dev/docs/modal]
- Custom Card: [https://www.youtube.com/watch?v=5NewXsBnoKw]
- Custom Button: [https://www.youtube.com/watch?v=LEa48P-KtCw&t=184s]
- Dropdown: [https://hossein-zare.github.io/react-native-dropdown-picker-website/]
- SearchBar: [https://reactnativeelements.com/docs/searchbar/]
- URLs: https://reactnative.dev/docs/linking 

## Future of the App

As of writing this, the app and its database are deployed on Heroku, but has yet to be deployed on the Apple App Store and Google Play Store. CFGI is a verified Google Play Store Developer, so we can actually deploy the app right now on Android. However, the app needs be user-tested first before that happens. We also still need to be verified Apple Store Developers, which is unfortunately much more difficult due to the whopping $99 a year we have to pay. <br/>
To the future developers, these future changes described both here and earlier for each component seem like a lot (and there are). But we believe you can do it! None of us had any experience with React Native or Django when we first started, and while we're by no means experts, we're able to comfortably use it. We hope that you're able to learn React Native faster than we did through this README and existing code, and we hope that you can make the app a lot better than what we have right now.

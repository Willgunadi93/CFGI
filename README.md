# CFGI

CFGI Mobile App. The purpose of this project is to help Community For Global Innovation (CFGI) create a mobile application that helps international students stay in the United States through financial assistance and inexpensive legal consultation. This was prototyped, developed, and implemented from January 2021 - June 2021 for the Senior Design class at UCI. 
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
The following sections will describe the flow of the app from both the front-end and back-end users perspective, what each of the components do, and future features that we would like implemented in the future. 

### Navigation (App.js)
The navigation bar at the bottom of the screen is the main way the user accesses the major components, which are Home, Jobs, Legal, Financial, and Donate. Each major component, along with its sub-components, is placed under its respective stack navigator, which defines the order that the components can be navigated to. For example, the Home component and the Profile component are placed under HomeStack because when the user selects the "Home" tab in the bottom tab navigator, they are taken to the HomeStack, which sets HomeScreen as the main component, and because the user can only access their Profile via the HomeScreen. It's easier to see this hierarchial structure by reading through the code than reading this document. In every screen, there will always be a header that will display the logo, a back button, and a logout symbol. The back button will take the user to the previous component they were on. <br/>

Beyond including new components and subsequently adding new or changing each of the stack navigators, there isn't much more to add to the navigation. 

##### Code Sources
* Bottom Tab Navigator: [https://reactnavigation.org/docs/bottom-tab-navigator/], [https://reactnavigation.org/docs/tab-based-navigation/]
* Stack Navigator (traversing through different components and screens): [https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nestd-navigator], [https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1], [https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/], [https://aboutreact.com/react-native-bottom-navigation/]
* Ionicons (icons used for the navigation): [https://ionic.io/ionicons]
* Hand Holding $ (had to use FontAwesome5 because this icon doesn't exist in Ionicons): [https://iconify.design/icon-sets/fa-solid/hand-holding-usd.html]



### Financial Aid
Users can apply for emergency financial aid for things such as emergency food, housing, travel expenses, etc. This aid can be anywhere from $200 to $1000. In the current iteration, assuming that they've read and agreed to the terms and conditions, users must fill out every field of the application and fully justify why they need the expenses. Once they submit their application, their information is saved to a database, where the CFGI admins can review their answers. If the CFGI admins accept their answers, they will reach out the users via email and ask the users for financial documents that support their justification. Assuming that the users have legitimate proof and the admins have accepted it, they will receive the aid. <br/>
The Financial Aid is made of 4 main components/screens:
* financial.js - The landing page of the financial aid application, which briefly describes what financial aid is for and links the user to both the actual application and the terms and conditions.  
* termsAndConditions.js - The terms and conditions that the user agrees to when they apply for financial aid. Nothing special about this one, it's just a long text document. Wording may change depending on legal stuff, but the component itself will remain the same.  
* FinDocScreen.js - The actual application itself, this will have its own description down below. 
* FinAppConfirmationScreen.js - A confirmation page that will tell the user that their information has been submitted to CFGI. 

#### FinDocScreen.js
This component is where the user will fill out their financial aid application. It's a very long document, but it essentially asks the user for personal information, such as their name, email, and their current visa status, and why they need the aid money. Each text box and dropdown menu checks if the user has selected or typed in anything, and each text box has a regex check so the user doesn't type in invalid answers (i.e., their email must have an "@" and a "." and their graduation year must be "20XX"). Even if the user manages to type in valid but bogus answers in the boxes, they're still incentivized to be honest and thorough, as the CFGI admins are manually checking the application forms. Once all of the questions are answered properly, the answers are pushed to the Django database in a user-friendly format so CFGI admins can view them, and the user is taken to a confirmation page that confirms that their information is saved. <br/>

Future features this feature could or should have, from most to least important:
* The ability to save the current application so the user can resume their progress
* The view of the application's current status 
* The ability to upload an unlimited number of files to the database, specifically financial documents, and for CFGI admins to view the files so the approval process is automated as much as possible
* A measure to prevent users from spamming and abusing the financial aid application, maybe block them until their status is accepted or rejected?
* An email confirmation that is sent once the user submits their application
* Have a calendar picker that picks today's date to track the application <br/>

These are just a few ideas, feel free to add more as you further develop the app. <br/>

##### Code Sources
* Text: [https://reactnative.dev/docs/text]
* Flexbox (for layout): [https://reactnative.dev/docs/flexbox]
* React Native Responsive Screen (to keep pixel measurements consistent for both iOS and Android): [https://heartbeat.fritz.ai/handling-responsive-layouts-in-react-native-apps-1494b3f85984], [https://github.com/marudy/react-native-responsive-screen#example]
* ScrollView: [https://youtu.be/riWf6CtFkUA]
* TextInput: [https://stackoverflow.com/questions/41678570/what-is-an-alternative-of-textarea-in-react-native], [https://stackoverflow.com/questions/50985180/react-native-multi-line-textinput-text-is-centered] * React Native Dropdown Picker: [https://reactnativeexample.com/a-picker-dropdown-component-for-react-native/], [https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage/], [https://stackoverflow.com/questions/60854888/cant-find-variable-usestate]
* Input checking: [https://youtu.be/kuzhS_Aepdc]
* Form validation: [https://youtu.be/uxawinQ2tTk]
* Regex (for input checking): [https://regex101.com/]

(insert your component sections here)

## Future of the App
As of writing this, the app and its database are deployed on Heroku, but has yet to be deployed on the Apple App Store and Google Play Store. CFGI is a verified Google Play Store Developer, so we can actually deploy the app right now on Android. However, the app needs be user-tested first before that happens. We also still need to be verified Apple Store Developers, which is unfortunately much more difficult due to the whopping $99 a year we have to pay. <br/>
To the future developers, these future changes described both here and earlier for each component seem like a lot (and there are). But we believe you can do it! None of us had any experience with React Native or Django when we first started, and while we're by no means experts, we're able to comfortably use it. We hope that you're able to learn React Native faster than we did through this README and existing code, and we hope that you can make the app a lot better than what we have right now.  

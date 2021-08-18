# Readme

Welcome to our coding assessment! 

This code represents a basic starting to be used as a baseline for question 1. 
> Note that if you are only familiar with React (and not React Native) we hope the starter code will provide enough infrastructure for you to still be able to dive in quickly. If it's overwhelming, you can still use web elements (e.g. `div`s) instead of React Native elements, just as you would in a React web app, and still interact with the result in a web browser.

## Getting Started
You must have node installed in order to run this code. [Expo](https://expo.io) allows you to preview in browser but if you're familiar you can preview on real or simulated devices as well.

1. Install dependencies with `yarn install`
2. Start the react native server with `yarn start`
3. You should be able to access the preview in your browser
4. As updates are saved the development server should automatically recompile with your changes

## Code Overview
* `App.js` is the main entry point for the application and contains the top level screen navigation.
* `api` simulates what calls to external API would look like. For the purposes of this prototype, each of these functions just asynchronously returns hard-coded data.  Feel free to change or supplement this data as needed.
* `components/DashboardScreen` contains all the code for the dashboard screen. Most sections are just implemented as static code, except for the "buddies" section. Your task is to implement the "take meds" section.
* `store` contains all redux related code. This starter code, like our actual code base, makes use of [redux-saga](https://redux-saga.js.org/docs/introduction/GettingStarted).  Familiarity with this package isn't expected or required, but it would be a nice skill to demonstrate.

## Submission
1. Populate `discussion.md` with responses to any discussion questions
2. Create a zip file with your code (it is not necessary to include `node_modules`)
3. Submit your zip file and your personal details to the assignmend page [here](https://app.mightyacorn.io/patchrx/hiring-challenge#submit)


# Company CIN Search and save in database

A Full stack web app to search companies and their cin no.

## Tech Stack

### `Frontend - React with Hooks`

### `Backend - Node JS (Express)`

### `Database - MongoDB with Mongoose ORM`

## Pre-requisites

### `- Node 10.0 or later installed`

### `- MongoDB installed`

## Available Scripts

In the project directory, you can run:

### `npm run launch`

Installs all node modules and runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Functioning

> On the Home page you can find a search bar.

> Enter the search query and click on search icon. It'll return a list of companies having the search query in the name.

> For example- if you search for 'cargo' then it'll fetch all the companies containing cargo in their name.

> Each company has a 'Add company' button which will save that company's name and cin no. in the local mongodb database.

> On the My companies page a list of all the saved companies is displayed.

## Things to keep in mind

> As this app is not for production, I've included the client code in the same directory as the backend api.

> I am using concurrently to run the React app and Api Server at the same time. The –kill-others-on-fail flag will kill other processes if one exits with a non zero status code.

> Express server will run on port 5000

> I didn’t use a fully qualified URL http://localhost:5000/api/hello to call our API in the react app, even though our React app runs on a different port (3000). This is because of the proxy line I added to the client/package.json file.

> After running npm install in the root as well as the client directory, just run 'yarn dev' from the root directory.

## Keep Learning

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To learn React, check out the [React documentation](https://reactjs.org/).

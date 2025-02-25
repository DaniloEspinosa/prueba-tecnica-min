## ONLINE STORE

## Application structure

* Interface Folder: Here all the interfaces which represent the main models of the applications are defined.

* Components Folder: Here all the components which can be reused in the application are created.

* Pages Folder: Here a folder per page of the application will be created, it can include a custom hook to separate the logic a bit.

* Utilities Folder: This folder will be used to create validation functions, calculations functions, etc. They can be shared.

* Context Folder: Here are the different contexts with the data shared between multiple components

* hooks folder: In this folder go the different custom hooks


## Technical implementation

- I used the React library and typescript with Vite.
- I used npm for dependency package management.
- For the styles I used CSS as it is a relatively small project and currently allows me to nest to have a cleaner code.
- I used Grid and flex to get an adaptive and responsive design.
- I created some custom Hooks as controllers to separate them from the views.
- I used context to have the data accessible in the different components.
- The backend is simulated with json-server as the requirements of the task were.


## TODO

- Although the structure is organized, the next step would be to refactor the code to improve its understanding and facilitate future maintenance.
- Add the infinite scroll to load the content as the user navigates through the store.
- Make the components smaller and more reusable.
- Add the tests, since I have only generated one test to check the configuration.

## Before run the application

- You must have node.js installed on your computer


- Go to the API folder

- ### Install dependencies
```sh
yarn install
# or
npm install
# or
pnpm install
```

- ### Build
```sh
tsc

- ### Run the Rest API
```sh
yarn start
# or
npm run start
# or
pnpm run start
```

This will run the test API in `localhost:3000`

## Run the application

- Go to the client folder

- ### Install dependencies
```sh
yarn install
# or
npm install
# or
pnpm install
```

- ### Run App
```sh
yarn start
# or
npm start
# or
pnpm start
```

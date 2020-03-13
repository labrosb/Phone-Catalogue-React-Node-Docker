# Phone Catalogue
 
An Example of simple product catalogue app made with React, NodeJS wrapped with Docker!


# Usage

1. Install Docker in your machine https://docs.docker.com/install/

2. Clone or download the current repository

3. Open a Terminal, navigate to the root of the project and run: "docker compose-run"

4. Open your browser and navigate to http://localhost:3000 (or the localhost port indicated in the cmd window)


# Run Tests

We are using Jest along with puppeteer to perform realistic end-to-end test for our system.

1. Keep docker running (repeat the steps of the #usage section if its not)

2. Navigate to the ./Front-End folder and install the project packages locally executing: "npm install"

3. Install puppeteer: "npm i puppeteer"

4. Execute the command: "npm run TestVisual"

5. Wait for the browser to open see the automated actions that will performed

6. After the automated actions finish, the browser will close and you will see the summary with the passed/failed tests

* If you want to run faster tests without visual represantation run "npm test" instead

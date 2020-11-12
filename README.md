# InRhythm Coding Challenge
This coding challenge...
- focuses on React, Redux, and TypeScript
- is a basic stock app
- is open ended with no set amount that needs to be done

Feel free to use Google or Stack Overflow if you get stuck or forget syntax

Most of all we just want to see how you code

---
## Instructions

### Setup
1. We will grant you access to our [Github repo](https://github.com/mattbillard/interview-react-router-redux-typescript)
1. Clone the repo
    ```
    git clone https://github.com/mattbillard/interview-react-router-redux-typescript.git
    cd interview-react-router-redux-typescript
    ```
1. Create a branch with todays date and your name in this format:  
    `YYYY-MM-DD-your-name`
1. Run the following 
    ```
    npm install
    npm start
    ```
1. We have already built some code for you. Try it out in your browser.
1. We'll now walk you through the files...and give you a choice of working with React hooks or classes
1. You may now start. Good luck!

---

### Part A - Fetch data
Users should be able to type a stock ticker (from the list below) and see the company's data

1. Make a text input the user can type in
1. Clicking the button should fetch that company's data and append it to the Redux store

#### Valid Tickers
```
AAPL
ADBE
AMZN
FB
IBM
MSFT
NFLX
ORCL
INTC
VZ
```

---

### Part B - Display a Table

Now that you have the data, create a table to display it in the UI
1. Each company should have its own row (you can pick which columns)
1. Each row should have a button to delete it from the UI and Redux store

---

### Part C - Extras

At this point if there is enough time, you and your interviewer will pick additional functionality to add.  Choices include:
* CSS styling or adding a UI library
* Form validation & error notifications
* Create a basic typeahead for the stock ticker input
* UI/UX improvements of your choice
* Adding links to balance sheet, cashflow, and income statement information (can be displayed on a new page, modal, etc)
* Write tests
* Improve TypeScript of the application

---

## Troubleshooting - pnpm has trouble with create-react-app. You will need to start it with `FAST_REFRESH=false pnpm start`  
  Click [here for more info](https://github.com/pnpm/pnpm/issues/2957)
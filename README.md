# InRhythm Coding Challenge
The purpose of this challenge is to test your skills in technologies that are used heavily on the project that you are a candidate for.  It will focus on building out a simple application using React, Redux and TypeScript.

# Instructions

### Setup
1. Clone the [repository](https://github.com/mattbillard/interview-react-router-redux-typescript) (you will need to be granted permissioned first)
2. Create a branch called `your-name-MM/DD/YY` using your name and the current date.

---
### Part A
You are tasked with creating a simple financial data application.  Users should be able to type a ticker from the list of valid tickers (below) and see the associated data.  We have provided the necessary data in the `public` folder.

**Key features:**
* Make a text input and submit button (unstyled)
* Clicking submit should call the `/overview/` endpoint of data API according the ticker typed in the text input
* The data returned should be stored in Redux

---

### Part B
Now that you have the data, create a new component to display it on the UI.  This component should be on the same page as your input & submit, and should be updated with new data every time a ticker is entered and data is returned successfully.  Each ticker should have its data displayed as a row in a table.  Additionally, each row should have an additional `delete` button that removes the data from the UI (and from the redux store).

**Key features:**
* Create a new component that pulls ticker data from Redux
* Data should be displayed as a table row
* Each row should have a `delete` button to remove the data from the UI/Redux


### Valid Tickers
```
AAPL
ADBE
AMZN
AVGO
CMCSA
CRM
CSCO
FB
IBM
INTC
MA
MSFT
NFLX
NVDA
ORCL
PYPL
T
TXN
V
VZ
```
---
### Part C 
You may have noticed that the data API has additional endpoints `/balance-sheet`, `/cashflow`, and `/income-statement`.  Using these endpoints, add functionality so that clicking a ticker in your table will display a detailed breakdown using the data from these endpoints.  You may choose how to display these details—it could be on a new page, a popup, or something  different.

At this point we would also like you to demonstrate your CSS and styling abilities.  This does not need to be a polished application, but please add styling to make the layout clean and neat.  The text input and submit button should look sharp, and the data in the table should be spaced evenly (focus should be on spacing, margins, padding, and responsiveness).

Optional: strengthen your application by adding error handling and form validation

**Key features:**
* Click a ticker/row for additional details
* Fetch the detailed data from any of the above endpoints
* Display the data in a neat and legible manner
* Add CSS styling to improve the user experience
* Optional: Add error handling & form validation

## Assignment Walkthrough
1. Read the instructions
2. Forked and cloned the Budgeting App
3. Changed the App's file permission: `chmod -R 777 [DIR]`
4. Installed the App (using Node v10): `npm install`
5. Ran the App's tests: `npm test`
6. Started the App: `npm start`
7. Launched the App: `http://localhost:8000/`

## Test Plan
The test plan consist of a list of functional (e2e) tests from an User perspective.
1. Given that the User is on the Budget module of the App
    1. When User opens the Budget module
        1. the resource path of the URL should be `/budget`
        1. the menu items should be visible
        1. the Budget Grid table should be displayed
        1. the Budget Grid new entry container should be displayed (at the bottom of the table)
        1. the Budget Summary box should be visible
    1. When the Budget module is loaded
        1. the App logo should be visible
        1. the Menu Item "Budget" should be selected
        1. the Menu Item "Reports" should NOT be selected
        1. the Budget Grid item properties should be displayed correctly (category, description and amount)
        1. the Budget Grid new entry category default value (Misc) should be selected
        1. the Budget Grid new entry add button should be disabled
        1. the Budget Summary's amounts should be displayed correctly (total inflow - total outflow = working balance)
    1. When User enters a new Budget entry
        1. the categories should be required and selectable (pick one randomly)
        1. the description should be optional
        1. the amount should be required
        1. the amount should NOT be alphanumeric (only decimals are allowed)
        1. the add button should be enabled (when all required values are entered)
        1. the Budget Summary should be updated (after new entries)
        1. the amount for category income should be positive (inflow)
        1. the amount for all categories except income should be negative (outflow)
        1. the Budget Grid should be scrollable (when the number of items does not fit the table viewable area)
    1. When User opens the Reports module
        1. the resource path of the URL should be `/reports/inflow-outflow`
        1. the menu items should be visible
        1. the sub menu items (Inflow vs Outflow, Spending by Category) should be visible
    1. When the Reports module is loaded
        1. the App logo should be visible
        1. the Menu Item "Budget" should NOT be selected
        1. the Menu Item "Reports" should be selected
    1. When User selects the Inflow vs Outflow graph (auto-selected by default)
        1. the sub menu "Inflow vs Outflow" should be selected
        1. the sub menu "Spending by Category" should NOT be selected
        1. the Graph of type histogram should be displayed (inflow category and outflow categories by amounts)
        1. the Graph legends should be displayed (categories and amounts as legend)
        1. the Graph categories for outflow should be grouped together (only one bar but sub-divided)
        1. the Graph categories should be displayed in colors (must be so for readability)
        1. the Graph vertical axis should NOT be set
        1. the Graph horizontal axis should be displayed (category name and amount according to the budget summary)
        1. the Graph categories with zero or empty amount should NOT be displayed
    1. When User selects the Spending by Category graph
        1. the sub menu "Inflow vs Outflow" should NOT be selected
        1. the sub menu "Spending by Category" should be selected
        1. the Graph of type pie chart should be displayed (only outflow categories by amounts)
        1. the Graph legends should be displayed (categories and amounts as legends)
        1. the Graph categories should be displayed in colors (must be so for readability)
        1. the Graph categories with zero or empty amount should NOT be displayed

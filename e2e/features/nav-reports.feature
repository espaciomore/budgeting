Feature: Reports Navigation
	As a User of the Budget App
	I want to see the Reports module

	Background: test setup
		Given I go on the Reports website "http://localhost:8000/"

	Scenario: opening reports module
	  When I select Reports by clicking on link "a[href='/reports']"
		Then the page url should contain "/reports"
		Then the Budget link "a[href='/budget']" should not be selected
		Then the Reports link "a[href='/reports']" should be selected
	  When I select the Inflow vs Outflow graph by clicking on link "a[href='/reports/inflow-outflow']"
		Then the Inflow vs Outflow page url should contain "/reports/inflow-outflow"
		Then the Inflow vs Outflow link "a[href='/reports/inflow-outflow']" should be selected
		Then the Spending by Category link "a[href='/reports/spending']" should not be selected
		Then the Stacked Chart "div[class*='StackedChart']" should be displayed
	  When I select the Spending by Category graph by clicking on link "a[href='/reports/spending']"
		Then the Spending by Category page url should contain "/reports/spending"
		Then the Inflow vs Outflow link "a[href='/reports/inflow-outflow']" should not be selected
		Then the Spending by Category link "a[href='/reports/spending']" should be selected
		Then the Donut Chart "div[class*='DonutChart']" should be displayed
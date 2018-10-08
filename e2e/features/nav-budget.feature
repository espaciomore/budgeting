Feature: Budget Navigation
	As a User of the Budget App
	I want to see the Budget module

	Background: test setup
		Given I go on the Budget website "http://localhost:8000/"

	Scenario: opening budget module
		When I select Budget by clicking on link "a[href='/budget']"
		Then the page url should contain path "/budget"
		Then the Budget link "a[href='/budget']" should be selected
		Then the Reports link "a[href='/reports']" should not be selected
		Then the Budget Grid "table[class*='BudgetGrid']" should be displayed 
		Then the Budget Entry Form "tr[class*='EntryFormRow']" should be displayed
		Then the Budget Balance "div[class*='Balance']" should be displayed
		Then the App logo image "img[alt='Modus Create']" should be displayed

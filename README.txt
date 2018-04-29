This folder contains the html pages, "index.html," "history.html," "contact.html," and "familytree.html" which make up the site found at miminiou.github.io/lin-family
This website is a family website which contains information about my mom's family's history, and its members.

Bootstrap is used for the layout (container, row, column) and navbar of all pages.

Images can be found in the "images" folder.
Stylesheets can be found in the "css" folder.


***Mini Project 4 Additions***

PART C: Javascript Functionality
*All on page "familytree.html" and all use vue.js and pure css for styling
	1 - Filter table
		If you start typing into the search bar, the table of family members will be dynamically filtered, and show only the ones with names matching part or all of your searched term.
	2 - Table sorting by clicking on the table headers
		If you click on the headers of the table, it will sort the family members by either generation or name (alphabetical). 
	3 - Table sorting using buttons
		You can also sort by clicking on the radio buttons below the search bar.
	4 - Search with regular expressions
		You can search the table by using regexps in the search bar as well. If the regular expression throws an error, it will instead just search by the keyword matching.

PART D: Form
	On the page "contact.html" I implemented a message submission form which uses Javescript to validate whether or not entries are valid. If invalid, there are error messages that appear at the top of the form. For validation, I check if the name, subject, and message fields are nonempty, and I check if the email is a valid address using regex. I also used vue.js to implement these interactions.


References
 - All images are original
 - Icons:
 	- FB - https://thenounproject.com/search/?q=facebook&i=26636
 	- Phone - https://thenounproject.com/search/?q=phone&i=570330
 	- Mail - https://thenounproject.com/search/?q=mail&i=601758

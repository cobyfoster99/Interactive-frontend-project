# Interactive Frontend Project	

In this project I will be creating a travel advice and package deal website. Using my website, people will be able to find infomration on our latest delas using a modal popup, subscribe to my newsletter using MAILCHIMP API, use google maps to find hotels across the globe and they can also fill out our bespoke holiday contact form - protected by Google Captcha. 

The mothod of contact for this company is strictly contact form. Once they have read through the latest deals, they can fill out the form to find out more. 

Using Modal popups, google and form API's this website is sophisticated and easy to use. It's all on one page for ease-of-use and includes testimonials to gve the end viewer some trust in what they reading. I would have included a SSL certificate but this site is deployed to GitHubs pages, otherwise I would have added this. 

### UX

I focussed on creating a sleek design using Google Fonts and great colours that help create a visually pleasing website. The websites flows perfectly in that the first thing you see is the latest deals and pictures to seell them to you. 
Then we go onto a subscription form which allows you to sign up for a chance to win a free holiday. The subscription form has an image in the background.

As the website is for travel and holiday packages, I immediatly throw the top 3 deals into viewport. This is a method used by most product providers, this way you see that straight away and instatly look into building up excitement. 

I built the wireframes in Adobe XD. They can be found in this file path  /assets/media-library/Interactive Frontend Project - Wireframes XD.pdf
I decided to modify the design and layout slightly when coding the site. I found that my new design is more intuitive and easy on the eye. 
#### SEO
As this page is for the course, I decided not to include any on page or backend SEO. I have not minified any code or compressed (lossless method) any of my images, if this was intended for commercial use, I would do both of these things. 

### Features

##### Feature 1 - Modal Popup
The Modal Popup is an easy way to display information without it making the website look crowded. The information s displayed inside a JS popup that only appears when called. In this instance it is called by clicking on the deal they choose. When styled and built correctly, popups look and act great.

##### Feature 2 - Subcription Form
The Mailchip API allows you to maintain a database of customers who want to be contacted with future marketing information. You can also use this as I  have done, a way to giveaway free prizes to people who sign up. This API is fully GDPR complient. 

##### Feature 2 - Google Maps API
The Google Maps (GM) in this instance is used to locate hotels. This way the viewer can look into the destination and learn more about whats around. They can filter between the different options.

##### Feature 3 - Form API
The form API is an easy way of recieving the filled out contact forms to an email address. for e.g if you fill out the contact form, it will send me an email formatted to my liking with your form submission. 

##### Feature 4 - Captcha API
The Google Captcha is a great way to stop spambots from filling out the form and it stops your inbox from being stacked with spam. SRC: Google Inc - "A CAPTCHA is a type of challenge–response test used in computing to determine whether or not the user is human."

##### Possible future features -
Trustpilot reviews API - This API would be used to activly add reviews added to our trustpilot account. This would then be discplayed on a carasaul that displayes all the different reviews. 

### Technologies Used
HTML - was used to display the content.
CSS - was used to style the content displayed.
JS - was used for reaching external sources (API's), modal popups, maps and forms. 
JQuery - The project uses JQuery to simplify DOM manipulation.
Bootstrap - Minorly used for basic layout stup. 
Adobe XD - Used to create the wireframes and content. 
GitHub - Used to deploy the website to GitHub pages, also used to store backups and repositories.
AWS Cloud9 - The code was written in Cloud9, I used cloud9 as it is easy to use and has great built in functionality.


### Testing
All revisions and change notes have been shown in my repositories. To test the website, I spoke to my collegues and go them to test it, here are their comments.

Ruth (Marketing Director) - The website is easy to use and looks great. The use of popups when clicking on the boxes stop the page from being clustered with content. Instead it is stored in a popup window. The contact form is easy to use and a subscription form is great for keeping in touch with clients. I am in mrketing so I underatand the improtance of keeping active and maintaining contact with potential clients. Overall the website looks great and is easy to use."
Richard (Design Director) - I prefer simple to use websites and this is surely that. It includes all vital information and displays in a easy flowing way. I would reccomend having more reviews and maybe a "featured" section to show off more deals!"

Overall the website was well recieved by my colllegues with an example of how it could be improved. I decided to reach out to someone of an older age to see if the website was easy to use as it is for a 20-year-old. Review as follows;
"The page was great and easy to follow. No noncense and repetative popups or anything too intrusive. The page had a simple contact form and displayed information in a clear way. This was easy to use."

I tested the website using different age groups and genders as well as people in different job roles. It was well recieved by all. 

##### Feature testing - 
All feature testing was done by myself and collegues. We tested the form API, Map API, Captacha API, we then tested the site for responsivness using mobile devices and laptops. The page was displayed well on all devices and nothing was out of the ordinary.

I tested all code and removed any uneccercary code from my directory. for e.g I had unused media queries from old classes no longer being used. These were all removed in the later revisions stored in GutHub. 

I ran into a few problems when using API's and Github pages. I have explained this in the Deployment section of my README.

### Deployment
The website has been deployed to GitHub Pages LINK HERE! Using this link you can access the website. Using THIS LINK you can access the repositories to view my code and any external sources + API's. 

I have chosen GitHub pages because it is a free, quick and easy way of hosting the webpage. It also includes security features suchas an SSL certificate (content encryption). 

Although I chose to use GitHub pages... I have still ran into a few problems. Using GH Pages I am not able to use Google ReCaptcha and Mailchimp Form Api. Instead I have had to use Mailchimp embeddded form and Formspree. Formspree sends you to an external website to validate using Google ReCaptcha and then sends me an email with the form contents. 


### Credits

#### Code
Google Dev - I used tutorials and JS from the google dev website. They have a library of JS in which you can take and modify to your liking. As I am using Google Maps, I decided to take the places JS I needed and modify it to suit hotels. Reference - https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/places-autocomplete#places_searchbox
##### Media - 
For images I used a free stock images website called Pexels https://www.pexels.com/. Authors/photographers as follows - Alex Witchkin and Javid Ratch.

##### Text - 
Any text not from the sources listed below is written by me.  

External sources -
https://www.haystravel.co.uk/about
https://weheart.moscow/toptenreasons/
https://theculturetrip.com/north-america/mexico/articles/10-reasons-why-you-should-visit-mexico/
https://theculturetrip.com/asia/sri-lanka/articles/11-reasons-why-you-should-visit-sri-lanka/

##### Acknowledgements - 
I Looked at various websites including; Tui, Travel Republic, First Choice and Hays Travel. I used these as inspiration but no details were copied/mirrored.
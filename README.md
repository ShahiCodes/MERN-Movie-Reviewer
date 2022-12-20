# MERN-Movie-Recommender
Full stack web app using the MERN stack (MongoDB, Express, React, and Node.js) and Django REST Web API (Pandas, NumPy and Tensorflow Keras) for making movie recommendations. CRUD (Create, Read, Update and Delete) movie reviews and ratings to be recommended movies.

MERN:
<ul>
	<li>MongoDB: Document based open source database</li>
	<li>Express: Web application framework that makes it simpler to code a web server in JavaScript.</li>
	<li>React: Front-end library for building user interfaces.</li>
	<li>Nodes.js: Allows Javascript to run outside a browser in places like a web server.</li>
</ul>

Backend Dependencies:
<ul>
	<li><code>express</code></li>
	<li><code>cors</code>: Cross-origin resource sharing, allows ajax request to skip the same origin policy and access resources from remote hosts. The cors package provides an express middleware than can enable cors with different options. Basically going it make it so we can make the right connections on our network that we need to make.</li>
	<li><code>mongodb</code>: </li>
	<li><code>dotenv</code>: Loads environmental variables from a dot emv file in the process. Environmental variables can be stored in a file.</li>
	<li><code>nodemon</code>: Nodemon helps develop node.js based applications by automatically restarting the node application.</li>
</ul>

Frontend Dependencies:
<ul>
	<li><code>bootstrap</code></li>
	<li><code>react-router-dom@5</code>: To route different urls to different pages on our site.</li>
	<li><code>axios</code>: Axios for the get/post/put/delete requests.</li>
</ul>

Django Dependencies
<ul>
	<li><code>django</code>: high-level Python web framework.</li>
	<li><code>djangorestframework</code>:  powerful and flexible toolkit for building Web APIs.</li>
</ul>

<h3>Search for movies using the Search by Name, Search by Release Year or Genre queries. </h3>
<img src="screenshots/1-HomePage.png" alt="Home Page" width="200%" height="200%">

<h3>After logging in, the Home page is updated with more tab option.</h3>
<img src="screenshots/2-HomePage_LoggedIn.png" alt="Home Page Logged in" width="200%" height="200%">

<h3>Clicking "View Reviews" on a movie gives you the option to add a review/rating for the movie.</h3>
<img src="screenshots/3-MovieNoReviews.png" alt="Movie Page" width="200%" height="200%">

<h3>Add your review.</h3>
<img src="screenshots/4-AddReview.png" alt="Add Review Page" width="200%" height="200%">

<h3>Movie now displays your review.</h3>
<img src="screenshots/5-MovieWithReview.png" alt="Movie Page with Review" width="200%" height="200%">

<h3>Review tab displays all your reviews which you can edit.</h3>
<img src="screenshots/6-Reviews.png" alt="Reviews Page" width="200%" height="200%">

<h3>Movie Recs tab receives the recommended movies from the Django REST Web API and displays them here.</h3>
<img src="screenshots/7-MovieRecs.png" alt="Movie Recs Page" width="200%" height="200%">

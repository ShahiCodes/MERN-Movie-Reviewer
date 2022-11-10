# MERN-Movie-Recommender
Full stack web app using the MERN(MongoDB, Express, React, and Node.js) stack and autoencoders with Pandas, NumPy and Tensorflow(Keras) for the task of making movie recommendations. CRUD(Create, Read, Update and Delete) movie reviews/ratings to be recommended movies. 

MERN:
<ul>
	<li>MongoDB: Document based open source database</li>
	<li>Express: Web application framework that makes it simpler to code a web server in JavaScript.</li>
	<li>React: Front-end library for building user interfaces.</li>
	<li>Nodes.js: Allows Javascript to run outside a browser in places like a web server.</li>
</ul>

Backend Dependencies:
<ul>
	<li><code>express</code>: </li>
	<li><code>cors</code>: Cross-origin resource sharing, allows ajax request to skip the same origin policy and access resources from remote hosts. The cors package provides an express middleware than can enable cors with different options. Basically going it make it so we can make the right connections on our network that we need to make.</li>
	<li><code>mongodb</code>: </li>
	<li><code>dotenv</code>: Loads environmental variables from a dot emv file in the process. Environmental variables can be stored in a file.</li>
	<li><code>nodemon</code>: Nodemon helps develop node.js based applications by automatically restarting the node application.</li>
</ul>

Frontend Dependencies: <code></code>
<ul>
	<li><code>bootstrap</code></li>
	<li><code>react-router-dom@5</code>: To route different urls to different pages on our site.</li>
	<li><code>axios</code>: Axios for the get/post/put/delete requests.</li>
</ul>

Integrating Python with Mern Stack <a href="https://dilmikottachchi.medium.com/integrating-python-with-the-mern-stack-59c060957710">Link</a>
<ul>
	<li>npm i child_process</li>
</ul>

HTPP REQUESTS for backend
GET
http://localhost:5000/api/v1/movies
http://localhost:5000/api/v1/movies/id/635ca8fe5fb40f69256b32ed
http://localhost:5000/api/v1/movies?genre=action

GET
http://localhost:5000/api/v1/movies/review

POST
http://localhost:5000/api/v1/movies/review
{
	"movie_id": "635ca8fe5fb40f69256b32ed",
	"rating": "4",
	"text": "Test",
	"user_id": "admin-tim",
	"name": "admin-tim"
}

PUT
http://localhost:5000/api/v1/movies/review
{
	"review_id": "635d9f34b201f608e415c339",
	"rating": "3",
	"text": "PUT Test",
	"user_id": "admin-tim",
	"name": "admin-tim"
}

DELETE
http://localhost:5000/api/v1/movies/review?id=635d9f34b201f608e415c339
{
	"user_id": "admin-tim",
	"name": "admin-tim"
}


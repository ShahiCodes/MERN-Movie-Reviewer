import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movie";
import { Link } from "react-router-dom";

// const Reviews = props => {
  
//   const [reviews, setReviews] = useState([]);

//   	/**Tells React what to do after rendering */
// 	useEffect(() => {
// 		retrieveReviews();
// 	}, []);

//   const retrieveReviews = () => {
//     MovieDataService.getReviews()
// 			.then(response => {
// 				console.log(response.data);
// 				setReviews(response.data.reviews);
// 			})
// 			.catch(e => {
// 				console.log("ERROR FROM REVIEW");
// 				console.log(e);
// 			});
//   };

//   const refreshList = () => {
// 		retrieveReviews();
//   };

//   return (
//     <div>
// 		Hello
// 	</div>
//   );
// };

function Reviews() {
	return (
	<div>
		<h1>"Hello World</h1>
	</div>
	)
}
  
export default Reviews;
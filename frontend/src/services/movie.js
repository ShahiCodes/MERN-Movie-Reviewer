import http from "../http-common";

class MovieDataService {
  getAll(page = 0) {
    // console.log("getAll")
    return http.get(`movies?page=${page}`);
  }

  get(id) {
    return http.get(`/movies/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    // console.log("find");
    return http.get(`movies?${by}=${query}&page=${page}`);
  }

  getReviews() {
    // console.log("getReviews")
    return http.get(`/movies/review`);
  }

  createReview(data) {
    // console.log("createReview");
    return http.post("/movies/review", data);
  }

  updateReview(data) {
    // console.log("updateReview");
    return http.put("/movies/review", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/movies/review?id=${id}`, {data:{user_id: userId}});
  }

  getGenres(id) {
    return http.get(`movies/genres`);
  }

}

export default new MovieDataService();
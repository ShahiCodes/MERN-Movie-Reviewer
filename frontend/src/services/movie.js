import http from "../http-common";

class MovieDataService {
  getAll(page = 0) {
    return http.get(`movies?page=${page}`);
  }

  get(id) {
    return http.get(`/movies/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`movies?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    return http.post("/movies/review", data);
  }

  updateReview(data) {
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
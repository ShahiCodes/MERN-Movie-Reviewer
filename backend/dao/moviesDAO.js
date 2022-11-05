
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
/**Stores reference to our database */
let movies

export default class MoviesDAO {
	/** Call this method as soon as server starts to get reference to our DB */
	static async injectDB(conn) {
		/**If Movies is filled */
		if (movies) {
			return
		}
		try {
			/**Connecting to our MOVIEREVIEWS_NS, environmental variable in .env, to get our movies  */
			movies = await conn.db(process.env.MOVIEREVIEWS_NS).collection("metadata")
		} catch (e) {
			console.error(
			`Unable to establish a collection handle in moviesDAO: ${e}`,
			)
		}
	}
  
static async getMovies({
	/**Get list of all the movies in the DB */
	filters = null,
	page = 0,
	moviesPerPage = 20,
} = {}) {
			let query
			if (filters) {
				if ("name" in filters) {
					/**$text set up in MongoDB Atlas for 'name' and 'genre'*/
					query = { $text: { $search: filters["name"] } }
				} else if ("release_year" in filters) {
					query = { "release_year": { $eq: filters["release_year"] } }
				} else if ("genre" in filters) {
					query = { $text: { $search: filters["genre"] } }
				}
			}

			/**Find all the movies with the queries passed in, else return all movies */
			let cursor
			try {
				cursor = await movies
					.find(query)
			} catch (e) {
				console.error(`Unable to issue find command, ${e}`)
				return { moviesList: [], totalNumMovies: 0 }
			}
	
			/**Limit movies per page, skip to get to actual page number */
			const displayCursor = cursor.limit(moviesPerPage).skip(moviesPerPage * page)
	
			try {
				/**Set movie list to an array and then return the array */
				const moviesList = await displayCursor.toArray()
				const totalNumMovies = await movies.countDocuments(query)

				return { moviesList, totalNumMovies }
			} catch (e) {
					console.error(
						`Unable to convert cursor to array or problem counting documents, ${e}`,
					)
					return { moviesList: [], totalNumMovies: 0 }
			}
    }

    static async getMovieByID(id) {
			/**From Reviews Collection, creates pipeline to find all reviews that match movie_id and set that to "reviews" */
			try {
				const pipeline = [
					{
						$match: {
							_id: new ObjectId(id),
						},
					},
						{
							$lookup: {
								from: "reviews",
								let: {
									id: "$_id",
								},
								pipeline: [
									{
										$match: {
											$expr: {
												$eq: ["$movie_id", "$$id"],
											},
										},
									},
									{
										$sort: {
											date: -1,
										},
									},
								],
								as: "reviews",
							},
						},
							{
								$addFields: {
									reviews: "$reviews",
								},
							},
					]
					return await movies.aggregate(pipeline).next()
			} catch (e) {
				console.error(`Something went wrong in getMovieByID: ${e}`)
				throw e
			}
    }
    
    static async getGenres() {
			let genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Foreign', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
			try {
				// genres = await movies.distinct("genres")
				return genres
			} catch (e) {
				console.error(`Unable to get genres, ${e}`)
				return genres
			}
    }
}





import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let ratings

export default class RatingsDAO {
	static async injectDB(conn) {
		if (ratings) {
			return
		}
		try {
			ratings = await conn.db(process.env.MOVIEREVIEWS_NS).collection("ratings")
		} catch (e) {
			console.error(`Unable to establish collection handles in userDAO: ${e}`)
		}
	}

	static async getAllRatings() {
    /**Find all ratings */
    let cursor
    try {
      cursor = await ratings
        .find()
    } catch (e) {
      console.error(`Unable to get ratings: ${e}`)
      return {ratingsList: [], totalNumRatings: 0}
    }

    try {
      /**Set rating list to an array and then return the array */
      const ratingsList = await cursor.toArray()
      const totalNumRatings = await ratings.countDocuments()

      return { ratingsList, totalNumRatings }
    } catch (e) {
        console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`,
        )
        return { ratingsList: [], totalNumRatings: 0 }
    }
  }
}
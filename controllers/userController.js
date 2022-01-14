const axios = require("axios");

async function userController(req, res, next) {

    try {
        let {query, params} = req

        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)

        let result = await response.data.filter(post => post.userId === +params.id)

        if (!result.length) {
            res.status(404).json({
                error: "Posts is not found"
            })
        }

        res.status(200).json({
            message: 'It is a users API route',
            query,
            id: +params.id,
            data: result
        })

    } catch (err) {
        res.status(404).json({
            error: err.message
        })
    }
}

module.exports = userController

const express = require("express")
const createError = require('http-errors')
require("dotenv").config()
const morgan = require("morgan")
const RestaurantRoute = require("./Routes/Restauarants")
// const Course = require("./Route/Course")
// const Session = require("./Route/Session")
require("./helpers/init_mongodb")
const cors = require('cors');
const FoodTabRoute = require("./Routes/FoodTab")

const app = express()
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/restaurant", RestaurantRoute)
app.use("/api/foodTab", FoodTabRoute)


app.use(async (req, res, next) => {
    next(createError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(3001, () => {
    console.log("listening on port 3001")
})
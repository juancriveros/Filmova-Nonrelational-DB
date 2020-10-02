const express = require('express')
const { restart } = require('nodemon')
const moongose = require('mongoose');
const Router = express.Router()

const Movie = require('../../models/movie');
const Rating = require('../../models/rating');
const testMiddelware = require('../../middlewares/db');
const { Mongoose } = require('mongoose');

Router.get('/:id', (req, res) => {

    if (req.params.id && req.params.id != "") {
        id = req.params.id;

        const movie = [];
        const error = null;
        Movie.find({ "externalId": id })
            .populate("ratings")
            .lean() 
            .exec()
            .then(movie => {
                console.log(movie)
                movie = movie
                res.status(200).json(movie);
            })
            .catch(err => {
                res.status(500).json(movie);
            })
    }
    else {
        res.status(500).json({ error: "Id cannot be null" });
    }

})

Router.get('/best/seen', (req, res) => {
    const movie = [];
    const error = null;
    Movie.find()
        .sort({ generalRating: -1 })
        .limit(10)
        .lean()
        .exec()
        .then(movie => {
            console.log(movie)
            movie = movie
            res.status(200).json(movie);
        })
        .catch(err => {
            res.status(500).json(movie);
        })

})

Router.post('/', (req, res) => {
    console.log(req.body.newTw)

    if (true) {

        var movies = [
            {
                _id: new moongose.Types.ObjectId(),
                title: "Harry Potter and the Philosophers Stone",
                releaseDate: new Date(),
                category: "Magic",
                movieDirector: "Daivd Yates",
                externalId: 1,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "The Avengers",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 2,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Captain America: The First Avenger",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 3,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Sherlock Holmes",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 4,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Love & Other Drugs",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 5,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Avenger: Ultrons Era",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 10,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "The Little Mermaid",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 11,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Mulan",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 12,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Eternal Sunshine of the Spotless Mind",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 13,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Inception",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 14,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Black Panther",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 16,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Inglourious Basterds",
                releaseDate: new Date(),
                category: "War",
                movieDirector: "Daivd Yates",
                externalId: 17,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Now You See Me",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 18,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "The Devil Wears Prada",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 19,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Monsters Inc",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 20,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Coco",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 21,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new moongose.Types.ObjectId(),
                title: "Harry Potter and the Philosophers Stone",
                releaseDate: new Date(),
                category: "Magic",
                movieDirector: "Daivd Yates",
                externalId: 1,
                generalRating: 0,
                ratings: []
            }
        ]
        /*const movie = new Movie({
            _id: new moongose.Types.ObjectId(),
            title: "Harry Potter and the Philosophers Stone",
            releaseDate: new Date(),
            category: "Magic",
            movieDirector: "Daivd Yates",
            externalId: 1,
            generalRating: 0,
            ratings: []
        })*/

        Movie.insertMany(movies)
            .then(movie => {
                res.status(200).json(movie);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })

    } else {
        res.status(500).json({ error: "Message cannot be null" });
    }


})

Router.post('/rating', (req, res) => {

    if (true) {
        const rating = new Rating({
            _id: new moongose.Types.ObjectId(),
            movieId: req.body.movieId,
            commentDate: new Date(),
            title: req.body.title,
            comment: req.body.comment,
            rating: req.body.rating,
            userId: req.body.userId
        })

        rating.save()
            .then(rating => {
                Movie.findByIdAndUpdate(req.body.movieId,
                    {
                        $push: { ratings: rating._id }

                    },
                    { new: true, useFindAndModify: false })
                    .then(movie => {
                        let rat = ((movie.generalRating * (movie.ratings.length - 1)) + rating.rating) / movie.ratings.length
                        Movie.findByIdAndUpdate(req.body.movieId, {
                            $set: { generalRating: rat }
                        },
                            { new: true, useFindAndModify: false })
                            .then(movie => {
                                res.status(200).json(rating);
                            });
                    });

            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ error: err })
            })

    } else {
        res.status(500).json({ error: "Message cannot be null" });
    }


})

module.exports = Router;
const mongoose = require('mongoose')
const Movie = require('../models/movie');
const Rating = require('../models/rating');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`Mongo DB Connected ${conn.connection.host}`)
        Movie.deleteMany({ }).then(function(){ 
            console.log("Data deleted"); // Success 
        }).catch(function(error){ 
            console.log(error); // Failure 
        });
        
        Rating.deleteMany({ }).then(function(){ 
            console.log("Data deleted"); // Success 
        }).catch(function(error){ 
            console.log(error); // Failure 
        });

        var movies = [
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Harry Potter and the Philosophers Stone",
                releaseDate: new Date(),
                category: "Magic",
                movieDirector: "Daivd Yates",
                externalId: 1,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "The Avengers",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 2,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Captain America: The First Avenger",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 3,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Sherlock Holmes",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 4,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Love & Other Drugs",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 5,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Avenger: Ultrons Era",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 6,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "The Little Mermaid",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 7,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Mulan",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 8,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Eternal Sunshine of the Spotless Mind",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 9,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Inception",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 10,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Black Panther",
                releaseDate: new Date(),
                category: "Superheros",
                movieDirector: "Daivd Yates",
                externalId: 11,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Inglourious Basterds",
                releaseDate: new Date(),
                category: "War",
                movieDirector: "Daivd Yates",
                externalId: 12,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Now You See Me",
                releaseDate: new Date(),
                category: "Adventure",
                movieDirector: "Daivd Yates",
                externalId: 13,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "The Devil Wears Prada",
                releaseDate: new Date(),
                category: "Love",
                movieDirector: "Daivd Yates",
                externalId: 14,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Monsters Inc",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 15,
                generalRating: 0,
                ratings: []
            },
            {
                _id: new mongoose.Types.ObjectId(),
                title: "Coco",
                releaseDate: new Date(),
                category: "Animated",
                movieDirector: "Daivd Yates",
                externalId: 16,
                generalRating: 0,
                ratings: []
            }
        ]
        Movie.insertMany(movies)
            .then(movie => {
                console.log("Created succesfully")
            })
            .catch(err => {
                console.log(err)
            })
    } catch (error) {
        console.group(error);
        process.exit(1);
    }
}



module.exports = connectDB;
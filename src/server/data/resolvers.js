/**
 * Тестовые данные для graphQL
 */
const moviesData = [
    {
        id: 1,
        title: "The House That Jack Built",
        director: "Lars von Trier",
        genres: ["Drama", "Horror", "Thriller"],
        poster: "http://bloody-disgusting.com/wp-content/uploads/2018/05/The-House-That-Jack-Built.jpg",
        description:
            "The story follows Jack, a highly intelligent serial killer over the course of 12 years and depicts the murders that truly develop Jack as a serial killer.",
        stars: ["Matt Dillon", "Bruno Ganz", "Uma Thurman"],
        year: 2018,
    },
    {
        id: 2,
        title: "Incredibles 2",
        director: "Brad Bird",
        genres: ["Animation", "Action", "Adventure"],
        poster:
            "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/07/incredibles_ti-188_-_h_2017.jpg",
        description:
            "Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.",
        stars: ["Craig T. Nelson", "Holly Hunter", "Sarah Vowell"],
        year: 2018,
    },
    {
        id: 3,
        title: "Deadpool 2",
        director: "David Leitch",
        genres: ["Action", "Adventure", "Comedy"],
        poster: "https://amp.businessinsider.com/images/5a329213b0bcd51d008b4e0b-750-422.jpg",
        description:
            "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
        stars: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin"],
        year: 2018,
    },
    {
        id: 4,
        title: "The Little Stranger",
        director: "Lenny Abrahamson",
        genres: ["Drama", "Horror", "Mystery"],
        poster: "https://nerdist.com/wp-content/uploads/2018/06/The-Little-Stranger-trailer.jpg",
        description:
            "THE LITTLE STRANGER tells the story of Dr Faraday, the son of a housemaid, who has built a life of quiet respectability as a country doctor. During the long hot summer of 1947, he is called...",
        stars: ["Domhnall Gleeson", "Ruth Wilson", "Charlotte Rampling"],
        year: 2018,
    },
];

export const resolvers = {
    Query: {
        allMovies: () => {
            return moviesData;
        },
        movie: (root, { id }) => {
            return moviesData.filter(movie => {
                return movie.id === id;
            })[0];
        },
    },
};

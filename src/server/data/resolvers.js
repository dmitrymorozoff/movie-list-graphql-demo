/**
 * Тестовые данные для graphQL
 */
const moviesData = [
    {
        id: 1,
        title: "The House That Jack Built",
        director: "Lars von Trier",
        description:
            "The story follows Jack, a highly intelligent serial killer over the course of 12 years and depicts the murders that truly develop Jack as a serial killer.",
        stars: ["Matt Dillon", "Bruno Ganz", "Uma Thurman"],
        year: 2018,
    },
    {
        id: 2,
        title: "Incredibles 2",
        director: "Brad Bird",
        description:
            "Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world.",
        stars: ["Craig T. Nelson", "Holly Hunter", "Sarah Vowell"],
        year: 2018,
    },
    {
        id: 3,
        title: "Deadpool 2",
        director: "David Leitch",
        description:
            "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
        stars: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin"],
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

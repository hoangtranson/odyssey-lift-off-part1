const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: async (_, {id}, {dataSources}) => {
            // get track details
            console.log('track resolver id:', id);
            return await dataSources.trackAPI.getTrack(id);

            // get module details for the track
            // const modules = await dataSources.trackAPI.getTrackModules(id);

            // shape the data in the way that the schema expects it
            // return { ...track, modules };
        },
    },
    Track: {
        author: async ({authorId}, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: async ({id}, _, {dataSources}) => {
            console.log('track modules resolver id:', id);
            return dataSources.trackAPI.getTrackModules(id);
        },
    },
};

module.exports = resolvers;
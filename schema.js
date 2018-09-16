const fetch = require('node-fetch');
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

fetch(
    'https://inciweb.nwcg.gov/feeds/rss/incidents/'
    )
    .then(response => response.text());
    .then(parseXML);


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        // fields() => ({
        //     author: {
        //         type: AuthorType
        //     }
        })
    })
})

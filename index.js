import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb://localhost/test');

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const Cat = mongoose.model('Cat', { name: String });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema, context: { Cat } })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}`);
});

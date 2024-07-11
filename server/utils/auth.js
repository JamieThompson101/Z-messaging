const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extentions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req query, and headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        //  ["Bearer", "<tokenvalue>"]
        if (req.header.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { magAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { first, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
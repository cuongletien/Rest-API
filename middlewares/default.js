const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const basicAuth = require('express-basic-auth');

module.exports = server => {
    // apply CORS
    server.use(cors());
    // apply HTTP security headers
    server.use(helmet());
    // apply basic auth - check req Auth header
    server.use(
        basicAuth({
            users: {
                admin: "admin"
            },
            challenge: true
            // realm: 'Imb4T3st4pp',
        })
    );
    // handle request json body
    server.use(express.json());
    server.use(express.urlencoded({ extended: true })) 
}

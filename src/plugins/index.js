"use strict";

const Inert = require( "@hapi/inert" );
const Vision = require( "@hapi/vision" );
const ejs = require( "ejs" );

const auth = require( "./auth" );
const sql = require( "./sql" );

const register = async ( server, config ) => {
	await server.register( [ Inert, Vision, auth, sql ] );

	// configure view templates
	server.views( {
		engines: { ejs },
		relativeTo: __dirname,
		path: "../templates",
		layout: true
	} );
};

module.exports = {
	register
};

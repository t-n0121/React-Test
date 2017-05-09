
// import React from 'react';
// import CreateReactClass from 'create-react-class';
const React = require('react');
const CreateReactClass = require('create-react-class');

let DefaultLayout = CreateReactClass({
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link type="text/css" rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
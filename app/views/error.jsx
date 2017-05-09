
// import React from 'react';
// import CreateReactClass from 'create-react-class';
const React = require('react');
const CreateReactClass = require('create-react-class');

import DefaultLayout from './layout';

let errorPage = CreateReactClass({
  render() {
    return (
      <div className="contents">
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </div>
    );
  }
});
module.exports = errorPage;
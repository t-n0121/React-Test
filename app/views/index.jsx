
// import React from 'react';
// import CreateReactClass from 'create-react-class';
const React = require('react');
const CreateReactClass = require('create-react-class');

// import DefaultLayout from './layout';
const DefaultLayout = require('./layout');

let indexPage = CreateReactClass({
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
      </DefaultLayout>
    );
  }
});

module.exports = indexPage;
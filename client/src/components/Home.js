import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Home = () => {
    return (
        <h1>Hello World..!!</h1>
    );
};

Home.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps)(Home);
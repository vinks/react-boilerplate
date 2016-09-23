import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchPostsIfNeeded } from 'actions/posts/posts';
import styles from 'components/app/App.css';

const DEFAULT_TITLE = 'React Boilerplate';

export class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        App.fetchData({ dispatch });
    }

    render() {
        return (
            <div className={styles.root}>
                <Helmet titleTemplate={`%s | ${DEFAULT_TITLE}`} defaultTitle={DEFAULT_TITLE} />
                {this.props.children}
                {JSON.stringify(this.props.data)}
            </div>
        );
    }
}

App.fetchData = function({ dispatch }) {
    return dispatch(fetchPostsIfNeeded());
};

function mapStateToProps(state) {
    return {
        ...state.posts
    };
}

export default connect(mapStateToProps)(App);
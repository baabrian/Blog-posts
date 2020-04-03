import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

const App = ({posts}) => {
    console.log(posts);
    return (
        <div className="ui container">
            <PostList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);

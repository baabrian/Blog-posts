import jsonPlaceholder from '../apis/jsonPlaceholder';
import { helloWorld } from "./fetchUser";
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: "FETCH_POSTS", payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //whenever we call an action creator within an action creator, we still have to dispatch it
    //even though our fetchPosts function is async, we still have to await for our inner function invocation to finish in order to move on to the next line of code
    console.log("About to fetch posts");
    await dispatch(fetchPosts());
    const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqueUserIds.forEach(id => {
        console.log(id);
        return dispatch(fetchUser(id));
    })
    console.log(uniqueUserIds);
    console.log("fetched posts");
};

//const _fetchUser = _.memoize(async (id, dispatch) => {
    //const response = await jsonPlaceholder.get(`/users/${id}`);

    //dispatch({ type: "FETCH_USER", payload: response.data });
//});

//export const fetchUser = helloWorld;
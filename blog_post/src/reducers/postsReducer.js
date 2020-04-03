export default (state = [], action) => {
    //we typically use a switch state
    switch (action.type) {
        case "FETCH_POSTS": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
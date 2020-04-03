import React from 'react';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    render() {
        if(!this.props.user) {
            return null;
        }

        return (
        <div className="header">{this.props.user.name}</div>
        );
    }
}

//we can reference props that are going to be passed into this component
//mapStateToProps allows us to pass another param ownProps that allows us to reference this components props
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
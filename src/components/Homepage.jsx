import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    render() {
        return (
            <div className='container home-page-container'>
                {this.props.userRole}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {userInfo} = state;

    return {
        userRole: userInfo.userRole,
    };
}

// export default Homepage;

export default connect(
    mapStateToProps,
)(Homepage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnloggedIn from './submenu/UnloggedIn';
import LoggedIn from './submenu/LoggedIn';

class UserMenu extends Component {
    render(){
        //console.log(this.props);
        let { loggedin } = this.props;

        if (loggedin) {
            return <LoggedIn />;
        }

        return <UnloggedIn />;
    }
}; 

const mapStateToProps = state => ({
    loggedin: state.authReducer.loggedin
});

export default connect(mapStateToProps)(UserMenu);

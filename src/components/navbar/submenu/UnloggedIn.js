import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Grid } from 'material-ui';

class UnloggedIn extends Component {
    render(){
        const loginLink = props => <Link to="/login" { ...props} />;
        const registerLink = props => <Link to="/register" { ...props} />;
        return(
            <Grid item md={ 2 }>
                <Button color="inherit" component={ loginLink} to="/login">
                    Login 
                </Button>
                <Button color="inherit" component={ registerLink} to="/register">
                    Register
                </Button>
            </Grid>
        );
    }
}

export default UnloggedIn;

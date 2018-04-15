import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Grid, TextField, Button } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles'; 
import { connect } from 'react-redux';
import { fetchAuthToken } from '../../actions/auth'; 
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    button: {
        margin: theme.spacing.unit,
    },

    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit(e) {
        e.preventDefault(); 
        let { email, password }  = this.state; 
        this.props.login(email, password);
    }

    handleChange(e) {
        let {id, value} = e.target;
        this.setState({
            ...this.state,
            [id]: value
        });

        //console.log(this.state);
    }
    render(){
        //console.log(this.props);
        const { classes, loggedin, fetching } = this.props;
        if (loggedin) {
            return <Redirect to='/' />;
        }

        if (fetching) {
            return (
                <Grid container justify="center">
                    <Grid item xs={ 1 } >
                        <CircularProgress className={classes.progress} />
                    </Grid>
                </Grid>
            )
        }

        return(
            <Grid container justify="center">
                <Grid item xs={ 6 }>
                <form onSubmit={ this.submit } >
                    <TextField
                        className= { classes.textField }
                        fullWidth
                        id='email'
                        label='Email'
                        onChange={ this.handleChange }
                    />
                    <TextField
                        className= { classes.textField }
                        fullWidth
                        id='password'
                        label='Password'
                        type='password'
                        onChange={ this.handleChange }
                    />
                    <Button 
                        className= { classes.button }
                        type='submit' 
                        color='primary' 
                        fullWidth >
                        Login
                    </Button>
                </form>
                </Grid>
            </Grid>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    fetching: state.authReducer.fetching,
    loggedin: state.authReducer.loggedin,
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(fetchAuthToken(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));

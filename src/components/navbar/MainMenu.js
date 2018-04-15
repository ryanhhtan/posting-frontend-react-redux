import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button, Grid } from 'material-ui';

class MainMenu extends Component {
    render() {
        const homeLink = props => <Link to="/" { ... props} />;
        const postsLink = props => <Link to="/posts" { ... props} />;
        const aboutLink = props => <Link to="/about" { ... props} />;
        return (
            <Grid item md={ 9 }>
                <Button color="inherit" component={ homeLink} to="/">
                    Home 
                </Button>

                <Button color="inherit" component={ postsLink} to="/posts">
                    Posts 
                </Button>

                <Button color="inherit" component={ aboutLink} to="/about">
                    About
                </Button>
            </Grid>
        );
    }
}

export default MainMenu;

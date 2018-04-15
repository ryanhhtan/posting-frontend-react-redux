import React, { Component } from 'react';
import { 
  Grid,
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Hidden 
} from 'material-ui';
import { Link } from 'react-router-dom';

import MainMenu from './MainMenu'; 
import UserMenu from './UserMenu';
import logo from '../../assets/logo.svg';

const styles = {
  root: {
    backgroundColor: 'teal',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid item sm={ 1 } xs={ 11 }>
                <Link to='/'>
                  <img src={ logo } alt="logo" className={classes.logo}/>
                </Link>
              </Grid>
              <Hidden smUp>
                <Grid item xs={ 1 }>
                  <Button>DROPDOWN</Button>
                </Grid>
              </Hidden>
              <MainMenu />
              <UserMenu />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};


export default withStyles(styles)(Navbar);


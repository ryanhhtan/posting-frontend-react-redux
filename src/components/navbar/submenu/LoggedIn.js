import React, { Component } from 'react';
import { 
  Grid, 
  Button, 
  withStyles, 
  ClickAwayListener,
  Grow,
  MenuList,
  MenuItem,
  Paper,
  Avatar
} from 'material-ui';
import { Link } from 'react-router-dom';
import { Manager, Target, Popper } from 'react-popper';
import classNames from 'classnames';
import { connect } from 'react-redux';
import  md5 from 'js-md5';

import { logout } from '../../../actions/auth';
import { getUser } from '../../../actions/users';

const styles = theme => ({
  link: {
    textDecoration: 'none',
  },
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
  avatar: {
    width: 30,
    height: 30
  }
});

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleToggle () {
    this.setState({ open: !this.state.open });
  };

  handleClose () {
    this.setState({open: false});
  }

  handleLogout() {
    this.setState({open: false});
    this.props.logout();
  }

  componentWillMount() {
    if (!this.props.user)
      this.props.getUser(0);
  }

  render() {
    let { classes, user } = this.props;
    let { open } = this.state;
    let gravatarHash = user ? md5(user.email) : '205e460b479e2e5b48aec07710c08d50'; 
    
    return (
      <Grid item md={ 2 } >
        <div className={ classes.root }>
          <Manager>
            <Target>
              <Button 
                color='inherit'
                aria-owns={ open ? 'menu-list-grow': null }
                aria-haspopup="true"
                onClick={ this.handleToggle } 
              >
                <Avatar
                  alt="Avatar"
                  src={`https://www.gravatar.com/avatar/${ gravatarHash }`} 
                  className={ classes.avatar}
                >
                </Avatar>
                {user && user.name } 
              </Button>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={open}
              className={ classNames({ [classes.popperClose]: !open }) }
            >
              <ClickAwayListener onClickAway={ this.handleClose }>
                <Grow in={open} id="menu-list-grow" style={{ tranformOrigin: '0, 0, 0' }}>
                  <Paper>
                    <MenuList role="menu">
                      <MenuItem onClick={ this.handleClose }>
                        <Link to='/profile' className={ classes.link }>Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={ this.handleLogout }>Logout </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state =>({
  user: state.usersReducer.user
}); 

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getUser: id => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoggedIn));

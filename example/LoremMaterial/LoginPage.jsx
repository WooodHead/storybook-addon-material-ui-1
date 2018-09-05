import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from '@material-ui/core/Button';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

const paperStyle = {
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};
const signInButton = {
  width: 256,
  margin: 15
};
const toggle = {
  textAlign: 'left',
  width: 256,
  margin: 15
};
export default class MyTest extends React.Component {
    state = {
      logged: true,
    };

    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

    render() {
        return (
        <div
        style={{
            margin: '20px 100px',
            minWidth: 400,
            maxWidth: 800,
            display: 'flex',
            justifyContent: 'center',
        }}>
          <Paper style={paperStyle} zDepth={1} >
          <AppBar
            title="Welcome"
            showMenuIconButton={false}
          />
          <div>
            <TextField
              floatingLabelText="Email"
              type="text"
            />
            <br/>
            <TextField
              floatingLabelText="Password"
              type="password"
            />

            <Toggle
              label="Remember me"
              defaultToggled={true}
              onToggle={this.handleChange}
              labelPosition="right"
              style={toggle}
            />

            <Button variant="raised" label="Sign in" style={signInButton} primary={true}/>
            <br />
            <p><a style={{
                color: this.context.muiTheme.palette.secondaryTextColor,
            }}
             href="#">Forgot password?</a></p>
            </div>
          </Paper>
        </div>
    );
  }
}
MyTest.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

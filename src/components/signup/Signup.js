import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { fetchUtils, showNotification, Notification } from "react-admin";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    dialog: {
      padding: "1em",
    },
    input: {
      margin: "1em",
      display: "block",
    },
    submit: {
      display: "block",
      margin: "2em auto",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  })
);

const SignupForm = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo

    let body = JSON.parse(JSON.stringify(state)),
      url = "http://localhost:8086/user/register",
      options = {};

    options.headers = new Headers({ Accept: "application/json" });
    options.method = "POST";
    options.body = JSON.stringify(body);

    fetchUtils
      .fetchJson(url, options)
      .then((data) => {
        props.showNotification("Registered successfully. You may now log in.");
        props.history.push("/login");
      })
      .catch((err, ...rest) => {
        console.error(err);
        props.showNotification("Could not register", "error");
      });
  };

  return (
    <>
      <Dialog open={true} className={classes.dialog}>
        <DialogTitle>Registration</DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            name='username'
            label='Username'
            type='text'
            value={state.username}
            onChange={handleChange}
            className={classes.input}
          />
          <TextField
            required
            name='email'
            label='Email'
            type='email'
            value={state.email}
            onChange={handleChange}
            className={classes.input}
          />
          <TextField
            required
            name='password'
            label='Password'
            type='password'
            value={state.password}
            onChange={handleChange}
            className={classes.input}
          />
          <Button
            type='submit'
            label='Submit'
            color='primary'
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Dialog>
      <Notification />
    </>
  );
};

export const Signup = connect(undefined, { showNotification })(SignupForm);

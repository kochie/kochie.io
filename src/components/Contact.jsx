import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Contact = ({ classes, emailAddress, id }) => (
  <div className={classes.root}>
    <div className={classes.list} id={id} />
    <div className={classes.container}>
      <div className={classes.text}>
        <Typography>Lorum Ipsum</Typography>
      </div>
      <Paper className={classes.formContainer}>
        <form method="POST" action={`https://formspree.io/${emailAddress}`}>
          <TextField className={[classes.formElement, classes.formWidth].join(' ')} name="email" label="Your email" type="email" />
          <TextField className={[classes.formElement, classes.formWidth].join(' ')} multiline rows="5" name="message" label="Your message" />
          <Button className={classes.formElement} type="submit" variant="raised" color="primary">
        Send
            <Send className={classes.rightIcon}>send</Send>
          </Button>
        </form>
      </Paper>
    </div>
  </div>
);

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  emailAddress: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    padding: '3%',
  },
  form: {
    width: '100%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  formWidth: {
    width: '100%',
  },
  formElement: {
    marginTop: 15,
  },
  list: {
    position: 'relative',
    top: -64,
  },
});

export default withStyles(styles, { withTheme: true })(Contact);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
	  flexGrow: 1,
	  margin: 0,
  },
};

const Heading = ({ classes, title, sections }) => {
  const s1 = sections.splice(0, Math.floor(sections.length / 2));
  const s2 = [...sections]
  return (<div className={classes.root}>
    <AppBar position="fixed" color="default">
      <Toolbar>
        {s1.map(section => (
           <Typography variant="title" color="inherit">
           {section}
         </Typography>)
        )}
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
        {s2.map(section => (
           <Typography variant="title" color="inherit">
           {section}
         </Typography>)
        )}
      </Toolbar>
    </AppBar>
  </div>)
}

Heading.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(styles, { withTheme: true })(Heading);


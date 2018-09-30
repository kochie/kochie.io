import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Logo from '../logo.svg';

const styles = {
  root: {
    flexGrow: 1,
    margin: 0,
    display: 'sticky',
  },
  icon: {
    filter: 'grayscale(100%)',
    height: '50px',
    padding: '2px',
    transform: 'scale3d(0.9,0.9,1)',
    transition: 'all 0.5s ease',
    '&:hover': {
      filter: 'none',
      transform: 'scale3d(1,1,1)',
      transition: 'all 0.5s ease',
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#2a2f4a'
  },
  rightMenu: {
    textAlign: 'left',
    paddingLeft: '2.5%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingRight: '2.5%',
    width: '100%',
  },
  link: {
    padding: '0px 2.5%',
    transform: 'scale3d(0.9,0.9,1)',
    transition: 'all 0.5s ease',
    backfaceVisibility: 'hidden',
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale3d(1,1,1)',
      transition: 'all 0.5s ease',
      backfaceVisibility: 'hidden',
    }
  },
};

const scrollToID = (event, id) => {
  event.preventDefault()
  scrollTo({top: document.getElementById(id).offsetTop, behavior: 'smooth'})
}

const Heading = ({ classes, sections }) => {
  const s1 = sections.splice(0, Math.floor(sections.length / 2));
  const s2 = [...sections];
  return (
    <div className={classes.root}>
      <AppBar color="default">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftMenu}>
            {s1.map(section => (
                <a href={`#${section.name.toLowerCase()}`} onClick={(e) => scrollToID(e, section.name.toLowerCase())} className={classes.link}>
              <Typography variant="title" color="default">
                  {section.name}
              </Typography>
                </a>
            ))}
          </div>
          <div className={classes.middle}>
            <a href="#top" onClick={(e) => scrollToID(e, 'top')}>
              <img src={Logo} alt="return logo" className={classes.icon} />
            </a>
          </div>
          <div className={classes.rightMenu}>
            {s2.map(section => (
                <a href={`#${section.name.toLowerCase()}`} className={classes.link} onClick={(e) => scrollToID(e, section.name.toLowerCase())}>
              <Typography variant="title" color="default">
                  {section.name}
              </Typography>
                </a>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Heading.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles, { withTheme: true })(Heading);


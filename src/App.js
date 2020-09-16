import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from "./pages/HomePage/HomePage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
 },
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Navbar
			open={open}
			setOpen={setOpen}
		/>
      <Sidebar
			open={open}
			setOpen={setOpen}
		/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
			<div className={classes.drawerHeader} />
        <HomePage />
      </main>
    </div>
  );
}
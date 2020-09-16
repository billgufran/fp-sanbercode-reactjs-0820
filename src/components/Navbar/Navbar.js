import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { AvatarButton, LoginButton } from "./Navbar-element";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

export default function Navbar(props) {
	const classes = useStyles();
	const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

	const handleDrawerOpen = () => {
		props.setOpen(true);
	};

	return (
		<AppBar
			position="fixed"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: props.open,
			})}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					className={clsx(
						classes.menuButton,
						props.open && classes.hide
					)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					Persistent drawer
				</Typography>
				{isLoggedIn ? <AvatarButton /> : <LoginButton />}
			</Toolbar>
		</AppBar>
	);
}

// import React from "react";
// import NavbarAlt from "./components/Navbar/NavbarAlt";
// import HomePage from "./pages/HomePage/HomePage";

// function App() {
// 	return (
// 		<div className="App">
// 			<NavbarAlt/>
// 			{/* <Navbar/> */}
// 			<HomePage />
// 		</div>
// 	);
// }

// export default App;

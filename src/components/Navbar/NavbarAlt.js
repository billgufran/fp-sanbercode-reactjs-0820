import AppBar from "@material-ui/core/AppBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { AvatarButton, LoginButton } from "./Navbar-element";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

export default function NavbarAlt() {
	const classes = useStyles();

	const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

	//Toggle login
	const handleChange = event => {
		setIsLoggedIn(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={isLoggedIn}
							onChange={handleChange}
							aria-label="login switch"
						/>
					}
					label={isLoggedIn ? "Logout" : "Login"}
				/>
			</FormGroup>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit">
						Photos
					</Typography>
					{isLoggedIn ? <AvatarButton /> : <LoginButton />}
				</Toolbar>
			</AppBar>
		</div>
	);
}

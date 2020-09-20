import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./components/Context/AuthContext";
import DataProvider from "./components/Context/DataContext";
import { NavContext } from "./components/Context/NavContext";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import GamesTable from "./components/Tables/GamesTable";
import MoviesTable from "./components/Tables/MoviesTable";
import AddNewItemPage from "./pages/Add/AddNewItemPage";
import GameDetails from "./pages/Details/GameDetails";
import MovieDetails from "./pages/Details/MovieDetails";
import EditGamePage from "./pages/Edit/EditGamePage";
import EditMoviePage from "./pages/Edit/EditMoviePage";
import Games from "./pages/Home/Games";
import HomePage from "./pages/Home/HomePage";
import Movies from "./pages/Home/Movies";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
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
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
}));

export default function App() {
	const classes = useStyles();
	const {open, navVisible} = useContext(NavContext);
	const {isLoggedIn} = useContext(AuthContext)

	return (
		<div className={classes.root}>
			{navVisible && (
				<>
					<Navbar />
					<Sidebar />
				</>
			)}
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				<Switch>
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
					<DataProvider>
						<Route path="/" exact component={HomePage} />
						<Route path="/movies" exact component={Movies} />
						<Route path="/games" exact component={Games} />
						{/* private */}
						<Route path="/movies/details/:id" component={isLoggedIn ? MovieDetails : HomePage}/>
						<Route path="/movies/table" component={isLoggedIn ? MoviesTable : HomePage} />
						<Route path="/movies/edit/:id" component={isLoggedIn ? EditMoviePage : HomePage} />
						<Route path="/games/details/:id" component={isLoggedIn ? GameDetails : HomePage} />
						<Route path="/games/table" component={isLoggedIn ? GamesTable : HomePage} />
						<Route path="/games/edit/:id" component={isLoggedIn ? EditGamePage : HomePage} />
						<Route path="/add" component={isLoggedIn ? AddNewItemPage : HomePage} />
					</DataProvider>
				</Switch>
			</main>
		</div>
	);
}

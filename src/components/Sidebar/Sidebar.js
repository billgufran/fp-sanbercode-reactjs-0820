import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React from "react";
import { PrivateList, PublicList } from "./Sidebar-element";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function Sidebar(props) {
	const classes = useStyles();

	const handleDrawerClose = () => {
		props.setOpen(false);
	};

	return (
		<>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={props.open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<PublicList/>
				{/* isLoggedIn */}
				<PrivateList/>
				{/* isLoggedIn */}
			</Drawer>
		</>
	);
}

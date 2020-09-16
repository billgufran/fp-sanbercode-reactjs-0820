import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import EditIcon from "@material-ui/icons/Edit";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MovieIcon from "@material-ui/icons/Movie";
import GameIcon from "@material-ui/icons/SportsEsports";
import React from "react";

const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export function PublicList() {
	return (
		<List
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Home
				</ListSubheader>
			}
		>
			<ListItem button>
				<ListItemIcon>
					<AppsIcon />
				</ListItemIcon>
				<ListItemText primary={"All list"} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<MovieIcon />
				</ListItemIcon>
				<ListItemText primary={"Movie list"} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<GameIcon />
				</ListItemIcon>
				<ListItemText primary={"Game list"} />
			</ListItem>
		</List>
	);
}

export function PrivateList() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<Divider />
			<List>
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<EditIcon />
					</ListItemIcon>
					<ListItemText primary="Edit list" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<MovieIcon />
							</ListItemIcon>
							<ListItemText primary="Movies" />
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<GameIcon />
							</ListItemIcon>
							<ListItemText primary="Games" />
						</ListItem>
					</List>
				</Collapse>
				<ListItem button>
					<ListItemIcon>
						<AddIcon />
					</ListItemIcon>
					<ListItemText primary={"Add new item"} />
				</ListItem>
			</List>
		</>
	);
}

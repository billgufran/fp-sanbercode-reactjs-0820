// import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
	root: {
		// display: "flex",
		width: 350,
		height: 200,
	},
	card: {
		display: "flex",
		width: "100%",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 115,
		position: "relative",
      top: 10,
      left: 10,
      float: 'left',
	},
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cover}
					image="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"
					title="Dunkirk"
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							Dunkirk
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Mac Miller
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</div>
			</Card>
		</div>
	);
}

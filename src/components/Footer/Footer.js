import { Link, Typography } from "@material-ui/core";
import React, { Component } from "react";
// import blueGrey from '@material-ui/core/colors/blueGrey';

// const color = blueGrey[400];

export default class Footer extends Component {
	render() {
		return (
			<Typography variant="body2" align="center">
				{"Created by "}
				<Link color="inherit" href="https://github.com/billgufran/">
					Billgufran
				</Link>
			</Typography>
		);
	}
}

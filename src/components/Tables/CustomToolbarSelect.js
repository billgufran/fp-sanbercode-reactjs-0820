import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";

const defaultToolbarSelectStyles = {
	iconButton: {},
	iconContainer: {
		marginRight: "24px",
	},
	inverseIcon: {
		transform: "rotate(90deg)",
	},
};

class CustomToolbarSelect extends React.Component {
	handleClickInverseSelection = () => {
		const nextSelectedRows = this.props.displayData.reduce(
			(nextSelectedRows, _, index) => {
				if (
					!this.props.selectedRows.data.find(
						selectedRow => selectedRow.index === index
					)
				) {
					nextSelectedRows.push(index);
				}

				return nextSelectedRows;
			},
			[]
		);

		this.props.setSelectedRows(nextSelectedRows);
	};

	render() {
		const {classes} = this.props;

		return (
				<div className={classes.iconContainer}>
					<Tooltip title={"Edit data"}>
						{/* <Link to="/edit/movie"></Link> */}
						<IconButton className={classes.iconButton} onClick={() => console.log(this.props.displayData)}>
							<EditIcon className={classes.icon} />
						</IconButton>
					</Tooltip>
					<Tooltip title={"Delete data"}>
						<IconButton className={classes.iconButton} onClick={() => console.log(this.props.selectedRows)}>
							<DeleteIcon className={classes.icon} />
						</IconButton>
					</Tooltip>
				</div>
		);
	}
}

export default withStyles(defaultToolbarSelectStyles, {
	name: "CustomToolbarSelect",
})(CustomToolbarSelect);

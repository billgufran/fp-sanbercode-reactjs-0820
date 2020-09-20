import {
   Box,
   Button,
   Container,
   makeStyles,
   Snackbar,
   TextField
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const useStyles = makeStyles(theme => ({
	box: {
		marginBottom: 15,
	},
}));

const inputDefault = {
	current_password: "",
	new_password: "",
	new_confirm_password: "",
};

export default function MyAccount() {
	const [input, setInput] = useState(inputDefault);
	const [isValid, setIsValid] = useState({password: true, passMatch: true});
	const [formValid, setFormValid] = useState(false);
   const [openSnackbar, setOpenSnackbar] = useState('');
	const {user} = useContext(AuthContext);
	const classes = useStyles();

	//Validation
	useEffect(() => {
		console.log(user.password);
		if (input.new_password !== "") {
			if (/\S/.test(input.new_password)) {
				setIsValid({...isValid, password: true});
			} else {
				setIsValid({...isValid, password: false});
			}
		}
	}, [input.new_password]);

	useEffect(() => {
		if (input.new_password !== "" && input.new_confirm_password !== "") {
			if (input.new_password !== input.new_confirm_password) {
				setIsValid({...isValid, passMatch: false});
			} else {
				setIsValid({...isValid, passMatch: true});
			}
		}
	}, [input.new_password, input.new_confirm_password]);

	useEffect(() => {
		if (Object.values(input).every(el => el !== "")) {
			if (Object.values(isValid).every(el => el === true)) {
				setFormValid(true);
			} else {
				setFormValid(false);
			}
		} else {
			setFormValid(false);
		}
	}, [isValid, setIsValid]);

	const changePass = event => {
		event.preventDefault();
		let {current_password, new_password, new_confirm_pasword} = input;

		axios.post(
				`https://backendexample.sanbersy.com/api/change-password`,
				{
					current_password,
					new_password,
					new_confirm_pasword,
				},
				{headers: {Authorization: `Bearer ${user.token}`}}
			)
			.then(() => {
            setInput(inputDefault);
            setOpenSnackbar('success')
            setFormValid(false)
         })
         .catch(() => {
            setFormValid(false)
            setOpenSnackbar('error')
         })
	};

	const handleChange = event => {
		setInput({...input, [event.target.name]: event.target.value});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

	return (
		<>
			<Snackbar
				open={openSnackbar === 'error'}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="error">
					Password incorrect
				</Alert>
			</Snackbar>
			<Snackbar
				open={openSnackbar === 'success'}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Password updated
				</Alert>
			</Snackbar>
			<Container>
				<Box className={classes.box}>
					<TextField
						disabled
						id="username"
						label="Username"
						defaultValue={user.name}
						variant="outlined"
					/>
				</Box>
				<Box className={classes.box}>
					<TextField
						disabled
						id="email"
						label="Email"
						defaultValue={user.email}
						variant="outlined"
					/>
				</Box>
				<form onSubmit={changePass}>
					<Box className={classes.box}>
						<TextField
							required
							id="current_password"
							name="current_password"
							label="Current password"
							value={input.current_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
						/>
					</Box>
					<Box className={classes.box}>
						<TextField
							required
							id="new_password"
							name="new_password"
							label="New password"
							value={input.new_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
							error={!isValid.password}
							helperText={
								!isValid.password &&
								"Password must include non-whitespace character"
							}
						/>
					</Box>
					<Box className={classes.box}>
						<TextField
							required
							id="new_confirm_password"
							name="new_confirm_password"
							label="Confirm new password"
							value={input.new_confirm_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
							error={!isValid.passMatch}
							helperText={
								!isValid.passMatch && "Password should match"
							}
						/>
					</Box>
					<Box className={classes.box}>
						<Button
							type="submit"
							color="primary"
							disabled={!formValid}
						>
							Change Password
						</Button>
					</Box>
				</form>
			</Container>
		</>
	);
}

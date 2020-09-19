import { FormGroup, FormLabel, TextField } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
// import CustomToolbarSelect from "./CustomToolbarSelect";

export default function MoviesTable() {
	const {fetchMovies, moviesData} = useContext(DataContext);

	useEffect(() => {
		fetchMovies();
	}, []);

	const columns = [
		{
			name: "title",
			label: "Title",
			options: {
				sort: true,
				filter: false
			}
		},
		{
			name: "description",
			label: "Description",
			options: {
				sort: false,
				filter: false
			}
		},
		{
			name: "genre",
			label: "Genre",
			options: {
				sort: true,
				filter: true
			}
		},
		{
			name: "year",
			label: "Year",
			options: {
				sort: true,
				filter: true
			}
		},
		{
			name: "duration",
			label: "Duration (minutes)",
			options: {
				sort: true,
				filter: true,
				filterType: 'custom',
				customFilterListOptions: {
					render: v => {
					  if (v[0] && v[1]) {
						 return [`Min Duration: ${v[0]}, Max Duration: ${v[1]}`];
					  }
					  return [];
					},
					update: (filterList, filterPos, index) => {
					  console.log('customFilterListOnDelete: ', filterList, filterPos, index);

					  if (filterPos === 0) {
						 filterList[index].splice(filterPos, 1, '');
					  } else if (filterPos === 1) {
						 filterList[index].splice(filterPos, 1);
					  } else if (filterPos === -1) {
						 filterList[index] = [];
					  }

					  return filterList;
					},
				 },
				 filterOptions: {
					names: [],
					logic(duration, filters) {
					  if (filters[0] && filters[1]) {
						 return duration < filters[0] || duration > filters[1];
					  } else if (filters[0]) {
						 return duration < filters[0];
					  } else if (filters[1]) {
						 return duration > filters[1];
					  }
					  return false;
					},
					display: (filterList, onChange, index, column) => (
					  <div>
						 <FormLabel>Duration (minutes)</FormLabel>
						 <FormGroup row>
							<TextField
							  label='min'
							  value={filterList[index][0] || ''}
							  onChange={event => {
								 filterList[index][0] = event.target.value;
								 onChange(filterList[index], index, column);
							  }}
							  style={{ width: '45%', marginRight: '5%' }}
							/>
							<TextField
							  label='max'
							  value={filterList[index][1] || ''}
							  onChange={event => {
								 filterList[index][1] = event.target.value;
								 onChange(filterList[index], index, column);
							  }}
							  style={{ width: '45%' }}
							/>
						 </FormGroup>
					  </div>
					),
				 },
				 print: false,
			}
		},
		{
			name: "rating",
			label: "Rating",
			options: {
				sort: true,
				filter: true,
				filterType: 'custom',
				customFilterListOptions: {
					render: v => {
					  if (v[0] && v[1]) {
						 return [`Min Rating: ${v[0]}, Max Rating: ${v[1]}`];
					  }
					  return [];
					},
					update: (filterList, filterPos, index) => {
					  console.log('customFilterListOnDelete: ', filterList, filterPos, index);

					  if (filterPos === 0) {
						 filterList[index].splice(filterPos, 1, '');
					  } else if (filterPos === 1) {
						 filterList[index].splice(filterPos, 1);
					  } else if (filterPos === -1) {
						 filterList[index] = [];
					  }

					  return filterList;
					},
				 },
				 filterOptions: {
					names: [],
					logic(rating, filters) {
					  if (filters[0] && filters[1]) {
						 return rating < filters[0] || rating > filters[1];
					  } else if (filters[0]) {
						 return rating < filters[0];
					  } else if (filters[1]) {
						 return rating > filters[1];
					  }
					  return false;
					},
					display: (filterList, onChange, index, column) => (
					  <div>
						 <FormLabel>Rating</FormLabel>
						 <FormGroup row>
							<TextField
							  label='min'
							  value={filterList[index][0] || ''}
							  onChange={event => {
								 filterList[index][0] = event.target.value;
								 onChange(filterList[index], index, column);
							  }}
							  style={{ width: '45%', marginRight: '5%' }}
							/>
							<TextField
							  label='max'
							  value={filterList[index][1] || ''}
							  onChange={event => {
								 filterList[index][1] = event.target.value;
								 onChange(filterList[index], index, column);
							  }}
							  style={{ width: '45%' }}
							/>
						 </FormGroup>
					  </div>
					),
				 },
				 print: false,
			}
		},
		{
			name:"id",
			label: "Actions",
			options: {
				sort: true,
				filter: false
			}
		}
	]

	// const data = moviesData.map(movie => [movie.title, movie.description, movie.genre, movie.year, movie.duration, movie.rating])
	const data = moviesData.map(movie => {
		const {title, description, genre, year, duration, rating, id} = movie
		return {title, description, genre, year, duration, rating, id}
	})

	const options = {
		filterType: "dropdown",
		download: false,
		print: false,
		selectableRows: "none",
		selectableRowsHeader: false,

	// 	customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
   //    <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
   //  ),
	};

	useEffect(() => {
		console.log(data)
	})

	console.log(data)

	return (
		<>
			<MUIDataTable
				title={"Movie list"}
				data={data}
				columns={columns}
				options={options}
			/>
		</>
	);
}

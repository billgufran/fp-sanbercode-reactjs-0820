import Grid from "@material-ui/core/Grid";
import React from "react";
import MovieCard from "../../components/Card/MovieCard";
// import ImgMediaCard from '../../components/Card/Card'
// import MediaControlCard from "../../components/Card/MediaCard";

export default function HomePage() {
	return (
		<>
			<Grid container style={{justifyContent: 'center'}}>
				<Grid item xs={false} sm={1} md={1} lg xl/>
				<Grid item container xs={12} sm={10} md={10} lg={11} xl={11} spacing={6}>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>
               <Grid item sm={6} md={6} lg={4} xl={3}>
                  <MovieCard/>
               </Grid>

				</Grid>
				<Grid item xs={false} sm={1} md={1} lg xl/>
			</Grid>
			{/* <ImgMediaCard/> */}
		</>
	);
}

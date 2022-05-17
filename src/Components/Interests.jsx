import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Bookshelf from "./Bookshelf";
import Chess from "./Chess";
import Baseball from "./Baseball";
import Header from "./Header";


export default function Home(){
	return(
		<>
			<Header />
			<Grid container>
				<Grid item xs={12} sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
					<Typography variant="h1">Interests</Typography>
					<Typography variant="h4">Scroll down</Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Bookshelf position={[0,-2.2,0]} scale={0.0047} spin={true}/>
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb: 2}}>Books</Typography>
					<Typography variant="h5">One of the things that I really like to do in my free time is to read. Some of my favourite books are The Old Man and the Sea, Crime and Punishment and A Clockwork Orange. You can see all of the books I've read and want to read here:</Typography>
					<Typography variant="h5" sx={{mt: 2}}><a className="link" href="https://www.goodreads.com/user/show/137633524-enzo" target="_blank">goodreads</a></Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Chess position={[0, 0, 0]} scale={0.25} rotation={[0, -Math.PI /1, 0]} spin={true}/>
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height:  {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2">Chess</Typography>
					<Typography variant="h5">I also really like chess. Most of the time I am solving puzzles but I also like playing games. There is nothing similar to the feeling of losing and winning a game of chess. You can see my lichess profile below:</Typography>
					<Typography variant="h5" sx={{mt: 2}}><a href="https://lichess.org/@/enzdor" className="link" target="_blank">lichess</a></Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Baseball position={[0, 0,0]} scale={2.5} rotation={[0,0,0.3]} spin={true}/>
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2">Baseball</Typography>
					<Typography variant="h5">I really like baseball, I think it is my favourite sport to watch. I have no idea how to swing a bat or throw a curveball but I love it anyway. I'm a Mariners fan, I hope we reach the playoffs! I really like stats, here are some websites that I like:</Typography>
					<Stack direction="row" spacing={3} sx={{mt: 2}}>
						<Typography variant="h5"><a href="https://www.baseball-reference.com/" className="link" target="_blank">baseball-reference</a></Typography> 
						<Typography variant="h5"><a href="https://baseballsavant.mlb.com/" className="link" target="_blank">baseball savant</a></Typography> 
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}

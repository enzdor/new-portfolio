import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Desk from "./Desk";
import Header from "./Header";

export default function About(){
	return(
		<>
			<Header />
			<Grid container>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Desk position={[-0.3,-2,0]} scale={0.01} rotation={[0, -Math.PI/2,0]} spin={true}/>
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb: 2}}>About</Typography>
					<Typography variant="h5">Hi! My name is Enzo and I am a web developer. I love working with new technologies and learning how to use them. I have experience with React, SQL databases, firebase, building REST APIs and Stripe. Some of the libraries that I really like are mui and react-three-fiber. You can find me here: </Typography>
					<Stack direction="row" spacing={3} sx={{mt: 2}}>
						<a href="https://github.com/enzdor" target="_blank" className="link"><GitHubIcon fontSize="large" color="black" /></a>
						<a href="https://www.linkedin.com/in/enzo-lopes-baitelo-913b121b1/" target="_blank" className="link"><LinkedInIcon fontSize="large" color="black"/></a>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}

import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import Desk from "./Desk";
import Bookshelf from "./Bookshelf";
import Chess from "./Chess";
import Baseball from "./Baseball";
import Cabinet from "./Cabinet";
import Header from "./Header";


export default function Home(){
	return(
		<>
			<Header />
			<Grid container>
				<Hidden smDown>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Desk position={[-0.3,-2,0]} scale={0.01} rotation={[0, -Math.PI/2,0]}/>
							<Bookshelf position={[3.85,-1.41,0]} scale={0.0037}/>
							<Chess position={[-5.05, -2, 1]} scale={0.05} rotation={[0, -Math.PI /1, 0]}/>
							<Cabinet position={[-3.9, -1.01, 0]} scale={0.45} rotation={[0, -Math.PI /2, 0]}/>
							<Baseball position={[5.35,-0.545,0]} scale={1} rotation={[0,0,0.3]}/>	
						</Suspense>
					</Canvas>
				</Grid>
				</Hidden>
				<Grid item xs={12} md={6} sx={{height: {xs: '100vh', sm: 'auto'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb: 2}}>Enzo</Typography>
					<Typography variant="h5">Web developer, creator and pizza enjoyer</Typography>
				</Grid>
			</Grid>
		</>
	)
}

import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Books from "./Books";
import Folders from "./Folders"; 
import Shoe from "./Shoe";
import Header from "./Header";

export default function Projects(){
	return(
		<>
			<Header />
			<Grid container>
				<Grid item xs={12} sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
					<Typography variant="h1">Projects</Typography>
					<Typography variant="h4">Scroll down</Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Books position={[0,-1,0]} scale={2} spin={true}/>
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md:'100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb:2}}>Alejandría</Typography>
					<Typography variant="h5">Alejandría is an ecommerce for selling and buying books. I created this project to gain a deeper understanding of React in general. I also wanted to implement popular libraries like Stripe, Auth0 and MUI. This was a great experience and very fun project to work on. You can visit the website and see the code below:</Typography>
					<Stack direction="row" spacing={3} sx={{mt: 2}}>
						<Typography variant="h5"><a href="https://alejandria-website.vercel.app/" className="link" target="_blank">website</a></Typography>
						<Typography variant="h5"><a href="https://github.com/enzdor/alejandria-website" className="link" target="_blank">github</a></Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Folders position={[0, -1.5, 0]} scale={12} rotation={[0, -Math.PI /2, 0]} spin={true} />
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb:2}}>Portfolio</Typography>
					<Typography variant="h5">This website was the follow up to Alejandría. I had discovered three.js and react-three-fiber and wanted to learn how to use it. There are two versions of this website, the less accessible and more fun original and, this one which is simpler and more polished. Check it out below:</Typography>
					<Stack direction="row" spacing={3} sx={{mt: 2}}>
						<Typography variant="h5"><a href="https://github.com/enzdor/new-portfolio" className="link" target="_blank">github</a></Typography>
						<Typography variant="h5"><a href="https://fun-enzo-portfolio.vercel.app/" className="link" target="_blank">fun</a></Typography>
						<Typography variant="h5"><a href="https://github.com/enzdor/portfolio" className="link" target="_blank">fun-github</a></Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: '100vh'}}>
					<Canvas camera={{position: [0, 1.5, 12], pov: 70}} dpr={[1,2]} shadows>
						<ambientLight intensity={0.2} />
						<spotLight position={[0, 4, 10]} intensity={0.5} penumbra={1}/>
						<spotLight position={[3, 3, 3]} intensity={0.3} penumbra={1}/>
						<Suspense fallback={null}>
							<Shoe position={[0, -1.4,0]} scale={0.02} spin={true}/>	
						</Suspense>
					</Canvas>
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem'}}>
					<Typography variant="h2" sx={{mb:2}}>Bans</Typography>
					<Typography variant="h5">This was the last project I have worked on. It aims to incorporate everything that I have learned into one thing. I am really proud with how it came out. You can check it out here:</Typography>
					<Stack direction="row" spacing={3} sx={{mt: 2}}>
						<Typography variant="h5"><a href="https://bans-mocha.vercel.app/" className="link" target="_blank">website</a></Typography>
						<Typography variant="h5"><a href="https://github.com/enzdor/bans" className="link" target="_blank">github</a></Typography>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}

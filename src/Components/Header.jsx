import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export default function Header(){
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	return(
		<>
			<Grid container spacing={10} sx={{
				position: 'absolute',
				top: '0',
				left: '0',
				zIndex: '2',
				backgroundColor: 'transparent'
			}}>
				<Grid item xs={4}>
					<Typography variant="h3" onClick={() => navigate('/')} sx={{my: '1rem', mx: '1.5rem', cursor: 'pointer'}}>Enzo</Typography>
				</Grid>
				<Grid item xs={8} sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}>
					<MenuIcon fontSize="large" onClick={() => {setOpen(true)}} sx={{
						my: '1rem', 
						mx: '1.5rem',
						zIndex: '10',
						cursor: 'pointer'
					}}/>
				</Grid>
			</Grid>
			<Drawer open={open} elevation={0} anchor="top" PaperProps={{style: {height: '100vh'}}}>
				<CloseIcon fontSize="large" onClick={() => {setOpen(false)}} sx={{
					position: 'absolute', 
					top: '1.5rem', 
					right: '1.5rem'
				}}/>
				<Typography variant="h3" sx={{cursor: 'pointer', alignSelf: 'flex-start', my: '1rem', mx: '1.5rem'}} onClick={() => navigate('/')}>Enzo</Typography>
				<Stack direction="column" spacing={6} sx={{
					my: '1rem', 
					mx: '1.5rem',
					dipslay: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
					height: '100%'
				}}>
					<Typography variant="h2" sx={{cursor: 'pointer'}} onClick={() => navigate('/projects')}>Projects</Typography>
					<Typography variant="h2" sx={{cursor: 'pointer'}} onClick={() => navigate('/interests')}>Interests</Typography>
					<Typography variant="h2" sx={{cursor: 'pointer'}} onClick={() => navigate('/about')}>About</Typography>
				</Stack>
			</Drawer>
		</>
	)
}

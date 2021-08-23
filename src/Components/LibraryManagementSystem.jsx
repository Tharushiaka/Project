
import {Box, makeStyles, Typography} from '@material-ui/core';
import YouTube from '../Assets/Images/1.jpg';
import InstaTele from '../Assets/Images/2.jpeg';


const useStyles = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component:{
        margin: 50,
        color: '#2B547E'
    }
})
const LibraryManagementSystem = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant ='h4'style={{marginBottom: 50}}>Library Management System</Typography>
        
     <Box style = {{display: 'flex'}}>
         <img className = {classes.image} src={YouTube}/>
         <img className = {classes.image} src={InstaTele}/>
     </Box> 
     </Box> 

    )
}

export default LibraryManagementSystem;
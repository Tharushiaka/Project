import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }

    }
})

const initialValues = {
    name:'',
    username: '',
    email: '',
    phone:''
}

const AddUser = () => {
    const [ user, setUser] = useState (initialValues);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        
    }

    const addUserDetails = async () => {
        await addUser (user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
        <Typography variant = "h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
        </FormControl>
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
        </FormControl>
        <Button variant='contained' onClick={() => addUserDetails()} color='primary' >Add User</Button>
        </FormGroup>

        

    )
}

export default AddUser;
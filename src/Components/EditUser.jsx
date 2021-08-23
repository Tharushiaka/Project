
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

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

const EditUser = () => {
    const [ user, setUser] = useState (initialValues);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect (() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        
    }

   const editUserDetails = async () => {
   const response = await editUser(id, user);
      history.push('./all');
   }
   return (
    <FormGroup className={classes.container}>
        <Typography variant = "h4">Edit User</Typography>
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
        <Button variant='contained' onClick={() => editUserDetails()} component={Link} to={'/add'} color='primary'>edit User</Button>
        
        </FormGroup>
    )
}

export default EditUser;
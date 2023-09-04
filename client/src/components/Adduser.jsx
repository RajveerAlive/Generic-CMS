import { Typography, styled, FormControl, FormGroup, Button, InputLabel, Input } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';
import { useMyContext } from '../context/Context';


const Container = styled(FormGroup)`
  width: 50%;
  top: 160px;
  margin-left:390px;
  position: absolute;
  background-color: white;
  & > div {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
    top: 100px;
    margin: 0 auto;
    left: 0;
    right: 0;
    position: relative;
  }
  
`;

const defaultValue={
    title: '',
    author: '',
    link: '',
    context: ''
}

const Adduser = () => {
    const {backColor}=useMyContext();
    const [user,setuser]=useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setuser({...user, [e.target.name]:e.target.value});
    }

    const adduserdetails = async() =>{
        await addUser(user);
        navigate('/')
    }
  return (
    <div style={{ background:`${backColor?backColor : "white"}`, height: '100vh', width: '100vw' }}>
    <Container>
      <Typography variant="h3">Create Post</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='title' required/>
      </FormControl>
      <FormControl>
        <InputLabel>Author</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='author' required/>
      </FormControl>
      <FormControl>
        <InputLabel>Image Link (optional)</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='link' required/>
      </FormControl>
      <FormControl>
        <InputLabel>Context</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='context' required/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => adduserdetails()}>SUBMIT</Button>
      </FormControl>
    </Container>
    </div>
  );
};

export default Adduser;

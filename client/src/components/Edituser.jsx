import { Typography, styled, FormControl, FormGroup, Button, InputLabel, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
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
`;

const defaultValue = {
  title: '',
  author: '',
  link: '',
  context: ''
};

const Edituser = () => {
  const {backColor}=useMyContext();
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();


  useEffect(() => {
    loaduserdetails();
    // eslint-disable-next-line
  }, []);

  const loaduserdetails = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const edituserdetails = async () => {
    await editUser(user, id);
    navigate('/all');
  };

  return (
    <div style={{ background:`${backColor?backColor : "white"}`, height: '100vh', width: '100vw' }}>
      <Container>
        <Typography variant="h3">Update Post</Typography>
        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="title"/>
        </FormControl>
        <FormControl>
          <InputLabel>Author</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='author' />
        </FormControl>
        <FormControl>
          <InputLabel>Image Link (optional)</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='link' />
        </FormControl>
        <FormControl>
          <InputLabel>Context</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='context' />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => edituserdetails()}>UPDATE</Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default Edituser;

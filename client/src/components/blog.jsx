import { Button, styled, Typography } from '@mui/material';
import { getUser } from '../service/api';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMyContext } from "../context/Context";

const Blog = styled('div')({
  width: '90%',
  top: '110px',
  marginLeft: '90px',
  position: 'absolute',
  background: 'white',
  '@media (max-width: 768px)': {
    width: '100%',
    marginLeft: '0',
    top: '0',
    position: 'static',
    padding: '20px',
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line
  }, []);

  const getAllUser = async () => {
    let response = await getUser(id);
    setUsers(response.data);
  };

  const { backColor } = useMyContext()

  return (
    <div style={{ background:`${backColor?backColor : "white"}`, height: '100vh', width: '100vw' }}>
    <Blog>
      {users.map((user) => (
        <div key={user._id} style={{ marginBottom: '40px' }}>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>{user.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginLeft: '5px' }}>
            By {user.author}
          </Typography>
          <center>{user.link && (
            <img src={user.link} alt="" style={{ width: '75%', height: 'auto', marginTop: '20px' }} />
          )}</center>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            {user.context}
          </Typography><br/>
         <center><Button variant='contained' component={Link} to='/'>Back</Button></center>
        </div>
      ))}
    </Blog>
    </div>
  );
};

export default AllUsers;

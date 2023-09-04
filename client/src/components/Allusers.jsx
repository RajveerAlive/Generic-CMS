import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from "../context/Context";


const Allusers = () => {
  const { tableName1, tableName2, tableName3, tableName4, backColor } = useMyContext();
  const { compColor } = useMyContext();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const StyledTable = styled(Table)({
    width: '85%',
    top: '75px',
    marginLeft: '120px',
    position: 'absolute',
    background: 'white',

    '@media (max-width: 768px)': {
      width: '100%',
      marginLeft: '0',
      top: '0',
      position: 'static',
    }
  });

  const deleteUserdetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const Thead = styled(TableRow)`
    background: ${compColor ? compColor : "#75CCEC"};

    & > th {
      color: white;
      font-weight: bold;
      font-size: 18px;
    }
  `;

  const Tbody = styled(TableRow)`
    & > td {
      font-size: 16px;
    }
  `;
  const TransparentButton = styled(Button)`
    background-color: paleblue;
    color: white;
    &:hover {
      background-color: transparent;
    }
  `;

  return (
    <div style={{ background: `${backColor ? backColor : "white"}`, height: '100vh', width: '100vw' }}>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>{tableName1 ? tableName1 : "Title"}</TableCell>
            <TableCell>{tableName2 ? tableName2 : "Author"}</TableCell>
            <TableCell>{tableName3 ? tableName3 : "Image"}</TableCell>
            <TableCell>{tableName4 ? tableName4 : "Preview"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Tbody key={user._id}>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.author}</TableCell>
              <TableCell>
                {user.link ? (
                  <img src={user.link} alt="" style={{ width: '100px', height: 'auto' }} />
                ) : (
                  'No image'
                )}
              </TableCell>
              <TableCell>
                {user.context ? (
                  'Context Filled'
                ) : (
                  'No Context Filled'
                )}
              </TableCell>
              <TableCell><TransparentButton variant='contained' component={Link} to={`/edit/${user._id}`}>Update</TransparentButton></TableCell>
              <TableCell><Button variant='contained' color='secondary' onClick={() => deleteUserdetails(user._id)}>Delete</Button></TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Allusers;

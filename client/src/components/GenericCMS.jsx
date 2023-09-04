import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { getUsers } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from "../context/Context";

const GenericCMS = () => {
  const { tableName1, tableName2, tableName4, backColor } = useMyContext();
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
    width: '80%',
    top: '100px',
    marginLeft: '140px',
    position: 'absolute',
    background: 'white',

    '@media (max-width: 768px)': {
      width: '100%',
      marginLeft: '0',
      top: '0',
      position: 'static',
    },
  });

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
      font-size: 18px;
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
            <TableCell>{tableName4 ? tableName4 : "Preview"}</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Tbody key={user._id}>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.author}</TableCell>
              <TableCell>
                <TransparentButton variant='contained' component={Link} to={`/blog/${user._id}`}>Know it!</TransparentButton>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default GenericCMS;

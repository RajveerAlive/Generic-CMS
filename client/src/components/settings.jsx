import React, { useState } from 'react';
import { styled,Table, TableBody, TableRow, TableCell, TableHead, Input, Select, MenuItem } from '@mui/material';
import { useMyContext } from "../context/Context";


const StyledTable = styled(Table)({
  height: "auto",
  width: '70%',
  top:'200px',
  marginLeft:'15%',
  position:'absolute',
  background: "white",

  '@media (max-width: 768px)': {
    width: '90%',
    marginLeft: '5%',
    top: '100px',
  },
});

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const Settings = () => {
  const {
    /**navbarSubM,
    handleNavbarSubMChange**/
    MLogo,
    handleLogoChange,
    backColor,
    handleBackgroundChange,
    tableName1,
    tableName2,
    tableName3,
    tableName4,
    navbarSubL,
    navbarSubR,
    navbarName,
    navbarNameColor,
    handleCompColorChange,
    compColor,
    navbarColor,
    handleNavbarSubLChange,
    handleNavbarSubRChange,
    handleNavbarNameChange,
    handleNavbarNameColorChange,
    handleNavbarColorChange,
    handletablename1Change,
    handletablename2Change,
    handletablename3Change,
    handletablename4Change
  } = useMyContext();

  const [selectedDropdown, setSelectedDropdown] = useState('');

  const Thead = styled(TableRow)`
    background: ${compColor ? compColor : "#75CCEC"};
    & > th {
      color: black;
      font-size: 20px;
    }
  `;

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const renderTablePart = () => {
   if (selectedDropdown === 'name') {
      return (
        <>
          <Tbody>
            <TableCell>Logo</TableCell>
            <TableCell>
              <Input value={MLogo} onChange={handleLogoChange} placeholder='Give URL'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Main Name</TableCell>
            <TableCell>
              <Input value={navbarName} onChange={handleNavbarNameChange} placeholder='Generic CMS'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Sub Name-1</TableCell>
            <TableCell>
              <Input value={navbarSubL} onChange={handleNavbarSubLChange} placeholder='Create Post'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Sub Name-2</TableCell>
            <TableCell>
              <Input value={navbarSubR} onChange={handleNavbarSubRChange} placeholder='Edit Posts'/>
            </TableCell>
          </Tbody>
          {/**<Tbody>
            <TableCell>Navbar Sub Name-3</TableCell>
            <TableCell>
              <Input value={navbarSubM} onChange={handleNavbarSubMChange} placeholder='BMR'/>
            </TableCell>
          </Tbody>**/}

        </>
      );
    } else if (selectedDropdown === 'color') {
      return (
        <>
          <Tbody>
            <TableCell>Background Color</TableCell>
            <TableCell>
              <Input value={backColor} onChange={handleBackgroundChange} />
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Color</TableCell>
            <TableCell>
              <Input value={navbarColor} onChange={handleNavbarColorChange} />
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Name Color</TableCell>
            <TableCell>
              <Input value={navbarNameColor} onChange={handleNavbarNameColorChange} />
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Table header Color</TableCell>
            <TableCell>
              <Input value={compColor} onChange={handleCompColorChange} />
            </TableCell>
          </Tbody>
          
        </>
      );
    } else if (selectedDropdown === 'subnames') {
      return (
        <>
          <Tbody>
            <TableCell>Table Name change-1</TableCell>
            <TableCell>
              <Input value={tableName1} onChange={handletablename1Change} placeholder='Title'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Table Name Change-2</TableCell>
            <TableCell>
              <Input value={tableName2} onChange={handletablename2Change} placeholder='Author'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Table Name Change-3</TableCell>
            <TableCell>
              <Input value={tableName3} onChange={handletablename3Change} placeholder='Image'/>
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Table Name Change-4</TableCell>
            <TableCell>
              <Input value={tableName4} onChange={handletablename4Change} placeholder='Preview'/>
            </TableCell>
          </Tbody>
          
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={{ background:`${backColor?backColor : "white"}`, height: '100vh', width: '100vw' }}>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Components</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          <Tbody>
            <TableCell>Options</TableCell>
            <TableCell>
              <Select value={selectedDropdown} onChange={handleDropdownChange}>
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="name">Navbar</MenuItem>
                <MenuItem value="color">Colors</MenuItem>
                <MenuItem value="subnames">Table Head Names</MenuItem>
              </Select>
            </TableCell>
          </Tbody>
          {renderTablePart()}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Settings;

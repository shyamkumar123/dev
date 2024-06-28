import React, { useState } from 'react';
import styled from 'styled-components';
import {Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardActionArea } from '@mui/material';
const Container = styled.div`
  padding: 20px;
`;
const Team = ({ teams }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    position="relative"
    minHeight="100vh"
    bgcolor="#f5f5f5"
    p={1}
  >
    <TextField
      label="Search Teams"
      variant="standard"
      margin="dense"
      property='100vh'
      value={searchTerm}
      onChange={handleSearch}
    />
    <TableContainer component={Card}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Team Name</TableCell>
            <TableCell>Team Lead</TableCell>
            <TableCell>Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTeams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.lead}</TableCell>
              <TableCell>{team.members.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
};

export default Team;

import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import { getuser, deleteuser } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Styledtable = styled(Table)`
  width: 100%;
  margin: 50px auto 0 auto;
`;

const Thread = styled(TableRow)`
  background: black;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const Alluser = () => {
  const [users, setUsers] = useState([]); // renamed to users for clarity

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getuser();
    setUsers(response.data);
  };

  const deleteuserdetails = async (id) => {
    await deleteuser(id);
    getUserDetails();
  };

  return (
    <Styledtable>
      <TableHead>
        <Thread>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell> 
        </Thread>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <Tbody key={user.id}>
            <TableCell>{index + 1}</TableCell> 
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained"
               style={{ marginRight: 10 }}
                component={Link}
                to={`/Edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteuserdetails(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </Styledtable>
  );
};

export default Alluser;

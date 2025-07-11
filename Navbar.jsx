import {AppBar,Toolbar,Typography,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)`   //here small h se beware as it is treated as html tag
background-color:BLACK;
`
const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
`


const Navbar =() =>
{

    return(
     <Header position="static">
         <Toolbar>
               <Tabs to="/">CRUD APPLICATION</Tabs>
                <Tabs to="/add">ADD USER</Tabs>
                 <Tabs to ="/all">ALL USERS</Tabs>
         </Toolbar>
     </Header>
    
    );
}
export default Navbar;
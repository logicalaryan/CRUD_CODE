import {FormControl, FormGroup, Input,InputLabel,Typography,Button,styled} from "@mui/material";
import{useState} from 'react';
import{adduserapi} from '../service/api';
import{useNavigate}  from 'react-router-dom';//when clicked on add user it will take you to theh

const Containedd=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;

& > div {
margin-top:20px;
}`

const InitialValus =
{
name:'',
username:'',
email:'',
phone:''
}

const AdduserComponent=() =>
{
    const[user,setUser]= useState(InitialValus);//usestate is like a box and if we input something 
    // that gets stored in the user and setuser is like for replacing the old with the new
   
    const navigate=useNavigate();

    const onValueChange = (e)=>
    {
    console.log(e.target.name,e.target.value)//here e.target.value means e-messenger target-which box value-what you typed 
   //hey messenger what is being typed in that particular box

    setUser({...user,[e.target.name]:e.target.value})//1.key-e.target.name ande.target.value-e.target.value    //2.here the key and value combination is used to store the values in objects
    }//whenever we want to use key as variable we use double square brackets./*here user details are being stored*/
   console.log(user)
 
const adduserdetails = async() =>//doubt
 {
await adduserapi(user);
 navigate('/all'); 
 }


return(
<Containedd>
  <Typography variant="h5">Add user</Typography>
  <FormControl>
     <InputLabel>Name</InputLabel>
     <Input onChange={(e)=>onValueChange(e)}name="name" />   {/* name helps to differentiate what text belongs to what object */}
 </FormControl>

  <FormControl>
    <InputLabel>Username</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="username" />
  </FormControl>
  
  <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="email"/>
  </FormControl>
  
  <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="phone" />
   </FormControl>
  
  <FormControl>
  <Button onClick={()=>adduserdetails()}variant="contained">Add User</Button>
  </FormControl>
  
</Containedd>

)

}
export default AdduserComponent;
import { FormControl, FormGroup, Input,InputLabel,Typography,Button,styled} from "@mui/material";
import{useState,useEffect} from 'react';

import{useNavigate,useParams}  from 'react-router-dom';
import{getusers,editusers}  from'../service/api';
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

const Edituser=() =>
{
    const[user,setUser]= useState(InitialValus);
   const navigate=useNavigate();
   const{id}=useParams();
   
 useEffect(() => {
    getSingledata();
  }, []);
  const getSingledata = async () => {
      let response = await getusers(id);
     setUser(response.data);
    };

    const onValueChange = (e)=>
    {
    console.log(e.target.name,e.target.value)
   
    setUser({...user,[e.target.name]:e.target.value})//1.key-e.target.name ande.target.value-e.target.value    //2.here the key and value combination is used to store the values in objects
    }//whenever we want to use key as variable we use double square brackets./*here user details are being stored*/
   console.log(user)
 
const adduserdetails = async() =>//doubt
 {
await editusers(user,id);
 navigate('/all'); 
 }


return(
<Containedd>
  <Typography variant="h5">Edit user</Typography>
  <FormControl>
     <InputLabel>Name</InputLabel>
     <Input onChange={(e)=>onValueChange(e)}name="name"value={user.name} />   {/* name helps to differentiate what text belongs to what object */}
 </FormControl>

  <FormControl>
    <InputLabel>Username</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="username"value={user.username}/>
  </FormControl>
  
  <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="email"value={user.email}/>
  </FormControl>
  
  <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={(e)=>onValueChange(e)}name="phone"value={user.phone} />
   </FormControl>
  
  <FormControl>
  <Button onClick={()=>adduserdetails()}variant="contained">Edit User</Button>
  </FormControl>
  
</Containedd>

)

}
export default Edituser;
//step1.Click the edit button on all users
//step2.fill the already details in edit form 
//step3.filled details ko edit krne ke liye we do a api call using the library function put
//step4.now edit details ko json mae wapas send krna hai line no.46 se update hoga 

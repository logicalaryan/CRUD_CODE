import axios from 'axios'


const API_URL='http://localhost:3002/users';

export const adduserapi=async(data) =>
    {
    try{
    return await axios.post(API_URL,data);//send the data to json server
    } 
    catch(error)
    {
    console.log('error while calling',error.message);
    }
}

export const getuser =async() =>//gets all of the user data for displaying
{
try{
  return await axios.get(API_URL);
}
catch(error)
{
console.log('error is called',error.message);
   return { data: [] };
}
}

export const getusers =async(data) => {//single data user
try{
return await axios.get(`${API_URL}/${data}`);
}
catch(error)
{
  console.log('error is called',error.message);
}
}

export const editusers=async(data,id)=>{//api call
  try{
return await axios.put(`${API_URL}/${id}`,data);
  }
  catch(Error)
  {
    console.log('error is called',Error.message);
}
}

export const deleteuser=async(id)=>{
  try{
return await axios.delete(`${API_URL}/${id}`);
  }
  catch(Error)
  {
    console.log('there is some error',Error.message);
  }
}
;
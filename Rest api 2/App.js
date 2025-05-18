import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const getAllUsers = async ()=> {
    const res = await axios.get('http://localhost:5293/users');
    console.log("hello:",res.data)
  };
  const getUserById = async ()=>{
     const res = await axios.get('http://localhost:5293/users/get?id=12');
    console.log(" res:", res.data); 
  };
  const AddUser = async ()=>{ 
      const res = await  axios.post('http://localhost:5293/users/add',{Id:1,phone:345} );
      console.log(res.data);
  };
  const DeleteUser = async ()=>{
     const res = await axios.delete( 'http://localhost:5293/users/delete?id=1');
     console.log("res:", res.data); 
  };
  const UpdateUser = async ()=>{
    const res = await axios.put('http://localhost:5293/user/update?id=22'); 
    console.log("res:", res.data);
    
  };
  return (
    <div className='MyApp' style ={{textAlign:'center',marginTop:'15px'}}>
      <h2>User Dashboard</h2>
      <div style ={{textAlign:'center',marginTop:'15px'}}>
        <button type ="button" style={{backgroundColor:'black',color:'white',fontsize:'15px', borderRadius:'5px'}} onClick={getAllUsers} >Get All users</button>
        <button type ="button"style={{backgroundColor:'black',color:'white',fontsize:'15px', borderRadius:'5px'}} onClick={getUserById} >Get User By Id</button>
        <button type ="button"style={{backgroundColor:'black',color:'white',fontsize:'15px', borderRadius:'5px'}} onClick={AddUser} >Add user</button>
        <button type ="button"style={{backgroundColor:'black',color:'white',fontsize:'15px', borderRadius:'5px'}} onClick={DeleteUser} >Delete User</button>
        <button type ="button" style={{backgroundColor:'black',color:'white',fontsize:'15px', borderRadius:'5px'}}onClick={UpdateUser} >Update User</button>
      </div>
      
    </div>
    
  );
} 
export default App;

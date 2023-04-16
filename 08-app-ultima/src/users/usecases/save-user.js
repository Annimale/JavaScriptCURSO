
import { userModelToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/users"


/**
 * 
 * @param {*} userLike 
 */


export const saveUser= async(userLike)=>{



    const user = new User(userLike);
    if(!user.firstName||!user.lastName)
    throw 'First & last name are required';
    const userToSave= userModelToLocalHost(user);

    
    if(user.id){
       return await updateUser(userToSave)
    }

    const updatedUser= await createUser(userToSave);
    return updatedUser;
}



/**
 * 
 * @param {Like<User>} user 
 */
const createUser=async(user)=>{
const url= `${import.meta.env.VITE_BASE_URL}/users`;
const res =await fetch (url,{
    method:'POST',
    body: JSON.stringify(user),
    headers:{
        'Content-Type':'application/json'
    }
});

const newUser= await res.json();
console.log({newUser})
return newUser;
}



/**
 * 
 * @param {Like<User>} user 
 */
const updateUser=async(user)=>{
    const url= `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res =await fetch (url,{
        method:'PATCH',
        body: JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    });
    
    const updatedUser= await res.json();
    console.log({updatedUser})
    return newUser;
    }
import {  List,Box,Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import UserListline from './UserListline';
import { getUserData } from '../Services/api.js';
import { useState } from 'react';
import {userState} from '../Services/UserState.js';
import { useSetRecoilState } from 'recoil';

const UserList=styled(Box)`
  min-width: 623px;
  max-width : 623px;
  color:white;
  margin-top:110px;
  margin-left:110px;
;
`
const ListHeading=styled(Typography)`
&&{
  font-weight:500px !important;
  font-size :24px;
  text-align:center;
  padding:8px,10px,8px,10px;
  background-color :#C5DFFF;
  height:70px;
  color:black;
  font-family:Montserrat;
}
`;

function UserLists({userData,setUser}) { 
  
  return (
    <UserList>
    <Box >
      <ListHeading>USERS LIST</ListHeading>
    </Box>

    <List style={{color:"black"}}>

    {userData?.map((user)=>{
      return(
       <div onClick={()=>{
          setUser(user)
          console.log("hello");
        }}>
        <UserListline 
        id={user.id} 
        username={user.profile.username}
        profilepic={user.avatar}
      />
      </div>
      )
    })};

    </List>
    </UserList>
    
  )
}

export default UserLists
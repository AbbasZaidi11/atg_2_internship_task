import React from 'react';
import styled from 'styled-components';

const ProfilePic=styled('img')({
    marginTop:10,
    width: 138,
    height: 138,
    borderRadius:"50%",
    marginLeft:"35%",
   
    
});
function UserImage(props) {
  return (
    <ProfilePic src={props.url}/>
  )
}

export default UserImage
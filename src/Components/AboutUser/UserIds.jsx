import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const InfoDetail=styled(Box)`

padding:5px;
align-item:center;
`
const InfoLabel=styled(Typography)`
`
const Info=styled(Typography)`
min-width:304px;
min-height:31px;
background-color:#DBDBDB;
border:1px;
radius:4px;


`
function UserIds(props) {
  return (
    <InfoDetail>
    <InfoLabel style={{color:'black'}}>Full Name</InfoLabel>
    <Info style={{color:'black'}}>{props.fName} {props.lName}</Info>
    <InfoLabel style={{color:'black'}}>Job Title</InfoLabel>
    <Info style={{color:'black'}}>{props.jName}</Info>
    <InfoLabel style={{color:'black'}}>Email</InfoLabel>
    <Info style={{color:'black'}}>{props.eMail}</Info>
    </InfoDetail>
  )
}

export default UserIds
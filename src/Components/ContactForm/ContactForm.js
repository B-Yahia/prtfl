import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

export default function ContactForm() {
    const baseURL = "https://portfolio-app-spring.herokuapp.com/v1/add";
    
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [msg,setMsg]= useState("")

    const dirha = async () =>{
        
        console.log(name,email,msg)
        await axios.post(baseURL,{
            name:name,
            email:email,
            message:msg
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
    }
  
    
  return (
    <div id='contact-me'>
        <Stack direction="column"  spacing={3} justifyContent="center" alignItems="flex-start" >

                        <Typography variant="h6">Send me a message </Typography>
                        <Stack direction={{ xs:"column" ,sm:"row" }} spacing={3} justifyContent="flex-start" alignItems="flex-start">
                            <TextField size="small" id="outlined-basic" label="Name" variant="outlined" helperText="Please enter your fullname"
                            onChange={(event)=>{setName(event.target.value)}}
                            value={name}
                            />
                            <TextField size="small" id="outlined-basic" label="Email address" variant="outlined" helperText="Please enter your email"
                            onChange={(event)=>{setEmail(event.target.value)}}
                            value={email}
                            />
                        </Stack>
                        <Stack direction={{ xs:"column" ,sm:"row" }} spacing={3} justifyContent="flex-start" alignItems="flex-start">
                            <TextField  size="small" multiline rows={4} id="outlined-multiline-static"  helperText="Please enter your message here"
                            onChange={(event)=>{setMsg(event.target.value)}}
                            value={msg}
                            />
                            <Button variant="contained" disableElevation type="submit" size="small" onClick={dirha}>Send</Button>
                        </Stack>    
        </Stack>
    </div>
  )
}

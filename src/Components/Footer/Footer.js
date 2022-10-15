import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import "./Footer.css"
import "../Neumo.css"

function Footer(){
    return(
        <div>
            <Grid container direction={{ xs:"column" ,md:"row" }}
            justifyContent="center"
            alignItems="flex-start"
            className="footer-section nano1">
                <Grid item className="nano" xs={12} md={6}>
                    <Stack direction="column" spacing={3} justifyContent="flex-end">
                        <Typography variant="h6">My contact info</Typography>
                        <Stack direction="column" spacing={1}>
                            <Typography variant="subtitle2">+372 5808 7319</Typography>
                            <Typography variant="subtitle2">Yahiabahhous@gmail.com</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item className="nano" xs={12} md={6}>
                    <Stack direction="column"  justifyContent="flex-start">
                        <Typography variant="h6">Send me a message </Typography>
                        <Stack direction={{ xs:"column" ,sm:"row" }} spacing={3}>
                            <TextField size="small" id="outlined-basic" label="Name" variant="outlined" helperText="Please enter your fullname"/>
                            <TextField size="small" id="outlined-basic" label="Email address" variant="outlined" helperText="Please enter your email"/>
                        </Stack>
                        <Stack direction={{ xs:"column" ,sm:"row" }} spacing={3}>
                            <TextField size="small" id="outlined-multiline-static" />
                            <Button variant="contained" disableElevation>Send</Button>
                        </Stack>
                        
                    </Stack>
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer;
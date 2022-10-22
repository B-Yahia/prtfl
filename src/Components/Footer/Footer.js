import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import logoPrtfl from "../../Images/Logo1.png"
import "./Footer.css"
import "../Neumo.css"
import ContactForm from "../ContactForm/ContactForm";

function Footer(){
    return(
        <div>
            <Grid container direction={{ xs:"column" ,md:"row" }}
            justifyContent={{ xs:"center" , md : "space-between"}}
            alignItems="flex-start"
            className="footer-section">
                <Grid item xs={12} className="footer-logo">
                <img src={logoPrtfl} className="logo-1 "/>
                </Grid>
                <Grid item  xs={12} md={6} className="footer-item">
                    <Stack direction="column" spacing={3} justifyContent="flex-end" alignItems="flex-start"  >
                        <Typography variant="h6" >My contact info</Typography>
                        <Stack direction="column" spacing={1} justifyContent="center" alignItems="flex-start">
                            <Typography variant="subtitle2">Phone Number : +372 5808 7319</Typography>
                            <Typography variant="subtitle2">Email Address : Yahiabahhous@gmail.com</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item  xs={12} md={6} className="footer-item">
                    <ContactForm/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer;
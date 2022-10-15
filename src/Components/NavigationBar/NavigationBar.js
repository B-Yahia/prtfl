import { Grid, Typography } from "@mui/material";
import Menu from "../Menu/Menu";
import "./NavigationBar.css"
import "../Neumo.css"
import "../LogoAnimations.css"

function NavigationBar(){
    return(
        <div className="nav-bar">
            <Grid container spacing={3} justifyContent={{ xs:"center" , md : "space-between"}} alignItems="center" 
            columns={3}
            direction={{ sx:"column" , sm:"row"}}
            >
                <Grid item  >
                    <Typography variant="h6" className="logo-1 neumo logo">THE FULLSTACK GUY</Typography>
                </Grid>
                <Grid item  >
                    <Menu/>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavigationBar;
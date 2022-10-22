import { Grid, Typography } from "@mui/material";
import Menu from "../Menu/Menu";
import logoPrtfl from "../../Images/Logo1.png"
import "./NavigationBar.css"
import "../Neumo.css"


function NavigationBar(){
    return(
        <div className="nav-bar">
            <Grid container justifyContent={{ xs:"center" , md : "space-between"}} alignItems="center" 
            direction={{ sx:"column" , sm:"row"}}
            >
                <Grid item xs="auto">
                    <img src={logoPrtfl} alt="The fullstack guy Logo" className="logo-1 neumo "/>
                </Grid>
                <Grid item  >
                    <Menu/>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavigationBar;
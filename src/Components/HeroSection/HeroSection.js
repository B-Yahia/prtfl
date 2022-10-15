import { Grid, Typography } from "@mui/material";
import mebg from "../../Images/me-bg.png"
import "./HeroSection.css"
import "../Neumo.css"

function HeroSection(){
    return(
        <div>
            <Grid container className="heroSection" >
                <Grid item xs={12} md={6} className="hero-text">
                    <Typography variant="h2" className="txt-hero neumo">Hi my name is Yahya and I am a FullStack</Typography>
                </Grid>
                <Grid item xs={12} md={6} className="hero-image">
                    <img src={mebg} className="img-hero " />
                </Grid>
            </Grid>
        </div>
    )
}

export default HeroSection;
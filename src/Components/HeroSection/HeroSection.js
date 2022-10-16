import { Grid, Typography } from "@mui/material";
import mebg from "../../Images/me-bg.png"
import "./HeroSection.css"
import "../Neumo.css"
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";

function HeroSection(){
    const skills = ["Web Developper", "Front end", "Back end " ,"Happy to help you"];
    const [count, setCount] = useState(0);
    const [text,setText] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            changeSkill();
          }, 1500); }, [text]);
        
    function changeSkill(){
        if(count<skills.length){
            setCount(count+1)
            setText(skills[count])
        }else{
            setCount(0)
            setText("")
        }
    }

    return(
        <div>
            <Grid container className="heroSection" direction={{ xs:"column", md :"row"}} justifyContent={{ xs:"center" , md : "space-between"}}>
                <Grid item  className="hero-text">
                    <Stack className="neumo ">
                        <Typography variant="h4" className="txt-hero ">Hi !</Typography>
                        <Typography variant="h4" className="txt-hero "> My name is Yahya and I am </Typography>
                        <Typography variant="h3" className="txt-hero-1">{text}</Typography>
                    </Stack>
                </Grid>
                <Grid item  className="hero-image">
                    <img src={mebg} className="img-hero" />
                </Grid>
            </Grid>
        </div>
    )
}

export default HeroSection;
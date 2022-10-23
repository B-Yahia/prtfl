import { Grid } from "@mui/material";
import mebg from "../../Images/me-bg.png"
import "./HeroSection.css"
import "../Neumo.css"
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";

function HeroSection(){
    const skills = ["Web Developper", "Front end", "Back-end" ,"Happy to help you"];
    const [count, setCount] = useState(0);
    const [text,setText] = useState("Java softwarep");
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
            setText("Fullstack")
        }
    }

    return(
        <div>
            <Grid container className="heroSection" direction={{ xs:"column", md :"row"}}
             justifyContent={{ xs:"center" , md : "space-between"}}
             alignItems="center"
             >
                <Grid item  className="hero-text">
                    <Stack className="neumo txt-hero-container " spacing={2} alignItems="center" justifyContent="center">
                        <p className="txt-hero title">HI !</p>
                        <p className="txt-hero title"> MY NAME IS YAHIA and I AM </p>
                        <p className="txt-hero-1">{text}</p>
                    </Stack>
                </Grid>
                <Grid item  className="hero-image">
                    <img src={mebg} className="img-hero"  alt="me"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default HeroSection;
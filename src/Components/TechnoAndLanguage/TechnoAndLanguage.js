import { Avatar, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import htmlIcon from "../../Images/techno/html.png"
import javaIcon from "../../Images/techno/java.png"
import javaScriptIcon from "../../Images/techno/java-script.png"
import gitHubIcon from "../../Images/techno/github.png"
import reactIcon from "../../Images/techno/atom.png"
import bootstrapIcon from "../../Images/techno/bootstrap.png"
import "../Neumo.css"
import "./TechnoAndLanguage.css"

export default function TechnoAndLanguage() {
    return(
        <div>
            <Grid container className="techno-section"
                            
                direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item  className="techno-container" >
                    <Typography variant="h4" className="section-title neumo">Languages and technologies</Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Stack 
                direction={{ sm: 'column', md: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                className="techno-content"
                >
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={htmlIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">HTML and CSS</Typography>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={javaScriptIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">Javascript</Typography>
                        <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={reactIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">React JS</Typography>
                        <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={javaIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">Java</Typography>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={javaIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">Spring frameword</Typography>
                        <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={gitHubIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">Github</Typography>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" className="techno-content-item">
                        <Avatar className="stack-content" alt="Remy Sharp" src={bootstrapIcon} variant="square"/>
                        <Typography variant="body2" className="techno-content-item-text">Material UI &amp; Bootstrap</Typography>
                        <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
                    </Stack>
                    
                    
                    
                    
                </Stack>
            
            </Grid>
        </div>
    )
    
}
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import webDev from "../../Images/web-dev.png"
import webDis from "../../Images/web-design.png"
import webMar from "../../Images/web-Marketing.png"
import webTra from "../../Images/web-translation.png" 
import webSeo from "../../Images/web-seo.png" 
import "../Neumo.css"
import "./Services.css"



function Services() {
    return(
        <div className="service-section">
            <Grid container className="service-container"  justifyContent="center">
                <Grid item >
                    <Typography variant="h4" className="service-title neumo">Services</Typography>
                </Grid>
            </Grid>   
            <Grid container className="services-cards" justifyContent="space-around" alignItems="center"  spacing={2}>
                <Grid item >
                    <Accordion >
                        <AccordionSummary>
                            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center">
                                <Avatar className="stack-content" alt="Remy Sharp" src={webDev} variant="square"/>
                                <Typography className="stack-content" >Web Devlopment</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2"> The description of the service</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item >
                    <Accordion>
                        <AccordionSummary>
                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center">
                                <Avatar className="stack-content" alt="Remy Sharp" src={webDis} variant="square"/>
                                <Typography className="stack-content" >UI/UX design</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2"> The description of the service</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item >
                    <Accordion>
                        <AccordionSummary>
                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center">
                                <Avatar className="stack-content" alt="Remy Sharp" src={webMar} variant="square"/>
                                <Typography className="stack-content" >Web Marketing</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2"> The description of the service</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item >
                    <Accordion>
                        <AccordionSummary>
                            <Stack  direction={{ xs: 'column', md: 'row' }} alignItems="center">
                                <Avatar className="stack-content" alt="Remy Sharp" src={webTra} variant="square"/>
                                <Typography className="stack-content" >Content translation</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2"> The description of the service</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item >
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary>
                            <Stack  direction={{ xs: 'column', md: 'row' }}  alignItems="center">
                            <Avatar className="stack-content" alt="Remy Sharp" src={webSeo} variant="square"/>
                            <Typography className="stack-content">SEO Optimization</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2"> The description of the service</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Services;
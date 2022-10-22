import { Divider, Grid, Stack, Typography} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "../Neumo.css"
import "./Menu.css"

function Menu(){
    return(
        
            
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}
            
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            className="neumo options-menu"
            spacing={3}
            >
                
                <Typography variant="h6 " className=" menu-opt"><Link to={"/"} style={{textDecoration: 'none' , color:'black'}}>Home</Link></Typography>
                <Typography variant="h6 " className=" menu-opt"><Link to={"/about"} style={{textDecoration: 'none' , color:'black'}}>About me</Link></Typography>
                <Typography variant="h6 " className=" menu-opt"><AnchorLink href='#contact-me' style={{textDecoration: 'none' , color:'black'}}>Contact me</AnchorLink></Typography>
                {/* <Typography variant="h6 " className=" menu-opt">Login</Typography> */}
            </Stack>
       
    )
}

export default Menu;
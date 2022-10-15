import { Divider, Grid, Stack, Typography} from "@mui/material";
import "../Neumo.css"
import "./Menu.css"

function Menu(){
    return(
        
            
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="flex-end"
            alignContent="center"
            className="neumo options-menu"
            alignItems="center" 
            >
                
                <Typography variant="h6 " className="neumo1 menu-opt">Home</Typography>
                <Typography variant="h6 " className="neumo1 menu-opt">About me </Typography>
                <Typography variant="h6 " className="neumo1 menu-opt">Contact me</Typography>
            </Stack>
       
    )
}

export default Menu;
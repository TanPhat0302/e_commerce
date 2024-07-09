import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <Container component={Paper} sx={{height:0}}>
            <Typography gutterBottom variant="h3"> Can't find what you lookin for</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'> Go back to shop</Button>
        </Container>
    )
}
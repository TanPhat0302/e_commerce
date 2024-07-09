import { Alert, AlertTitle, Button, ButtonGroup, Container, List, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage (){
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    
    function getValidationError() {
        agent.TestErrors.getValidationError()
        .then(()=> console.log('should not see this'))
        .catch(error => setValidationErrors(error))
    }
    return (
        <Container>
            <Typography gutterBottom variant="h2"> Errors for testing purpose</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={() => agent.TestErrors.get400error().catch(error => console.log(error))}>Test 400</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get401error().catch(error => console.log(error))}>Test 401</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get404error().catch(error => console.log(error))}>Test 404</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get500error().catch(error => console.log(error))}>Test 500</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.getValidationError().catch(error => console.log(error))}>Test validation</Button>
            </ButtonGroup>
            {validationErrors.length > 0 &&
            <Alert severity="error">
                <AlertTitle>Validation Errors</AlertTitle>
                <List>
                    {validationErrors}
                </List>
                </Alert>}
        </Container>
    )
}
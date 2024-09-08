import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SocialAuth from './social';
const LoginForm = ( ) => {
    return <Box
    width='100%'
    component="form"
    noValidate={true}
    autoComplete="on"
  > 
    <div className='content-center'>
        <TextField
            sx={{
                marginTop: '2rem'
            }}
            color='secondary'
            variant='outlined'
            fullWidth
            error={false}
            id="outlined-error-helper-text"
            label="Correo electronico"
        />
        <TextField
            color='secondary'
            variant='outlined'
            sx={{mt: 2}}
            fullWidth
            error={false}
            id="outlined-error-helper-text"
            label="Contraseña"  
        />
        <a href="#" className="c-secondary fz-05">¿Olvidaste tu contraseña?.</a>
        <Button variant="contained" fullWidth sx={{mt: 2}} color='primary'>Ingresar</Button>
        <SocialAuth/>
        <Box className="mt-2" display='flex' justifyContent='center'>
            <p className="c-secondary mr-05">¿No tienes una cuenta?</p>
            <a href='#' className="c-primary">prueba gratis</a>
        </Box>
    </div>
    
  </Box>
}
export default LoginForm;
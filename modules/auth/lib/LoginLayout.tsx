'use client';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import LogoRevizora from '@/public/brand/logo_primary.png';
import LoginForm from '../components/login';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450,
    minWidth: 300,
    bgcolor: 'white',
    border: '0px solid #000',
    boxShadow: 24,
    p: 3,
    outline: 'none',
    borderRadius: '.5rem'
};
const LoginLayout = () => {
    return <div className="content-center">
        <img width='150px' src={LogoRevizora.src}/>
        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h1 className="fz-2 c-primary mt-2">Bienvenido</h1>
                <span className="c-secondary">Inicia sesión para continuar.</span>
                <LoginForm/>
                
            </Box>
        </Modal>
    </div>
}
export default LoginLayout;
import { FC, useContext } from 'react';
// import { AuthContext } from '../../../utils/context/auth';
import { useAppSelector } from '../../../store/hooks';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import HeaderWrapper from './wrapper';
import Logo from '../logo';

const Header: FC = () => {
    // const { user, logout } = useContext(AuthContext);
    const { isDrawerOpen } = useAppSelector((state: { utils: any; }) => state.utils);
    const navigate = useNavigate();

    return (
        <HeaderWrapper isDrawerOpen={isDrawerOpen}>
            <Box
                onClick={(): void =>
                    navigate('')
                }>
                <Logo width='150px' />
            </Box>
                <Button onClick={logout}>
                    DELOGARE
                </Button>
        </HeaderWrapper>
    );
};

export default Header;

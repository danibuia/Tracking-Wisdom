import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import Wrapper from '../../../../components/common/wrapper/main';
import WithViewWrapper from '../../../../hooks/view-wrapper';

const CommonRouteBase: FC<> = ({ role, redirectPath = '/auth/sign-in' }) => {
    const { isDrawerOpen } = useAppSelector((state) => state.utils);

    if (role === 'nurse' || role === 'doctor') {
        return (
            <Wrapper isDrawerOpen={isDrawerOpen}>
                <Outlet />
            </Wrapper>
        );
    }

    return <Navigate to={redirectPath} replace />;
};

const CommonRoute: FC<RouteProps> = WithViewWrapper<RouteProps>(CommonRouteBase);

export default CommonRoute;

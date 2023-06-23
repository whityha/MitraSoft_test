import { Route, Routes } from 'react-router';

import { ROUTES } from '@/routes';

import Header from '../header';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {ROUTES.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </>
    );
};

export default App;

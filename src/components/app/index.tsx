import { Route, Routes } from 'react-router';

import { ROUTES } from '@/routes';

const App = () => {
    return (
        <Routes>
            {ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default App;

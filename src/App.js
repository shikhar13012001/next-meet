import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Call from './pages/Call';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Loading from './pages/Loading';

const App = () => {
    const { isLoading } = useSelector((state) => state.hackathon);

    if (isLoading) return <Loading />;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:id" element={<Call />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;

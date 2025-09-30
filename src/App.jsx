import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import DeniaCasimiro from './pages/DanKolonay';
import VitaliyDmukhovskyy from './pages/VitaliyDmukhovskyy';
import DanKolonay from './pages/DanKolonay';

const router = createBrowserRouter(
    [
        {path: '/', element: <Home/>},
        {path: "/vitaliy-dmukhovskyy", element: <VitaliyDmukhovskyy />},
        {path: "/denia-casimiro", element: <DeniaCasimiro/>},
        {path: "/dan-kolonay", element: <DanKolonay />},
    ],
    {basename: "/intro-to-react-and-vite"}
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
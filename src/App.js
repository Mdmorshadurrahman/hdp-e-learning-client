import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import About from './components/about/About';
import Software from './components/software/Software';
import Hardware from './components/hardware/Hardware';
import app from './firebase/Firebase.init';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import Login from './components/login/Login';
import Register from './components/register/Register';
const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/', element: <Home /> },
        {
          path: '/software',
          loader: async () => {
            return fetch('https://hdp-e-learning-server.vercel.app/courses')
          },
          element: <Software />
        },
        {
          path: '/hardware',
          loader: async () => {
            return fetch('https://hdp-e-learning-server.vercel.app/courses')
          },
          element: <Hardware />
        },
        {
          path: '/carts/:id',
          loader: ({ params }) => fetch(`https://hdp-e-learning-server.vercel.app/courses/${params.id}`),
          element: <Cart />
        },
        { path: '/about', element: <About /> },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Register />
        }
      ]
    },
    { path: '/*', element: <div className='min-h-screen bg-black text-white flex justify-center items-center font-bold text-5xl'>Sorry, You are in dead-end! Go to -{'>'} <Link to={'/home'} className='text-red-500 bg-white hover:text-green-500 p-2 rounded-md'>Home</Link></div> }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

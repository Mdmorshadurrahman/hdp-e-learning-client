import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import About from './components/about/About';
import Software from './components/software/Software';
import Hardware from './components/hardware/Hardware';

function App() {
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
            return fetch('http://localhost:5000/courses')
          },
          element: <Software />
        },
        {
          path: '/hardware',
          loader: async () => {
            return fetch('http://localhost:5000/courses')
          },
          element: <Hardware />
        },
        {
          path: '/carts/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
          element: <Cart />
        },
        { path: '/about', element: <About /> }
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

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Main from './Router/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        }
      ]
    }
  ]);
  return (
    <div className="max-w-[1540px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>     
    </div>
  );
}

export default App;

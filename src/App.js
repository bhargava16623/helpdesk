import './App.css';
import Body from './Components/Body';
import Dashboard from './Components/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Myticket from './Components/Myticket';
import Newticket from './Components/Newticket';
import { Provider } from 'react-redux';
import store from './Utils/store';



const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>,
      },
      {
        path:'/myticket',
        element:<Myticket/>
      },
      {
        path:'/newticket',
        element:<Newticket/>
      }
    ]
  }
])

function App() {

  return (
        
        <div > 
          <Provider store={store}>
          <Header/>
          <RouterProvider router={appRouter}/>
          </Provider>
        </div>

  );
}

export default App;

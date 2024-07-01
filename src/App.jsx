import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './routes/content/Content';
import Notifications from './routes/content/notification/Notifications';
import Home from './routes/content/home/Home';
import Likes from './routes/content/likes/Likes';
import Basket from './routes/content/basket/Basket';
import Tickets from './routes/content/tickets/Tickets';
import Settings from './routes/content/settings/Settings';
import NotFound from './routes/not-found/NotFound';
import Card_Select from './routes/card_select/Card_Select';
import Burger from './routes/card_select/burger/Burger';
import Dink from './routes/card_select/drink/Drink';
import Desert from './routes/card_select/desert/Desert';
import Noodles from './routes/card_select/noodles/Noodles';
import Single_Food from './routes/single_food/Single_Food';
import Login from './routes/login/Login';

function App() {
  return (  
    <div className='app'>  
      <Routes>
        <Route path="/" element={<Navigate to="/home/card_select/noodles" />} />
        
        <Route path='/' element={<Content />}>
          <Route path='home' element={<Home />} >
            <Route path='card_select' element={<Card_Select />}>
              <Route path='burger' element={<Burger />} />
              <Route path='drink' element={<Dink />} />
              <Route path='desert' element={<Desert />} />
              <Route path='noodles' element={<Noodles />} />
            </Route>
          </Route>
          <Route path='notifications' element={<Notifications />} />
          <Route path='likes' element={<Likes />} />
          <Route path='basket' element={<Basket />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/single-food/:foodId" element={<Single_Food />} />

        <Route path='not-found' element={<NotFound />} />

        <Route path='*' element={<Navigate to='/not-found' />} />
      </Routes>
    </div>
  )
}

export default App;

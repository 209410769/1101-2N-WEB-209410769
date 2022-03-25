import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage_69 from './pages/Homepage_69/Homepage_69';
import ShopTwo_69 from './pages/ShopTwoPage_69/ShopTwoPage_69';
import ContactPage_69 from './pages/ContactPage_69/ContactPage_69';
import SigninPage_69 from './pages/SigninPage_69/SigninPage_69';
import Header_69 from './components/Header/Header_69';
import './App_69.scss';

function App_69 () {
  return (
    <div>
      <BrowserRouter>
        <Header_69 />
        <Switch>
          <Route exact path="/" component={Homepage_69} />
          <Route exact path="/shop_69" component={ShopTwo_69} />
          <Route exact path="/contact_69" component={ContactPage_69} />
          <Route exact path="/signin_69" component={SigninPage_69} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App_69;

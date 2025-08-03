import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import DoctorsList from './components/DoctorsList'
import DoctorProfile from './components/DoctorProfile'
import ConfirmationPage from './components/ConfirmationPage'
import './App.css';

const App = () =>  {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/doctors" component={DoctorsList} />
      <Route exact path="/doctors/:id" component={DoctorProfile}/>
      <Route exact path = "/doctors/:id/book" component = {ConfirmationPage} />
    </Switch>
    </BrowserRouter>
  )
}
export default App;

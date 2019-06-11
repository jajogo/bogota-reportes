import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/Home/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import Footer from './components/layout/Footer';
import CreateReport from './components/reportes/CreateReport';
import contact from './components/layout/contact';
import about from './components/layout/about';
import ShowReports from './components/reportes/ShowReports';
import ReportDetail from './components/reportes/ReportDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/reportes' component={ShowReports}/>
          <Route path='/reporte/:id' component={ReportDetail}/>
          <Route path='/create' component={CreateReport}/>
          <Route path='/contact' component={contact}/>
          <Route path='/about' component={about}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'  
import About from './pages/About'
import Contact from './pages/Contact'
import Default from './pages/Default'
import Home from './pages/Home'
import Projects from './pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


class App extends React.Component{
    render(){
        return(
            <div>
                
                <Router>
                 <Navbar />
                    <Switch>
                        <Route exact path="/" component = {Home} />
                        <Route exact path="/about" component = {About} />
                        <Route exact path="/contact" component = {Contact} />
                        <Route exact path="/projects" component = {Projects} />
                        <Route exact path="/404" component = {Default} />
                        <Redirect to="/404" />
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;
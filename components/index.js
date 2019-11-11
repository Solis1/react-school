import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
import Events from './pages/events';
import EventForm from './pages/event-form';
import Week4 from './pages/week4';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

export const ReactSchoolContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: true};
  }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({isLoggedIn: true});
    }, 400);
  }

  render() {
    return (
      <ReactSchoolContext.Provider value={this.state.isLoggedIn}>
        <style>
          {`
            nav {
              background-color: pink;
              padding: 20px 10px;
            }
            nav a {
              padding: 5px 20px;
            }
            nav a.active{
              background-color: black;
              color: white;
            }
          `}
        </style>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/week4">Week 4</NavLink>
        </nav>
        <Switch>
          <Route path="/week4">
            <Week4 />
          </Route>
          <Route path="/events/:id" component={EventForm}/>
          <Route exact path="/" >
            <Events test="hola"/>
          </Route>
        </Switch>
      </ReactSchoolContext.Provider>
    );
  }
}

const container = document.getElementById('root');
const component = <Router><App /></Router>;
ReactDOM.render(component, container);

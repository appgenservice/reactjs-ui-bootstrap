import React, {Component} from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  loadCPs =()=> {
    const url = (process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://appgenservice.com:9090") +  "/cpm/dashboard";
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({ cps: data })
        })
        .catch(console.log);
 }

    render() {
        return (
            <div className="app">
              <div className="app-header">Charging Point Management</div>
              <Dashboard cps={this.state.cps} reload={this.loadCPs}/>
            </div>
        )
    }

    state = {
        cps: []
    };

    componentDidMount() {
      this.loadCPs();
        // fetch('http://localhost:8080/cpm/dashboard')
        //     .then(res => res.json())
        //     .then((data) => {
        //         this.setState({ cps: data })
        //     })
        //     .catch(console.log)
    }
}

export default App;

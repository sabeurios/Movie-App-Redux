import React from 'react';
import './App.css';
import MoviePage from './Main/main.js';
import Loader from './Loader/loader';


class App extends React.Component {
  
  state = {
    loading: true
  }

  componentDidMount() {
    
  setTimeout(() => {
      this.setState({loading:false})
    },500);
  }

  render(){
    if (this.state.loading) 
      {
        return <Loader loading={this.state.loading}/>;
      }
    return (
      <div className="App">
          <MoviePage />
      </div>
    );
  }  
}

export default App;

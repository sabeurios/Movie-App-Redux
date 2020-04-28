import React from "react";
import "./App.css";
import Loader from "./Loader/loader";
import {Route} from "react-router-dom"
import DescriptionMovie from "./components/description-movie";
import MoviesMainPage from "./Main/main";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  render() {
    if (this.state.loading) {
      return <Loader loading={this.state.loading} />;
    }
    return (
      <div className="App">
        <MoviesMainPage />
        <Route path="/:id" component={DescriptionMovie} />
        <Route exact path="/" component={MoviesMainPage} />
      </div>
    );
  }
}

export default App;

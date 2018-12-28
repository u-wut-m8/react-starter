import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCb-5MMnOLPtdt3shJ3NaG9hf-l0KZCZkg";

YTSearch({key: API_KEY, term: "potato"}, function (data) {
  console.log(data);
});

//Create a new Component. This component should produce some HTML.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: "potato"}, videos => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}
// const App = () => <div><SearchBar/></div>;

//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCb-5MMnOLPtdt3shJ3NaG9hf-l0KZCZkg";

//Create a new Component. This component should produce some HTML.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("potato")
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// const App = () => <div><SearchBar/></div>;

//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

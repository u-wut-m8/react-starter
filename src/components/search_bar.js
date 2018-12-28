import React,  {Component} from "react";

// const SearchBar = () => <input/>;
class SearchBar extends Component {
  /*Class Based Component class requires derived class to override render().*/
  render () {
    return <input onChange={event => console.log(event.target.value)}/>;
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;

import React, {Component} from "react";

// const SearchBar = () => <input/>;
class SearchBar extends Component {
  /*Whenever we define a class based Component, a state object is automatically created with it.*/
  constructor(props) {
    super(props);
    this.state = {term: "Starting value!"};                      //Initialize state object before using it.
  }

  /*Class Based Component class requires derived class to override render().*/
  render () {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;

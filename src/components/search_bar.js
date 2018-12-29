import React, {Component} from "react";

// const SearchBar = () => <input/>;
class SearchBar extends Component {
  /*Whenever we define a class based Component, a state object is automatically created with it.*/
  constructor(props) {
    super(props);
    this.state = {term: ""};                      //Initialize state object before using it.
  }

  /*Class Based Component class requires derived class to override render().*/
  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

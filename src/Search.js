class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    var libraries = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Type here..."
        />
      </div>
    );
  }
}

class MainDiv extends React.Component {
    constructor() {
      super();
      this.state = {
        items: [],
        error: "",
      };
      this.ChildElement = React.createRef();
    }
    callEndpoint()
    {
      var items = this.state.items;
      const childelement = this.ChildElement.current;
      var url = "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=JXhMXNrUZLDTIrlM1Ljb3FuLN3u3FYpT";
      var searchUrl = url + childelement.state.searchString;
      
      axios
        .get(url)
        .then(
          (response) => {
            if (this.unmounted) return;
            this.setState({ items: response.data.results });
            console.log(response);
          },
          (error) => {
            let failedRequest = "Error: fetching API data was not successful";
            this.setState({ error: failedRequest });
            console.log(error);
          }
        );
    }
    componentDidMount() {
      this.callEndpoint();
    }
    
    componentWillUnmount() {
      this.unmounted = true;
    }
    render() {
      var items = this.state.items;
      return (      
        <div>
          <Search ref={this.ChildElement} />
          {" "}
          {items.map((item) => (
            <ul key={item.ticker}>
              <li>
                {" "}
                {item.ticker} : {item.name}
              </li>
            </ul>
          ))}
          <p id="error">{this.state.error}</p>
        </div>
      );
    }
  }
  
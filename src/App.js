import React from "react";
import "./App.scss";
import Map from "./components/Map/Map";
import Search from "./components/Search/Search";
import SideBar from "./components/SideBar/SideBar";
import { fetchAreas } from "./actions/areaActions";
import { setSearchResponse } from "./actions/searchActions";
import { connect } from "react-redux";

class App extends React.Component {
  async componentDidMount() {
    const areas = await this.props.fetchAreas();
    await this.props.setSearchResponse(areas);
  }

  render() {
    return (
      <div>
        <Search />
        <Map onSendMarkerInfoToParent={this.onSendMarkerInfoToParent} />
        <SideBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas,
  searchedResponse: state.searchResponse
});

export default connect(
  mapStateToProps,
  { fetchAreas, setSearchResponse }
)(App);

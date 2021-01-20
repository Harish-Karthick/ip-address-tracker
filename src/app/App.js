import React, { Component } from "react";
import "../styles/app.css";
import SearchForm from "../components/SearchForm";
import MapView from "../components/MapView";
import InfoCard from "../components/InfoCard";
const IPIFY_KEY = "at_vuG4DhDdjuqWqkwti8QklucH3TfR7";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationFound: false,
      error: "",
      inputIpAddress: "",
      locationDetails: {
        place: "",
        timeZone: "",
        isp: "",
        country: "",
        latitude: "",
        longitude: "",
      },
    };
    this.changeIpAddress = this.changeIpAddress.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  changeIpAddress(event) {
    this.setState({ inputIpAddress: event.target.value });
  }
  getLocation(event) {
    event.preventDefault();
    const ipAddressRegEx = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/;
    let fetchedLocationDetails = {
      place: "",
      timeZone: "",
      isp: "",
      country: "",
      latitude: "",
      longitude: "",
    };
    if (ipAddressRegEx.test(this.state.inputIpAddress)) {
      const url = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_KEY}&ipAddress=${this.state.inputIpAddress}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          fetchedLocationDetails.isp = data.isp;
          fetchedLocationDetails.country = data.location.country;
          fetchedLocationDetails.latitude = data.location.lat;
          fetchedLocationDetails.longitude = data.location.lng;
          fetchedLocationDetails.place = data.location.city;
          fetchedLocationDetails.timeZone = data.location.timezone;
          this.setState({
            locationDetails: { ...fetchedLocationDetails },
            locationFound: true,
          });
        });
    } else {
      this.setState({
        error: "Not a valid IPV4 address.",
        locationFound: false,
      });
    }
  }
  render() {
    const {
      place,
      timeZone,
      latitude,
      longitude,
      country,
      isp,
    } = this.state.locationDetails;
    return (
      <main>
        <SearchForm
          ipValue={this.state.inputIpAddress}
          handleChange={this.changeIpAddress}
          handleSubmit={this.getLocation}
          locationFound={this.state.locationFound}
        />
        {this.state.locationFound && (
          <InfoCard
            timeZone={timeZone}
            place={place}
            country={country}
            isp={isp}
            ipAddress={this.state.inputIpAddress}
          />
        )}
        {this.state.locationFound && (
          <MapView
            latitude={latitude}
            longitude={longitude}
            place={place}
            country={country}
          />
        )}
      </main>
    );
  }
}

export default App;

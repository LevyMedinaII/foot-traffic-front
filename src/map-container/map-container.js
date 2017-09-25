import React, { Component } from 'react';
import axios from 'axios';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const key = "AIzaSyDGQgxl_YBC5rkGQLLaKNG4RjM5YXWYHTQ";
const serverKey = "AIzaSyAnu_ZZoS-30_eek_95Rl4l4RWEV5CNzHA";
const geolocationAPIUrl = 'https://www.googleapis.com/geolocation/v1/geolocate';
const apiServerPort = 5000;
export class MapContainer extends Component {
	constructor(){
		super();
		this.state = {
			latitude: null,
			longtitude: null
		}
		axios({
			method: 'post',
			url: `http://localhost:${apiServerPort}/v1/geolocate/me`
		}).then(data => {
			console.log(data)
			this.setState({
				latitude: data.latitude,
				longtitude: data.longtitude
			})
		}).catch(err => {
			console.log(err)
		})
	}
	render() {
		if(this.state.latitude == null || this.state.longtitude == null) {
			return(
				<h1> Loading... </h1>
			)
		}
		else {
		    return (
		      	 <Map
			          google={this.props.google}
			          initialCenter={{
			            lat: this.state.latitude,
			            lng: this.state.longtitude
			          }}
			          zoom={15}
			          onClick={this.onMapClicked}
			        >
			        <Marker onClick={this.onMarkerClick}
                		name={'Current location'} />
			    </Map>
		    );
		}
  	}
}
 
export default GoogleApiWrapper({
  apiKey: serverKey
})(MapContainer)


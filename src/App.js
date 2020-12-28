<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components/";
import { FetchData } from "./api";

const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");
||||||| ec62542
import React, {Component} from 'react'
import styles from './App.module.css'
import {Cards, Chart, CountryPicker} from './components/'
import { FetchData } from './api'
import CoronaImage from './images/image.png'

=======
import React, { Component } from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components/';
import { FetchData } from './api';
import CoronaImage from './images/image.png';
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e

<<<<<<< HEAD
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  }, []);
||||||| ec62542
class App extends Component {
  state = {
    data: ' '
  }
=======
class App extends Component {
  state = {
    data: ' ',
  };
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e

<<<<<<< HEAD
  const handleChange = async (country) => {
||||||| ec62542
  async componentDidMount(){
    const data = await FetchData()
    console.log(data);
    this.setState({
      data: data
    })
  }

  handleChange  = async (country) => {
=======
  async componentDidMount() {
    const data = await FetchData();
    // console.log(data);
    this.setState({
      data: data,
    });
  }

  handleChange = async (country) => {
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e
    //fetch the data
<<<<<<< HEAD
    const data = await FetchData(country);
    setData(data);
    setCountry(country);

||||||| ec62542
    const data = await FetchData(country)
    this.setState({
      data: data,
      country: country
    })
=======
    const data = await FetchData(country);
    this.setState({
      data: data,
      country: country,
    });
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e
    //set the state
<<<<<<< HEAD
    console.log(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart data={data} country={country} />
    </div>
  );
};
||||||| ec62542
    console.log(country)
  }

=======
    console.log(country);
  };
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e

<<<<<<< HEAD
export default App;
||||||| ec62542
  render() { 
    const {data} =  this.state
    return ( 
      <div className = {styles.container}>
        <Cards data = {data} />
        <CountryPicker handleChange = {this.handleChange} />
        <Chart data = {this.state.data} country = {this.state.country} />
      </div>
     );
  }
}
 
export default App;
=======
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleChange={this.handleChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
>>>>>>> ae60ae0bccd406f9ab4258972fce6c9c71b1046e

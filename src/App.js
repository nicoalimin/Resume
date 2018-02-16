import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
      	<Header data={this.state.resumeData.main}/>
      	<About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
      </div>
    );
  }
}

export default App;

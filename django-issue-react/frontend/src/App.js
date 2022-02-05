import React, { Component } from "react";
import {Footer, Brands, Header} from './containers';
import {Navbar} from './components';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/issue/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
    }
 
 
 
 render() {
   return( 
     <div className="App">
       <div className="gradient__bg">
         <Navbar />
         <Header />
          {/* <ul>
          {this.state.data.map(contact => {
            return (
              <li key={contact.id}>
                {contact.title} - {contact.description} - {contact.priority} - {contact.issue_type}
              </li>
            );
          })}
          </ul> */}
        </div>
        <Brands />
        <Footer />
      </div>
  )};
    }


  export default App;

  
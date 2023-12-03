import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, email } = steps;

    this.state =  { submit, email }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      email:this.state.email.value,
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default Post;
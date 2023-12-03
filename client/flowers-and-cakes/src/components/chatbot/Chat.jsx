import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';


const config ={
    width: "400px",
    height: "500px",
    floating: true
};

class Chat extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
            <ChatBot
            steps={[
              {
                  id:'q-help', 
                  message:'Please click what kind of help do you want?', 
                  trigger:'help'
                },
                {
                  id:'help', 
                  options:[
                  {value:'c', label:'General Enquiry', trigger:'q-enq'},
                  {value:'f', label:'Place an order', trigger:'q-order'},
                  {value:'d', label:'how to login', trigger:'q-login'}
                  ] 
                },
                {
                  id:'q-login',
                  message:"click on signup up button and fill the details",
                  trigger:'login',
                },
                {
                  id:'login',
                  user:true,
                  trigger:'q-information',
                },
                {
                  id:'q-information',
                  message:"Thank you....! have a good day",
                  trigger:'information',
                },
                {
                  id:'information',
                  user:true,
                  end:true,
                },
                {
                  id:'q-enq',
                  message:'How may i Help you?',
                  trigger:'enq',
                },
                {
                  id:'enq',
                  options:[
                    {value:'c', label:'how many types of cakes available', trigger:'q-ctypes'},
                    {value:'f', label:'How many types of flowers available', trigger:'q-ftypes'},
                    ] 
                },
                {
                  id:'q-ctypes',
                  message:'There are 5 types of cakes available',
                  trigger:'ctypes',
                },
                {
                  id:'ctypes',
                  user:true,
                  trigger:'q-cake',
                },
                {
                  id:'q-ftypes',
                  message:'There are 5 types of flower available',
                  trigger:'ftypes',
                },
                {
                  id:'ftypes',
                  user:true,
                  trigger:'q-flower',
                },
                {
                  id:'q-order', 
                  message:'Please click what you want to order?', 
                  trigger:'order'
                },
                {
                  id:'order', 
                  options:[
                  {value:'c', label:'Cake', trigger:'q-cake'},
                  {value:'f', label:'Flower', trigger:'q-flower'},
                  ] 
                },
                {
                  id:'q-cake',
                  message:'Which cake would you like to order?',
                  trigger:'cake',
                },
                {
                  id:'cake',
                  user:true,
                  trigger:'q-cavail',
                },
                {
                  id:'q-cavail',
                  message:'Yes the cake is available at the time',
                  trigger:'cavail',
                },
                {
                  id:'cavail',
                  user:true,
                  trigger:'q-add',
                },
                {
                  id:'q-flower',
                  message:'Which flower would you like to order?',
                  trigger:'flower',
                },
                {
                  id:'flower',
                  user:true,
                  trigger:'q-favail',
                },
                {
                  id:'q-favail',
                  message:'Yes the flower is available at the time',
                  trigger:'favail',
                },
                {
                  id:'favail',
                  user:true,
                  trigger:'q-add',
                },
                {
                  id:'q-add', 
                  message:'Please enter your area pin code', 
                  trigger:'add',
                },
                {
                  id:'add', 
                  user:true,
                  trigger:'q-email',
                },
              {
                id:'q-email', 
                message:'What is you email?', 
                trigger:'email',
              },
              {
                id:'email', 
                user:true,
                trigger:'q-submit',
              },
              {
                id:'q-submit', 
                message:'Do you wish to submit?', 
                trigger:'submit',
              },
              {
                id:'submit', 
                options:[
                {value:'y', label:'Yes', trigger:'end-message'},
                {value:'n', label:'No', trigger:'no-submit'},
                ] 
              },
              {
                      id: 'no-submit',
                      message:'Your information was not submitted.', 
                      end: true,
                   },
                        {
                      id: 'end-message',
                      component: <Post />,
                      asMessage: true,
                      end: true,
                   },
            ]}
            {...config}
            />
        </div> 
      </React.Fragment>
    );
  }
       
}

export default Chat;
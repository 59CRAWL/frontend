// import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

// class Chatbot extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false,
//     };
//   }

//   divStyle = {
//     padding: '20px', // You can specify the padding value here
//   };

//   toggleChatbot = () => {
//     this.setState((prevState) => ({
//       open: !prevState.open,
//     }));
//   };

//   render() {
//     return (
//       <div className={`chatbot ${this.state.open ? 'open' : 'closed'}`}>
//         <div className="chatbot-toggle" onClick={this.toggleChatbot}>
//           {this.state.open ? (
//             <FontAwesomeIcon icon={faTimes} width={30}/>
//           ) : (
//             <FontAwesomeIcon icon={faComment} width={80} style={this.divStyle}/>
//           )}
//         </div>
//         {this.state.open && (
//           <ChatBot
//             steps={[
//               {
//                 id: '1',
//                 message: 'Hello! How can I assist you today?',
//                 trigger: '2',
//               },
//               {
//                 id: '2',
//                 user: true,
//                 trigger: '1',
//               },
//             ]}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default Chatbot;

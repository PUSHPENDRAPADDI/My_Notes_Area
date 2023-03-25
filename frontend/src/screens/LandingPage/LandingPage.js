// import React, { useEffect } from 'react';
// import { Button, Container, Row } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// import './LandingPage.css'

// const LandingPage = () => {

//     // const history = useHistory()

//     // useEffect(() => {
//     //     const userInfo = localStorage.getItem("userInfo");
//     //     if (userInfo) {
//     //       history.push("/mynotes");
//     //     }
//     //   }, [history]);
    

//     return (
//         <div className='main'>
//             <Container>
//                 <Row>
//                     <div className='intro-text'>
//                         <div>
//                             <h1 className='title'>Welcome To Your Note's</h1>
//                             <p className='subtitle'>Our safe place for your notes 📕</p>
//                         </div>
//                         <div className='buttonContainer'>
//                             <a href='/login'>
//                                 <Button size='lg' className='landingbutton' >
//                                     Login
//                                 </Button>
//                             </a>
//                             <a href='/register'>
//                                 <Button size='lg' className='landingbutton'
//                                     variant='outline-primary'>
//                                     register
//                                 </Button>
//                             </a>
//                         </div>
//                     </div>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default LandingPage



import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage({ history }) {

  useEffect(() => {

    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
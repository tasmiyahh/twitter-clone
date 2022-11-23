import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseUser, faHashtag, faEnvelope, faBookmark, faList, faBell,
  faCircleUser, faLocation, faUpload, faComment, faSmile, faHeart, faRepeat
} from '@fortawesome/free-solid-svg-icons'

import Profile from "../../asset/football.jpg"
import Post from "../../asset/fifa.jpg"

const Post1 = () => {
  return (
    <>


       <Row className='post'>
            <Col > <p>
              <img src={Profile} className="profile" alt="" width="40" height="40" />

              <b>Sports_club</b>
            </p>
              <p>fifa worldcup 2022 held in Qatar </p>
              <img src={Post} alt="" width="375" height="375" className='postimg' /></Col>

            <Col>
              <Row >
                <Col className='iconsflex' >

                  <FontAwesomeIcon icon={faComment} className="posticons" />
                  <FontAwesomeIcon icon={faHeart} className="posticons" />
                  <FontAwesomeIcon icon={faRepeat} className="posticons" />
                  <FontAwesomeIcon icon={faUpload} className="posticons" />

                </Col>

              </Row>




            </Col>
          </Row>


      <Row className='posttablet'>
        <Col > <p>
          <img src={Profile} className="profile" alt="" width="40" height="40" />

          <b>Sports_club</b>
        </p>
          <p>fifa worldcup 2022 held in Qatar </p>
          <img src={Post} alt="" width="300" height="300" className='postimg' /></Col>

        <Col>
          <Row >
            <Col className='iconsflex' >

              <FontAwesomeIcon icon={faComment} className="posticons" />
              <FontAwesomeIcon icon={faHeart} className="posticons" />
              <FontAwesomeIcon icon={faRepeat} className="posticons" />
              <FontAwesomeIcon icon={faUpload} className="posticons" />

            </Col>

          </Row>




        </Col>
      </Row>


    </>

  )
}

export default Post1;


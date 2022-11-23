import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post1 from './components/post';
import Post2 from './components/post2';
import { Button } from 'react-bootstrap';
import './App.css';
import Profile from "./asset/profile3.jpg"
import Post from "./asset/post.jpg"
import Logo from "./asset/twitterlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseUser, faHashtag, faEnvelope, faBookmark, faList, faBell,
  faCircleUser, faLocation, faUpload, faComment, faSmile, faHeart, faRepeat
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (

    <Container>
      <Row>


        <Col md={3} className='sidebar'>

          <ul>
            <img src={Logo} alt="" width="40" height="40" className='logo' />
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faHouseUser} className="icons" />
              Home</li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faHashtag} className="icons" />
              Explore</li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faBell} className="icons" />
              Notifications</li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
              Messages
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faBookmark} className="icons" />
              Bookmarks
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faList} className="icons" />
              Lists</li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faCircleUser} className="icons" />
              Profile

            </li>
            <li className='sidebarlist'> <b>.....</b> More</li>
            <li className='sidebarlist'><Button className='button'>Trend</Button></li>
          </ul>
        </Col>

        <Col md={2} className='sidebartablet'>

          <ul>
            <img src={Logo} alt="" width="40" height="40" className='logo' />
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faHouseUser} className="icons" />
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faHashtag} className="icons" />
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faBell} className="icons" />
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faEnvelope} className="icons" />

            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faBookmark} className="icons" />

            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faList} className="icons" />
            </li>
            <li className='sidebarlist'>
              <FontAwesomeIcon icon={faCircleUser} className="icons" />


            </li>
            <li className='sidebarlist'> <b>.....</b> </li>

          </ul>
          <Button className="tabletbutton button" >Trend</Button>
        </Col>

        <Col md={5}>
          <h5 className='home hometablet'>Home</h5>
          <p className='whatshappening'>
            <img src={Profile} className="profile" alt="" width="40" height="40" /><span className='postwriting'>What's happening?</span>
            <Row>
              <Col sm={8}>

              </Col>
              <Col sm={1}><Button className='button'>Twitter</Button></Col>

            </Row>

          </p>
          <hr />

          <Post1 />
          <hr />
          <Post2 />

          <hr />

        </Col>



        <Col className='sidebar2' md={4}>
          <input type="text" placeholder='Search Twitter' />
          <br />

          <div className='sidebardiv'>
            <br />
            <h6 className='heading'>Trends for you</h6>
            <ul>
              <li className='trend'>
                <span > Trending in Pakistan<br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>

              </li>

              <li className='trend'>
                <span >Trending in Pakistan <br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>

              </li>


              <li className='trend'>
                <span>Trending in Pakistan <br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>


              </li>
            </ul>
          </div>
        </Col>

        <Col className='sidebar2tablet' md={4}>
          <input type="text" placeholder='Search Twitter' className='tabletinput' />
          <br />

          <div className='sidebardiv' >
            <br />
            <h6 className='heading'>Trends for you</h6>
            <ul>
              <li className='trend'>
                <span > Trending in Pakistan<br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>

              </li>

              <li className='trend'>
                <span >Trending in Pakistan <br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>

              </li>


              <li className='trend'>
                <span>Trending in Pakistan <br />
                  <b className='hashtag'>#fifa</b></span>
                <span>
                  <b>
                    ...
                  </b>

                </span>


              </li>
            </ul>
          </div>
        </Col>
      </Row>


    </Container>
  );
}

export default App;

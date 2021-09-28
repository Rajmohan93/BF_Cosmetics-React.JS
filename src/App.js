import logo from './logo.png';
import main_photo from './lipstick.jpg';
import payment from './payment.png';
import './App.css';
import './Mq.css';
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Form,  FormControl, Button, FormGroup, FormLabel, Card} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      {/* React-Bootstrap Code */}

      {/* Section Navigation Menu Bar */}

      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-header">
        <Navbar.Brand href="#home"><img src= {logo} width="147px" height="67px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="App.js" className="navbar-menu-links">PRODUCT</Nav.Link>
            <Nav.Link href="App.js" className="navbar-menu-links">NEWS</Nav.Link>
            <Nav.Link href="App.js" className="navbar-menu-links">PROMOTION</Nav.Link>
            <Nav.Link href="App.js" className="navbar-menu-links-icons"><i class="fas fa-search"></i></Nav.Link>
            <Nav.Link href="App.js" className="navbar-menu-links-icons"><i class="far fa-user-circle"></i></Nav.Link>
            <Nav.Link href="App.js" className="navbar-menu-links-icons"><i class="fas fa-shopping-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>

          {/* Section Filters */}

          <Col lg = {2} className="section-filter" >
            <h2 className="mt-3">Filters</h2>
            <Form.Group>
              <Form.Label>Categories</Form.Label>
              <Form.Check label="Lipsticks" />
              <Form.Check label="Shadow" />
              <Form.Check label="Accessories" />
              <Form.Check label="Brushes" />
              <Form.Check label="Base" />
              <Form.Check label="Hair" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price Order</Form.Label>
              <Form.Control as="select" defaultValue="Below 500">
                <option>Below 500</option>
                <option>500 to 1000</option>
                <option>Above 1000</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Brands</Form.Label>
              <Form.Check label="Ruby Rose" />
              <Form.Check label="Kylie Cosmetics" />
              <Form.Check label="Fenty Beauty" />
              <Form.Check label="Mac" />
              <Form.Check label="Eudora" />
              <Form.Check label="Maybeline" />
            </Form.Group>
          </Col>

          {/* Section Vertical Line */}

          <Col lg = {1} className="vline">
          </Col>

          {/* Section Card */}

          <Col lg = {9}>

            <Row className="mt-3">

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <Row className="mt-3">

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <Row className="mt-3">

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <Row className="mt-3">

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg = {4}>
                <Card style = {{ width: '18rem' }}>
                  <Card.Img variant="top" src = {main_photo} />
                  <Card.Body>
                    <Card.Title>Lipstick</Card.Title>
                    <Card.Text>
                      Rs. 299/-
                    </Card.Text>
                    <Button type="submit" className="cart-btn"><i class="fas fa-plus"></i> ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <Row className="mt-3 mb-3 page-btn">
              <Col lg = {12}>
                <Button type="submit">Load More</Button>
              </Col>
            </Row>

          </Col>

        </Row>

      </Container>

      {/* Section Footer */}

      <Container fluid className="section-footer">

        <Row>

          <Col lg = {3} className="pl-3 pt-3">
            <h3>Social Networks</h3>
            <span style = {{ fontSize: '3em' }}><i class="fab fa-facebook"></i></span>
            <span style = {{ fontSize: '3em' }} className="pl-1"><i class="fab fa-instagram"></i></span>
            <span style = {{ fontSize: '3em' }} className="pl-1"><i class="fab fa-whatsapp"></i></span>
            <br/>
            <b>Blackwins Tech Solution</b>
            <br/>
            <p>Tamil nadu, India</p>
          </Col>

          <Col lg = {3} className="pt-3">
            <h3>Categories</h3>
            <span>
              Skin<br/>
              Shadows<br/>
              Eyelashes<br/>
              Blush<br/>
              Illuminators<br/>
              Lipstick<br/>
              Brushes<br/>
              Base<br/>
              Hair
            </span>
          </Col>

          <Col lg = {3} className="pt-3">
          <h3>Partner Brands</h3>
            <span>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose<br/>
              Ruby Rose
            </span>
          </Col>

          <Col lg = {3} className="pt-3">
            <h3>Payment Methods</h3>
            <img src= { payment } width="240px" height="48px" className="payment-image" />
          </Col>

        </Row>

      </Container>

      {/* Section Copyright */}

      <Container fluid className="copyright p-3">
        <p>Copyrights <i class="far fa-copyright "></i> Blackwins Tech Team. 2021. All rights reserved.</p>
      </Container>

    </div>
  );
}

export default App;
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'
import BookList from './components/book-list.component'
import CreateBook from './components/create-book.component'
import UpdateBook from './components/edit-book.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/student-list'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    List Students
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-book'} className="nav-link">
                    Create Book
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/books-list'} className="nav-link">
                    List Books
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col >
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-book"
                    component={(props) => <CreateBook {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-book/:bookId"
                    component={(props) => <UpdateBook {...props} />}
                  />
                  <Route
                    exact
                    path="/books-list"
                    component={(props) => <BookList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App

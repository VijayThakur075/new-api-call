import './App.css';
import { Book } from './component/Book';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Characters } from './component/Characters';
import MovieQuote from './component/MovieQuote';
import { Movie } from './component/Movie';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <Router>
      <div className="App">
        First page.....
      </div>
      <Navbar bg="danger" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link  href="/book">Books</Nav.Link>
      <Nav.Link href="/movie">Movies</Nav.Link>
      <Nav.Link href="/characters">Characters</Nav.Link>
      <Nav.Link href="/moviequote">MovieQuote</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <Route exact path="/book" component={Book} />
      <Route path="/Movie" component={Movie} />
      <Route path="/Characters" component={Characters} />
      <Route path="/movie/:id/quote" component={MovieQuote} />


    </Router>

  );
}

export default App;

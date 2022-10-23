import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Task Tracker</Navbar.Brand>
				<Navbar.Toggle/>
				
			</Container>
		</Navbar>);
}

export default Header;

import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1 className="title">GitHub Battle: Battle your friends... and stuff.</h1>
    <Link to="/battle" className="button">
      Battle
    </Link>
  </div>
);

export default Home;

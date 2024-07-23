import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({item, movieImageUrlBase}) => {
  return (
    <div>
      <div className="card">
        <img src={`${movieImageUrlBase}${item.backdrop_path}`} alt="Avatar"  />
        <div className="container">
          <h4>
            <Link to={ `/items/${item.id}`}>
            <b>{item.title}</b>
            </Link>
          </h4>
          <small>Rating: {item.vote_average}</small>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
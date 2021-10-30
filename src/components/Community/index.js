import { Link } from 'react-router-dom';
import PostList from './PostList';
import './community.scss';

const Community = ({ eventList = [] }) => {
  return (
    <div id="community">
      <div className="community-header">
        <div>
          <h2 className="title community-title">Whassup ?!</h2>
        </div>
      </div>
      <div className="community-post">
        <Link to="/communaute/ajoute-ton-evenement">
          <button className="button">Proposer évenment</button>
        </Link>
      </div>
      <PostList />
      <div className="shadowDiv"></div>
    </div>
  );
};

export default Community;

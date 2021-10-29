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
        <button className="button">Proposer évenment</button>
      </div>
      <PostList />
      <div className="shadowDiv"></div>
    </div>
  );
};

export default Community;

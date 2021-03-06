import Loading from 'src/components/Loading';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import './community.scss';

const Community = (props) => {
  if (!props.isLoading) {
    props.callArticleApiGet();
    props.setOnLoading();
  }
  return (
    <div id="community">
      <div className="community-header">
        <div>
          <h2 className="title community-title">Whassup ?!</h2>
        </div>
      </div>
      <div className="community-post">
        <Link to="/communaute/ajoute-ton-evenement">
          <button type="button" className="button">Proposer un évènement</button>
        </Link>
      </div>

      {!props.isLoaded && (
        <>
          <div className="community-loading-wheel">
            <div className="loading-wheel">
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && <PostList />}

      <div className="shadowDiv"></div>
    </div>
  );
};

export default Community;

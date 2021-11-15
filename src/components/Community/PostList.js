import { Link } from 'react-router-dom';

const PostList = () => (
  <div className="community-eventList">
    <div className="eventList-item">
      <div className="participants">
        <div>
          <p>150 participants</p>
        </div>
      </div>
      <div className="participate-button">
        <button type="button" id="participate-button" className="button">
          J'y serai !
        </button>
      </div>
      <div className="item-image">
        <img src="" />
      </div>
      <div className="item-description">
        <div className="description-resume">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic
        </div>
        <div className="description-link">
          <Link to="/communaute/details">
            <button type="button" className="button">
              Lire plus <span>&#10148;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PostList;

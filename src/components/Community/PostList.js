import { Link } from 'react-router-dom';
import logo2 from 'src/assets/img/logo2.png';

const PostList = (list) => {
  console.log('test' + list.itemList);
  const mappingPosts = list.itemList.map((item) => {
    // const getImageURL = () => {
    // Vérification : l'article a-t-il une image
    //   if (item._embedded['wp:featuredmedia']) {
    //     if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
    //       return item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    //     }
    //     else if (item._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
    //       return item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    //     }
    //     else {
    //       return item._embedded['wp:featuredmedia'][0].source_url;
    //     }
    //   }
    //   else {
    //     return { logo2 };
    //   }
    // };
    const urlDetailPost = '/communaute/' + item.id;
    return (
      <article
        key={item.id}
        id={'post' + item.id}
        className="community-eventList"
      >
        <div className="eventList-item">
          <div className="item-image">
            <img src="" />
          </div>
          <div className="item-description">
            <h2 className="item-title">{item.title.rendered}</h2>
            <p>Ou ? {item.meta.place}</p>
            <p>Quand ? Le {item.meta.date}</p>
            <div className="description-resume">
              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
            <div className="description-link">
              <Link to={urlDetailPost}>
                <button type="button" className="button">
                  lire plus <span>&#10148;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  });
  return mappingPosts;
};

export default PostList;

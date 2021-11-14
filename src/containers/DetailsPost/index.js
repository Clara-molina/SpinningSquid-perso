import { connect } from 'react-redux';
import {
  submitGetArticleDetails,
  setOnLoadingDetail,
} from 'src/actions/communityActions';
import DetailsPost from '../../components/Community/DetailsPost';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    articleId: ownProps.match.params.articleId,
    isLoaded: state.community.isLoaded,
    postAddIsLoading: state.community.addArticle.postAddIsLoading,
    responseApi: state.community.responseApi,
    title: state.community.addArticle.title,
    place: state.community.addArticle.place,
    date: state.community.addArticle.date,
    story: state.community.addArticle.story,
    image: state.community.addArticle.image,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticleDetails: (articleId) => {
    dispatch(submitGetArticleDetails(articleId));
  },
  setOnLoading: () => {
    dispatch(setOnLoadingDetail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPost);

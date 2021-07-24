import {useState} from 'react';
import {connect} from 'react-redux';
import * as articleActions from '../../redux/actions/articleActions';
import PropTypes from 'prop-types';

const Article = (props) => {

    const [article, setArticle] = useState({title: ""});

    function handleChange(event) {
        setArticle({...article, title: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.dispatch(
            articleActions.createArticle(article)
        );

        alert(article.title);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Articles</h2>
            <h3>Add Article</h3>
            <input type="text" onChange={handleChange} value={article.title}/>
            <input type="submit" value="Save"/>
        </form>
    );
}

// Define the component's properties
Article.propTypes = {
    dispatch: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
}

const mstp = (state) => {
    return {
        articles: state.articles
    };
}
export default connect(mstp)(Article);
// import articles from '../../server/src/article-content';
import ArticlesList from '../components/ArticlesList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {

    const [articles, setArticles] = useState();

    useEffect(() => {
        const loadData = async () => {
            // const response = await axios.get(`http://localhost:8000/api/articles`);
            const response = await axios.get(`/api/articles`); // do not need a full path since we specified proxy in package.json
            const data = response.data;
            console.log(data);
            setArticles(data);
        }
        loadData();
    }, []);

    if (!articles) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
        </>
    )
}

export default ArticleList;

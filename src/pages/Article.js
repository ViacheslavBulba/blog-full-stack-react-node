import { useParams } from 'react-router-dom';
//import articles from './article-content';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Article = () => {
    //const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});
    const [articleInfo, setArticleInfo] = useState();
    const { articleId } = useParams();
    //const article = articles.find(article => article.name === articleId);

    useEffect(() => {
        const loadData = async () => {
            // const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`);
            const response = await axios.get(`/api/articles/${articleId}`); // do not need a full path since we specified proxy in package.json
            const data = response.data;
            setArticleInfo(data);
        }
        loadData();
    }, [articleId]);

    if (!articleInfo) {
        return <NotFound />
    }


    return (
        <>
            <h1>{articleInfo.title}</h1>
            {articleInfo.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    )
}

export default Article;

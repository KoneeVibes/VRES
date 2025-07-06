import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import NewsBox from '../../Components/NewsBox/NewsBox';
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';
import './Newsroom.css';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../helpers/dateFormatter';

const ArticleBox = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const PROJECT_KEY = process.env.REACT_APP_PROJECT_KEY;
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    const { blogId = "" } = useParams();
    const [blogInfo, setBlogInfo] = useState({});

    useEffect(() => {
        const retrieveAllBlogService = async () => {
            try {
                if (!blogId) return;
                const response = await fetch(`${API_ENDPOINT}/public/blog/${PROJECT_KEY}/${blogId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `APIKey ${API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                });
                const res = await response.json();
                if (!response.ok) {
                    console.error('Error:', res);
                    throw new Error(res.message);
                };
                return setBlogInfo(res.data);
            } catch (error) {
                console.error('API fetch error:', error);
                throw error;
            }
        };
        retrieveAllBlogService();
    }, [blogId, API_KEY, PROJECT_KEY, API_ENDPOINT]);

    return (
        <div id='ArticleOne'>
            <Navbar />
            <Header background={blogInfo?.thumbnail}
                height={'31.0625em'}
                display={'none'} />
            <NewsBox
                Header={blogInfo?.title}
                DateTag={formatDate(blogInfo?.updatedAt, false)}
                body={blogInfo?.body}
            />
            <SubscriptionBox />
            <Footer />
        </div>
    )
}

export default ArticleBox
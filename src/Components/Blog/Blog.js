import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import { formatDate } from '../../helpers/dateFormatter.js';

const BlogWrapper = styled.section`
    padding: var(--sectioning-gap);
    
    .TextSection{
        display: flex;
        justify-content: center;
    }

    .TextContainer{
        width: 30.8125em;
        text-align: center;
    }

    .ThumbnailSection{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 4em;
    }

    .ThumbnailSection >*{
        flex: 1;
    }

    .ThumbnailSection p{
        display: inline-block;
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: #344854;
    }

    .ThumbnailSection h6{
        display: inline-block;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #344854;
    }

    h2{
        font-family: Space Grotesk;
        font-size: 35px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: -0.02em;
    }

    .TextContainer p{
        font-family: Space Grotesk;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
    }

    @media screen and (max-width: 768px){
        .ThumbnailSection{
            flex-direction: column;
            gap: 2em;
        }

        h2{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 150px){
        h2{
            font-size: 5px;
        }

        .ThumbnailSection h6{
            font-size: 2px;
            line-height: 10px;
        }

        .ThumbnailSection p{
            font-size: 2px;
            line-height: 10px;
        }

        .TextContainer p{
            font-size: 4px;
            line-height: 10px;
        }

    }
`

const Blog = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const PROJECT_KEY = process.env.REACT_APP_PROJECT_KEY;
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const retrieveAllBlogService = async () => {
            try {
                const response = await fetch(`${API_ENDPOINT}/public/blog/${PROJECT_KEY}`, {
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
                }
                return setBlogs(res.data);
            } catch (error) {
                console.error('API fetch error:', error);
                throw error;
            }
        };
        retrieveAllBlogService();
    }, [blogs, API_KEY, PROJECT_KEY, API_ENDPOINT]);

    return (
        <BlogWrapper id='Blog'>
            <div className='TextSection'>
                <div className='TextContainer'>
                    <h2>Blog Article </h2>
                    <p>Read more from our blog for post , and learn about what we are currently doing </p>
                </div>
            </div>
            <div className='ThumbnailSection'>
                {blogs
                    ?.slice(0, 3)
                    .map((blog, index) => (
                        <BlogCard
                            key={index}
                            thumbnail={blog?.thumbnail}
                            body={blog?.title}
                            display={"flex"}
                            flexDirection={"column"}
                            thumbnailHeight={"100%"}
                            date={formatDate(blog?.updatedAt, false)}
                            padding={(window.screen.availWidth > 768) ? 'var(--sectioning-gap)' : '0'}
                            displayButton={'none'}
                            link={`/newsroom/${blog?.id}`}
                        />
                    ))}
            </div>
        </BlogWrapper>
    )
}

export default Blog
import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import SubscriptionBox from '../../Components/SubscriptionBox/SubscriptionBox';
import './Newsroom.css';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import MobileHeader from './Assets/MobileHeader.svg';
import BlogCard from '../../Components/Blog/BlogCard';

const Newsroom = () => {
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
    <div id='Newsroom'>
      <Navbar />
      <Header background={(window.screen.availWidth > 425) ? HeaderPhoto : MobileHeader}
        height={'31.0625em'}
        display={'none'}
        HeadOne={'Stay informed about Us'} />
      <div className='main'>
        <div className='ArticlesSection'>
          <h2>All articles</h2>
          {blogs?.map((blog, index) => {
            // Extract first paragraph and limit to 20 words
            let firstParagraph = blog?.body?.split('\n').find(p => p.trim().length > 0) || '';
            let words = firstParagraph.split(/\s+/);
            let shortBody = words.length > 20
              ? words.slice(0, 20).join(' ') + '...'
              : firstParagraph;
            return (
              <BlogCard
                key={index}
                thumbnail={blog?.thumbnail}
                body={shortBody}
                header={blog?.title}
                text={'Learn More '}
                border={'none'}
                bgColor={'#FFFFFF'}
                display={'flex'}
                imgHeight={"300px"}
                flexSize={"0.3"}
                gap={(window.screen.availWidth > 768) ? '5em' : '1em'}
                padding={`var(--sectioning-gap)`}
                align={(window.screen.availWidth > 769) ? 'center' : 'stretch'}
                flexDirection={(window.screen.availWidth < 769) ? 'column' : ''}
                link={`/newsroom/${blog?.id}`}
              />
            )
          })}
        </div>
        <SubscriptionBox />
      </div>
      <Footer />
    </div>
  )
}

export default Newsroom
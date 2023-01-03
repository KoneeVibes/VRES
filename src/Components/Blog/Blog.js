import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import Thumbnail1 from './Assets/Thumbnail1.svg'
import Thumbnail2 from './Assets/Thumbnail2.svg'
import Thumbnail3 from './Assets/Thumbnail3.svg'

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
    return (
        <BlogWrapper id='Blog'>
            <div className='TextSection'>
                <div className='TextContainer'>
                    <h2>Blog Article </h2>
                    <p>Read more from our blog for post , and learn about what we are currently doing </p>
                </div>
            </div>
            <div className='ThumbnailSection'>
                <BlogCard thumbnail={Thumbnail1}
                    body={'Announcing the PyTorch Foundation to Accelerate Progress in AI Research'}
                    date={'September 12, 2022'}
                    padding={(window.screen.availWidth > 768) ? 'var(--sectioning-gap)' : '0'}
                    displayButton={'none'}
                    link={'/newsroom/thepowerofbusinessstrategicpartnership'} />
                <BlogCard thumbnail={Thumbnail2}
                    body={'Testing More Ways to Control What You See on Instagram'}
                    date={'August 30, 2022'}
                    padding={(window.screen.availWidth > 768) ? 'var(--sectioning-gap)' : '0'}
                    displayButton={'none'}
                    link={'/newsroom/thepowerofbusinessstrategicpartnership'} />
                <BlogCard thumbnail={Thumbnail3}
                    body={'Introducing the First End-to-End Shopping Experience on WhatsApp With JioMart in India'}
                    date={'August 29, 2022'}
                    padding={(window.screen.availWidth > 768) ? 'var(--sectioning-gap)' : '0'}
                    displayButton={'none'}
                    link={'/newsroom/thepowerofbusinessstrategicpartnership'} />
            </div>
        </BlogWrapper>
    )
}

export default Blog
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LearnMore from '../Buttons/LearnMore';

const BlogCardWrapper = styled.div`
    img{
        width: 100%;
    }

    .InfoTab{
        font-size: 0px;
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 768px){
        padding: 0;
    }

`

const BlogCard = ({ thumbnail, body, date, header, display, gap, background, borderRadius, padding, height, text, border, bgColor, color, margin, displayButton, align, flexDirection, link, displayThumbnail}) => {
    return (
        <BlogCardWrapper className='BlogCard' style={{ display: display, gap: gap, background: background, borderRadius: borderRadius, padding: padding, minHeight: height, alignItems: align, flexDirection: flexDirection }}>
            <Link to={link}><img src={thumbnail} alt='blog thumbnail' className='FlexItem' style={{display: displayThumbnail}} ></img></Link>
            <div className='InfoTab FlexItem'>
                <Link to={link}><h1>{header}</h1></Link>
                <Link to={link}><p>{body}</p></Link><br></br>
                <h6>{date}</h6>
                <Link to={link}><LearnMore text={text} border={border} bgColor={bgColor} color={color} margin={margin} display={displayButton} /></Link>
            </div>
        </BlogCardWrapper>
    )
}

export default BlogCard
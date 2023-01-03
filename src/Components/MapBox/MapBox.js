import React from 'react';
import styled from 'styled-components';


const MapBoxWrapper = styled.section`
    iframe{
        border-radius: 14px;
        border: 1px solid #D2D2D2;
    }
`

const MapBox = () => {

    return (
        <MapBoxWrapper className='MapBox'>
            <iframe title='google map' id="gmap_canvas" className='MapBox1' src="https://maps.google.com/maps?q=1-7%20Muri%20Okonla%20Street,%20%20Victoria%20Island%20%20%20Lagos%20&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: '100%' }}></iframe>
        </MapBoxWrapper>
    )
}

export default MapBox
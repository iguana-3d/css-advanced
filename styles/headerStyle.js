import styled from 'styled-components';

export const HeaderStyle = styled.header`
//light Green: #7ED56F;
//Medium Green: #55C57A;
//Dark Green: #28B485;
    height: 95vh;
    background-image: linear-gradient(
        to right bottom, 
        rgba(126, 213, 111, 0.8), 
        rgba(40, 180, 131, 0.8)), 
        url('/static/images/hero.jpg');
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;
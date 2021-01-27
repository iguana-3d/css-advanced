import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 95vh;
    background-image: linear-gradient(
        to right bottom, 
        rgba(126, 213, 111, 0.8), 
        rgba(40, 180, 131, 0.8)), 
        url('/static/images/hero.jpg');
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

    .logo-box {
        position: absolute;
        top: 40px;
        left: 40px;
        .logo {
            height: 35px;
        }
    }
    .text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        .heading-primary {
            color: #FFFFFF;
            text-transform: uppercase;
            .heading-primary-main {
                display: block;
                font-size: 60px;
                font-weight: 400;
                letter-spacing: 35px;
            }
            .heading-primary-sub {
                display: block;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 17.4px;
            }
        }
    }
`;
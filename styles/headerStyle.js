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
        text-align: center;
        .heading-primary {
            color: #ffffff;
            text-transform: uppercase;
            margin-bottom: 60px;
            backface-visibility: hidden;
            .heading-primary-main {
                display: block;
                font-size: 60px;
                font-weight: 400;
                letter-spacing: 35px;
                animation: moveInLeft 2s ease-out;
            }
            .heading-primary-sub {
                display: block;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 17.4px;
                animation: moveInRight 2s ease-out;
            }
        }
        .btn {
            &:link, :visited {
                text-transform: uppercase;
                text-decoration: none;
                padding: 15px 40px;
                display: inline-block;
                border-radius: 100px;
                transition: all .2s;
                position: relative;
            }
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0,0,0,.2);
                &:after {
                    transform: scaleX(1.4) scaleY(1.6);
                    opacity: 0;
                }
            }
            &:active {
                transform: translateY(-1px);
                box-shadow: 0 5px 10px rgba(0,0,0,.2);
            }
            &:after {
                content: '';
                display: inline-block;
                height: 100%;
                width: 100%;
                border-radius: 100px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: all .4s;
            }
        }
        .btn-white {
            background-color: #fff;
            color: #777777;
            &:after {
                background-color: #fff;
            }
        }
        .btn-animated {
            animation: moveInBottom .8s ease-out .75s;
            animation-fill-mode: backwards;
        }
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }
        80% {
            transform: translateX(10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveInRight {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        80% {
            transform: translateX(-10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
`;
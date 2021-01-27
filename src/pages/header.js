import React from 'react';
import { HeaderStyle } from '../../styles/headerStyle';

export default function Header(){
    return(
        <HeaderStyle>
            <div className="logo-box">
                <img src="/static/images/logo-white.png" alt="logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
            </div>            
        </HeaderStyle>
    )
}
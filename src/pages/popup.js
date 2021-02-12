import React from 'react';

export default function Popup(){
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="/static/images/nat-8.jpg" alt="Tour photo" className="popup__img"/>
                    <img src="/static/images/nat-9.jpg" alt="Tour photo" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas velit, eget posuere mauris. Donec eget magna ac risus pellentesque convallis eu vel ipsum. Cras a auctor purus. Suspendisse potenti. Cras auctor tortor ac sapien vulputate, quis euismod augue bibendum. Aenean vulputate molestie diam at fermentum. Proin gravida ornare semper. Maecenas convallis felis sapien, vel mattis enim tempus ac. Vestibulum ullamcorper eget libero laoreet bibendum. Nunc sit amet dapibus ex. Sed ultrices ante quam, at hendrerit tellus rutrum eu. Aenean odio ante, molestie eu massa consectetur, laoreet mattis felis.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    )
}
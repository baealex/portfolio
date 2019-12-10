import React from 'react';

function SectionIntro() {
    const backgroundAvatar = {
        backgroundImage:'url(https://avatars2.githubusercontent.com/u/35596687)'
    };

    return (
        <header className="container-fluid fill-full-display">
            <div className="hello-face fill-image raindrop-image" style={backgroundAvatar}></div>
            <h3 className="hello-say font-ridi text-center">
                안녕하세요! <span id="intro-text"></span> 개발자 배진오입니다.
            </h3>
        </header>
    );
}

export default SectionIntro;
import React from 'react';

class IntroText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            lastIndex: 3,
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.textChange(), 4000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    textChange() {
        if(this.state.number >= this.state.lastIndex) {
            this.setState({
                number: 0,
            });
        }
        else {
            this.setState({
                number: this.state.number + 1,
            });
        }
    }
    
    render() {
        var textArray = [
            '개발을 좋아하는',
            '선의를 좋아하는',
            '파이썬을 좋아하는',
            '보라색을 좋아하는',
        ];

        return (
            <h3 className="hello-say font-ridi text-center">
                안녕하세요! <span className="blink-text">{textArray[this.state.number]}</span> 개발자 배진오입니다.
            </h3>
        )
    }
}

function Intro() {
    const backgroundAvatar = {
        backgroundImage:'url(https://avatars2.githubusercontent.com/u/35596687)'
    };

    return (
        <header className="container-fluid fill-full-display">
            <div className="hello-face fill-image raindrop-image" style={backgroundAvatar}></div>
            <IntroText />
        </header>
    );
}

export default Intro;
import React from 'react';

function PurpleLink(props) {
    return (
        <a className="vivid-purple" href={props.href}>{props.text}</a>
    )
}

function SocialLink(props) {
    return (
        <img src={`https://img.shields.io/badge/${props.name}-${props.content}-lightgrey?logo=${props.logo}&style=social`} alt={props.logo + '-' + props.name}/>
    )
}

class Product extends React.Component {
    static defaultProps = {
        image1: '기본 이미지',
        image2: '기본 이미지',
        imageDesc: '기본 이미지 설명',
        productName: '기본 프로젝트 제목',
        productDesc: '기본 프로젝트 설명',
        productSize: '기본 프로젝트 규모',
        productTech: '기본 프로젝트 기술',
        productFullTech: 'empty',
        productLink: '',
        productInfo: '',
        right: true
    }

    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        }
        this.hoverOn  = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    hoverOn() {
        this.setState({
            isHover: true,
        });
    }

    hoverOff() {
        this.setState({
            isHover: false,
        });
    }

    render() {
        return (
            <div className="row mt-5 mb-5" data-aos="fade-up">
                <div className={"col-md-7 " + (!this.props.right ? 'order-md-5':'')}>
                    <img 
                        src={this.props.image1}
                        alt={this.props.imageDesc}
                        onMouseOver = {(event) => ( event.currentTarget.src = this.props.image2 )}
                        onMouseOut  = {(event) => ( event.currentTarget.src = this.props.image1 )}
                    />
                </div>
                <div className={"col-md-5 mt-auto mb-auto pl-3 " + (!this.props.right ? 'text-right':'')}>
                    <h3 className="font-bemin pt-5">{this.props.productName}</h3>
                    <ul className={"font-ridi " + (!this.props.right ? 'list-bar-right':'list-bar-left')}>
                        <li>{this.props.right ? "목적 : " : ""}{this.props.productDesc}{!this.props.right ? " : 목적" : ""}</li>
                        <li>{this.props.right ? "규모 : " : ""}{this.props.productSize}{!this.props.right ? " : 규모" : ""}</li>
                        <li
                            onMouseEnter = { this.hoverOn  }
                            onMouseLeave = { this.hoverOff }>
                            {this.props.right ? "기술 : " : ""}
                            {!this.state.isHover ? this.props.productTech : (this.props.productFullTech === 'empty') ? this.props.productTech : this.props.productFullTech}
                            {!this.props.right ? " : 기술" : ""}
                        </li>
                        <li>{this.props.productLink}</li>
                        <li>{this.props.productInfo}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function SectionProduct() {
    return (
        <section>
            <div className="container fill-auto-display">
                <h1 className="text-center font-bemin">Product.</h1>
                <Product
                    image1 = {require('./blex.png')}
                    image2 = {require('./blex.png')}
                    imageDesc = 'BLEX 대체 이미지'
                    productName = 'BLOG EXPRESS ME'
                    productDesc = '가입형 블로그 서비스 개발'
                    productSize = '단독 풀사이클 개발 (진행률 : 90%)'
                    productTech = 'django, PHP, FFmpeg 외 10'
                    productFullTech = 'django, PHP, FFmpeg, Amazon Lightsail, NginX, SQLite, jQuery, Bootstrap, CloudFlare, Google Fonts, Google Analytics, GitHub, Daum Mail'
                    productLink = {
                        [
                            <PurpleLink href="https://blex.kr" text="웹사이트"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/BLEX" text="소스 코드"/>,
                            ' / ',
                            <PurpleLink href="https://blex.kr/@baealex/%EA%B0%9C%EB%B0%9C%EB%85%B8%ED%8A%B8" text="업데이트 내역"/>,
                        ]
                    }
                    productInfo = {
                        [
                            <SocialLink logo="github" name="star" content="1"/>,
                            ' ',
                            <SocialLink logo="github" name="fork" content="1"/>,
                        ]
                    }
                    right = {true}
                />
                <Product
                    image1 = {require('./skycode.png')}
                    image2 = {require('./skycode.png')}
                    imageDesc = 'skycode 대체 이미지'
                    productName = 'SKYCODE'
                    productDesc = '입문자를 위한 코딩 튜토리얼 실습 활성화'
                    productSize = '단독 풀사이클 개발 (진행률 : 50%)'
                    productTech = 'Python, Flask'
                    productLink = {
                        [
                            <PurpleLink href="https://skycode.baejino.com" text="웹사이트"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/SkyCode" text="소스 코드"/>,
                        ]
                    }
                    productInfo = {
                        [
                            <SocialLink logo="github" name="star" content="1"/>,
                            ' ',
                            <SocialLink logo="github" name="fork" content="0"/>,
                        ]
                    }
                    right = {false}
                />
                <Product
                    image1 = {require('./skychat.png')}
                    image2 = {require('./skychat.png')}
                    imageDesc = 'skychat 대체 이미지'
                    productName = 'SKYCHAT'
                    productDesc = '웹 실시간 채팅 어플리케이션'
                    productSize = '단독 풀사이클 개발 (진행률 : 30%)'
                    productTech = 'Node.js, Express, Socket.io'
                    productLink = {
                        [
                            <PurpleLink href="https://github.com/baealex/SkyChat" text="소스 코드"/>,
                        ]
                    }
                    productInfo = {
                        [
                            <SocialLink logo="github" name="star" content="0"/>,
                            ' ',
                            <SocialLink logo="github" name="fork" content="0"/>,
                        ]
                    }
                    right = {true}
                />
                <Product
                    image1 = {require('./imgk.png')}
                    image2 = {require('./imgk.png')}
                    imageDesc = 'ImageKyll 대체 이미지'
                    productName = 'ImageKyll'
                    productDesc = '깃허브 블로그를 위한 이미지 도구'
                    productSize = '단독 풀사이클 개발(진행률 : 85%)'
                    productTech = 'C++, Qt Framework'
                    productLink = {
                        [
                            <PurpleLink href="https://www.dropbox.com/sh/9ohue147wg19bfe/AACUQhTCeULfkpNuYi0hOBSda?dl=1" text="다운로드(x64)"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/imagekyll" text="소스 코드"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/imagekyll/blob/master/changelog.md" text="업데이트 내역"/>,
                        ]
                    }
                    productInfo = {
                        [
                            <SocialLink logo="github" name="star" content="1"/>,
                            ' ',
                            <SocialLink logo="github" name="fork" content="0"/>,
                        ]
                    }
                    right = {false}
                />
            </div>
        </section>
    );
}

export default SectionProduct;
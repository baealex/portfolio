import React from 'react';
import axios from 'axios';

import GitHubButton from 'react-github-btn'

function PurpleLink(props) {
    return (
        <><a className="vivid-purple" href={props.href}>{props.text}</a> / </>
    )
}

class Product extends React.Component {
    static defaultProps = {
        gitgub: {
            username: '깃허브 아이디',
            reponame: '깃허브 저장소 이름',
        },
        image: {
            base: '기본 이미지',
            hover: '기본 이미지',
            desc: '기본 이미지 설명',
        },
        prod: {
            name: '기본 프로젝트 제목',
            desc: '기본 프로젝트 설명',
            size: '기본 프로젝트 규모',
            tech: '기본 프로젝트 기술',
            ftech: 'empty',
            link: '',
        },
        right: true
    }

    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            starCount: 0,
            forkCount: 0,
        }
    }

    hoverOn = () => {
        this.setState({
            isHover: true,
        });
    }

    hoverOff = () => {
        this.setState({
            isHover: false,
        });
    }

    render() {
        let prod = this.props.prod;
        let image = this.props.image;
        return (
            <div className="row mt-5 mb-5" data-aos="fade-up">
                <div className={"col-md-7 " + (!this.props.right ? 'order-md-5':'')}>
                    <img 
                        src={image.base}
                        alt={image.desc}
                        title={image.desc}
                        onMouseOver = {(event) => ( event.currentTarget.src = image.hover )}
                        onMouseOut  = {(event) => ( event.currentTarget.src = image.base )}
                    />
                </div>
                <div className={"col-md-5 mt-auto mb-auto pl-3 " + (!this.props.right ? 'text-right':'')}>
                    <h3 className="font-bemin pt-5">{prod.name}</h3>
                    <ul className={"font-ridi " + (!this.props.right ? 'list-bar-right':'list-bar-left')}>
                        <li>{this.props.right ? "목적 : " : ""}{prod.desc}{!this.props.right ? " : 목적" : ""}</li>
                        <li>{this.props.right ? "역할 : " : ""}{prod.size}{!this.props.right ? " : 역할" : ""}</li>
                        <li
                            onMouseEnter = { this.hoverOn  }
                            onMouseLeave = { this.hoverOff }>
                            {this.props.right ? "기술 : " : ""}
                            {!this.state.isHover ? prod.tech : (prod.ftech === 'empty') ? prod.tech : prod.ftech}
                            {!this.props.right ? " : 기술" : ""}
                        </li>
                        <li className="inner-list">
                            {
                                prod.link.map((link, index) => {
                                    return <PurpleLink href={link.href} text={link.text} key={index}/>
                                })
                            }
                        </li>
                    </ul>
                    <div className="gh-buttons">
                        <GitHubButton href={`https://github.com/${this.props.github.username}/${this.props.github.reponame}`} data-icon="octicon-star" data-show-count="true" aria-label={`Star ${this.props.github.username}/${this.props.github.reponame} on GitHub`}>Star</GitHubButton>
                        <GitHubButton href={`https://github.com/${this.props.github.username}/${this.props.github.reponame}/fork`} data-icon="octicon-repo-forked" data-show-count="true" aria-label={`Fork ${this.props.github.username}/${this.props.github.reponame} on GitHub`}>Fork</GitHubButton>
                    </div>
                </div>
            </div>
        )
    }
}

function SectionProduct() {
    const products = [
        {
            github: {
                username: 'baealex',
                reponame: 'BLEX',
            },
            image: {
                base: require('./blex.png'),
                hover: require('./blex.png'),
                desc: 'BLEX 대체 이미지',
            },
            prod: {
                name: 'BLOG EXPRESS ME',
                desc: '블로그 서비스 개발',
                size: '풀사이클 개발 (진행률 : 90%)',
                tech: 'django, PHP, FFmpeg 외 10',
                ftech: 'django, PHP, FFmpeg, Amazon Lightsail, NginX, SQLite, jQuery, Bootstrap, CloudFlare, Google Fonts, Google Analytics, GitHub, Daum Mail',
                link: [
                    {
                        href: 'https://blex.me',
                        text: '웹사이트',
                    },
                    {
                        href: 'https://github.com/baealex/BLEX',
                        text: '소스 코드',
                    },
                    {
                        href: 'https://blex.me/thread/%EA%B0%9C%EB%B0%9C%EB%85%B8%ED%8A%B8',
                        text: '업데이트 내역',
                    }
                ],
            },
            right: true,
        },
    ];
    return (
        <section>
            <div className="container fill-auto-display">
                <h1 className="text-center font-bemin" data-aos="fade-up">Product.</h1>
                {
                    products.map((product, index) => {
                        return <Product
                            github={product.github}
                            image={product.image}
                            prod={product.prod}
                            right={product.right}
                            key={index}
                        />
                    })
                }
                <div className="bae-card btn-block text-center c-pointer font-ridi">
                    더 보기
                </div>
            </div>
        </section>
    );
}

export default SectionProduct;
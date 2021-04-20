import React from 'react';
import Link from 'next/link';

function PurpleLink(props) {
    return (
        <a className="vivid-purple" href={props.href}>{props.text}</a>
    )
}

class Items extends React.Component {
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
                                    return <><PurpleLink href={link.href} text={link.text} key={index}/>{index !== prod.link.length - 1 ? ' / ' : ''}</>
                                })
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

function Product() {
    const products = [
        {
            github: {
                username: 'baealex',
                reponame: 'BLEX',
            },
            image: {
                base: '/assets/resource/blex.png',
                hover: '/assets/resource/blex.png',
                desc: 'BLEX 대체 이미지',
            },
            prod: {
                name: 'BLOG EXPRESS ME',
                desc: '블로그 서비스 개발',
                size: '풀사이클 개발',
                tech: 'Django, NextJS, FFmpeg 외 9',
                ftech: 'Django, NextJS, FFmpeg, Amazon Lightsail, NginX, SQLite, Bootstrap, CloudFlare, Google Fonts, Google Analytics, GitHub, Daum Mail',
                link: [
                    {
                        href: 'https://blex.me',
                        text: '웹사이트',
                    },
                    {
                        href: 'https://github.com/baealex/BLEX',
                        text: '깃허브',
                    },
                    {
                        href: 'https://www.notion.so/9b8b5cac32d947aa9396d9f57f2410be',
                        text: '개발 플래닝',
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
                        return <Items
                            github={product.github}
                            image={product.image}
                            prod={product.prod}
                            right={product.right}
                            key={index}
                        />
                    })
                }
                <Link href="/product">
                    <a className="more">
                        <div className="bae-card btn-block text-center c-pointer font-ridi" data-aos="fade-up">
                            더 보기
                        </div>
                        <style jsx>{`
                            div {
                                color: #000;
                                text-decoration: none;
                                
                                &:hover {
                                    color: #777;
                                    text-decoration: none;
                                }
                            }
                        `}</style>
                    </a>
                </Link>
            </div>
        </section>
    );
}

export default Product;
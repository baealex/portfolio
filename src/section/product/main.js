import React from 'react';
import BLEX from './1.png';
import Imagekyll from './2.png';

function PurpleLink(props) {
    return (
        <a className="vivid-purple" href={props.href}>{props.text}</a>
    )
}

class Product extends React.Component {
    static defaultProps = {
        image: '기본 이미지',
        imageDesc: '기본 이미지 설명',
        productName: '기본 프로젝트 제목',
        productDesc: '기본 프로젝트 설명',
        productSize: '기본 프로젝트 규모',
        productTech: '기본 프로젝트 기술',
        link: '',
        right: true
    }
    render() {
        return (
            <div className="row mt-5 mb-5" data-aos="fade-up">
                <div className={"col-md-7 " + (!this.props.right ? 'order-md-5':'')}>
                    <img src={this.props.image} alt={this.props.imageDesc}/>
                </div>
                <div className={"col-md-5 mt-auto mb-auto pl-3 " + (!this.props.right ? 'text-right':'')}>
                    <h3 className="font-bemin pt-5">{this.props.productName}</h3>
                    <ul className={"font-ridi " + (!this.props.right ? 'list-bar-right':'list-bar-left')}>
                        <li>{this.props.right ? "목적 : " : ""}{this.props.productDesc}{!this.props.right ? " : 목적" : ""}</li>
                        <li>{this.props.right ? "규모 : " : ""}{this.props.productSize}{!this.props.right ? " : 규모" : ""}</li>
                        <li>{this.props.right ? "기술 : " : ""}{this.props.productTech}{!this.props.right ? " : 기술" : ""}</li>
                        <li>{this.props.link}</li>
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
                    image = {BLEX}
                    imageDesc = 'BLEX 대체 이미지'
                    productName = 'BLOG EXPRESS ME'
                    productDesc = '가입형 블로그 서비스 개발'
                    productSize = '1인, Full cycle develop'
                    productTech = 'django, PHP, FFmpeg 외 10'
                    link = {
                        [
                            <PurpleLink href="https://blex.kr" text="사이트 방문"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/BLEX" text="소스 코드"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/BLEX/blob/master/CHANGELOG.md" text="업데이트 내역"/>,
                        ]
                    }
                    right = {true}
                />
                <Product
                    image = {Imagekyll}
                    imageDesc = 'ImageKyll 대체 이미지'
                    productName = 'ImageKyll'
                    productDesc = '깃허브 블로그를 위한 이미지 도구'
                    productSize = '1인, Full cycle develop'
                    productTech = 'C++, Qt Framework'
                    link = {
                        [
                            <PurpleLink href="https://www.dropbox.com/sh/9ohue147wg19bfe/AACUQhTCeULfkpNuYi0hOBSda?dl=1" text="다운로드"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/imagekyll" text="소스 코드"/>,
                            ' / ',
                            <PurpleLink href="https://github.com/baealex/imagekyll/blob/master/changelog.md" text="업데이트 내역"/>,
                        ]
                    }
                    right = {false}
                />
            </div>
        </section>
    );
}

export default SectionProduct;
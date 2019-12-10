import React from 'react';
import BLEX from './1.png';
import Imagekyll from './2.png';

function SectionProduct() {
    return (
        <section>
            <div className="container fill-auto-display">
                <h1 className="text-center font-bemin">Product.</h1>
                <div className="row mt-5 mb-5" data-aos="fade-up">
                    <div className="col-md-7">
                        <img src={BLEX} alt="블렉스의 대체 이미지"/>
                    </div>
                    <div className="col-md-5 mt-auto mb-auto pl-3">
                        <h3 className="font-bemin pt-5">BLOG EXPRESS ME</h3>
                        <ul className="font-ridi list-bar-left">
                            <li>목적 : 가입형 블로그 서비스 개발</li>
                            <li>규모 : 1인, Full cycle develop</li>
                            <li>기술 : django, PHP, FFmpeg 외 10</li>
                            <li><a className="vivid-purple" href="https://blex.kr">사이트 방문</a> / <a className="vivid-purple" href="https://github.com/baealex/BLEX">소스 코드</a> / <a className="vivid-purple" href="https://github.com/baealex/BLEX/blob/master/CHANGELOG.md">업데이트 내역</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5 mb-5" data-aos="fade-up">
                    <div className="col-md-7 order-md-5">
                        <img src={Imagekyll} alt="이미지킬의 대체 이미지"/>
                    </div>
                    <div className="col-md-5 mt-auto mb-auto pr-3 text-right">
                        <h3 className="font-bemin pt-5">Imagekyll</h3>
                        <ul className="font-ridi list-bar-right">
                            <li>깃허브 블로그를 위한 이미지 도구 : 목적</li>
                            <li>1인, Full cycle develop : 규모</li>
                            <li>C++, Qt Framework : 기술</li>
                            <li><a className="vivid-purple" href="https://www.dropbox.com/sh/9ohue147wg19bfe/AACUQhTCeULfkpNuYi0hOBSda?dl=1">다운로드</a> / <a className="vivid-purple" href="https://github.com/baealex/ImageEditor">소스 코드</a> / <a className="vivid-purple" href="https://github.com/baealex/ImageEditor/blob/master/changelog.md">업데이트 내역</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionProduct;
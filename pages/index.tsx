import {
    Card,
    Developer
} from '@components/integrated';

export default function Home() {
    return (
        <>
            <Developer />
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <Card isRounded className="mt-5 p-3">
                            서울에서 일하고 있는 2년차 웹 프로그래머입니다.
                            고객과 개발에만 집중할 수 있는 린(Lean) 개발을 선호합니다.
                            고객과 개발에 보다 집중하려면 풀사이클 개발을 해야한다고 믿습니다.
                            그럼에도 높은 생산성과 합리적인 사고가 이뤄지는 팀이라면
                            팀의 개발 방법론을 깊이 배우고 적응하겠습니다.
                        </Card>
                        <Card isRounded className="mt-4 p-3">
                            <h2 className="mt-2 mb-4">Experience</h2>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h4>주피타카</h4>
                                    <div>Platform Developer</div>
                                    <p>2020. 02 - 현재</p>
                                </div>
                                <div className="col-lg-9">
                                    <h4>스크래핑 플랫폼</h4>
                                    <h6>프로젝트 설명?</h6>
                                    <p>
                                        개인 사업자를 대상으로 운영되는 사계부와 주카를 이용하시는
                                        사장님들의 금융 데이터(계좌/카드/배달앱/세금계산서)를
                                        수집하는 프레임워크
                                    </p>
                                    <h6>담당한 업무?</h6>
                                    <ul>
                                        <li>Object Detection을 이용한 캡차 솔루션 구현</li>
                                        <li>이미지 분석을 이용한 마우스 보안 키패드 솔루션 구현</li>
                                        <li>실시간 로그 알리미(Slack + GrayLog) 제작</li>
                                        <li>기존 모듈 유지보수 및 신규 모듈 추가</li>
                                    </ul>
                                    <h6>사용한 기술?</h6>
                                    <p>
                                        Node.js, Puppeteer
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card isRounded className="mt-4 p-3">
                            <h2 className="mt-2 mb-4">Technology</h2>
                        </Card>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .social-name {
                    font-size: 0.8rem;
                    font-weight: bold;
                }

                .social-nick {
                    font-size: 0.8rem;
                    color: rgba(0, 0, 0, .5);
                }
            `}</style>
        </>
    )
}
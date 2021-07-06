import {
    Text,
    MailButton,
    BlinkHello,
    Experience,
} from '@components/integrated';

export default function Home() {
    return (
        <>
            <div className="container my-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="my-5 pt-5">
                            <BlinkHello
                                fontSize="big"
                                texts={[
                                    '개발을 좋아하는',
                                    '기록을 좋아하는',
                                    '파이썬을 좋아하는',
                                    '보라색을 좋아하는',
                                ]}
                            />
                        </div>
                        <div className="my-5 pb-5">
                            <Text fontSize="small" fontWeight={400}>
                                서울에서 일하고 있는 2년차 웹 개발자입니다.
                                무형의 아이디어가 시각적으로 실현되는 과정을 즐거워 합니다.
                                기록하는 것을 좋아하여 블로그에 많은 관심을 가지고 있습니다.{' '}
                                <a className="vivid-purple" href="https://blex.me/@baealex/pythonic%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80">
                                    파이써닉
                                </a>
                                한 코드를 작성하기 위해 노력합니다.
                            </Text>
                        </div>
                        <div className="mt-5">
                            <Text headline fontSize="big" fontWeight={700}>
                                업무 경험
                            </Text>
                            <Experience
                                company="주피타카"
                                startDate="2020. 02."
                                role="Platform Developer"
                                projects={[
                                    {
                                        title: '주카(JUCA) 랜딩 페이지',
                                        startDate: '2021. 06.',
                                        endDate: '2021. 06.',
                                        reference: 'https://www.juca.kr',
                                        picture: '/assets/images/project/juca.png',
                                        description: '디자인 가이드에 맞춰 랜딩 페이지를 제작했습니다.',
                                        doings: [
                                            '풀 페이지 애니메이션 구현',
                                            '음절 단위 한글 타이핑 애니메이션 구현',
                                        ],
                                        techStack: ['Typescript', 'Next.js'],
                                    },
                                    {
                                        title: '스크래핑 플랫폼',
                                        startDate: '2020. 02.',
                                        picture: '/assets/images/project/bossbook.png',
                                        description: (
                                            '사계부와 주카를 이용하는 사장님들의 금융정보를 ' +
                                            '수집하는 자체 프레임워크입니다.'
                                        ),
                                        doings: [
                                            'Object Detection을 활용한 캡차 솔루션 구현',
                                            '이미지 유사도를 측정하여 마우스 키패드 솔루션 구현',
                                            '실시간 스크래핑 오류 알리미(GrayLog + Slack) 구현',
                                            '신규 모듈 개발 및 기존 모듈 유지보수'
                                        ],
                                        techStack: ['Javascript', 'Node.js', 'Puppeteer', 'PM2'],
                                    }
                                ]}
                            />
                        </div>
                        <div className="mt-5">
                            <Text headline fontSize="big" fontWeight={700}>
                                개인 프로젝트
                            </Text>
                            <Experience
                                company="BLEX"
                                startDate="2019. 06."
                                role="Full Cycle Developer"
                                projects={[
                                    {
                                        title: 'BLOG EXPRESS ME',
                                        startDate: '2019. 06.',
                                        reference: 'https://blex.me',
                                        picture: '/assets/images/project/blex.png',
                                        description: (
                                            '블로그는 더 이상 새로워질 수 없는 걸까요? ' +
                                            '시작은 다소 초라할지 모르지만 ' +
                                            '블렉스가 블로그의 판도를 뒤엎는 3세대 블로그가 되겠습니다.'
                                        ),
                                        doings: [
                                            'REST API를 응용한 백엔드 API 구성',
                                            'Atomic 디자인을 응용한 프론트엔드 구성',
                                            '메인 브런치 Merge시 배포 자동화(Docker) 구성'
                                        ],
                                        techStack: ['Python', 'Django', 'Typescript', 'Next.js', 'Docker'],
                                    }
                                ]}
                            />
                        </div>
                        <div className="mt-5">
                            <Text headline fontSize="big" fontWeight={700}>
                                기타 경험
                            </Text>
                            <Experience
                                company="한라대학교"
                                startDate="2014. 03."
                                endDate="2020. 02."
                                role="컴퓨터 공학과 졸업"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MailButton/>
        </>
    )
}
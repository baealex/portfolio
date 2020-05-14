import React from 'react';

import './style.scss';

function Box(props) {
    return(
        <div className="box" onClick={() => window.location.href=props.prod.href}>
            <img src={props.prod.image}/>
            <div className="text">
                <div className="title font-bemin">
                    {props.prod.title}
                </div>
                <div className="subtitle font-ridi">
                    {props.prod.subtitle}
                </div>
            </div>
        </div>
    )
}

function Products() {
    const prodList = [
        {
            image: require('./resource/kc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745568559381',
            title: 'KorCoding',
            subtitle: '한글 코딩 라이브러리',
        },
        {
            image: require('./resource/txwg.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745694962248',
            title: 'TextWidget',
            subtitle: '데스크톱 텍스트 위젯',
        },
        {
            image: require('./resource/sk2.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745659312288',
            title: 'SkyNote2',
            subtitle: '데스크톱 메모장',
        },
        {
            image: require('./resource/iuc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745641464083',
            title: 'IUCalendar',
            subtitle: '데스크톱 달력 위젯',
        },
        {
            image: require('./resource/gbgk.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745825743059',
            title: 'GoodBeyDPI',
            subtitle: 'HTTPS 우회 유틸',
        },
        {
            image: require('./resource/ic.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745807018234',
            title: 'ImageCompressor',
            subtitle: '이미지 압축기',
        },
        {
            image: require('./resource/imjk.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745780641048',
            title: 'imagekyll',
            subtitle: '깃헙 블로그 유틸',
        },
        {
            image: require('../Index/components/Product/resource/blex.png'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745834405163',
            title: 'BLEX',
            subtitle: 'BLOG Service',
        },
        {
            image: require('./resource/cr.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745834405163',
            title: 'CodeRunner',
            subtitle: '웹 IDE',
        },
        {
            image: require('./resource/kwc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587745841260191',
            title: 'SkyChat',
            subtitle: 'Kakao Style Real-Time Chat',
        },
        {
            image: require('./resource/snsnc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/1587746004698740',
            title: 'SNSNC',
            subtitle: '소셜 닉네임 유효성 조회',
        },
    ]
    const box = prodList.map((prod, idx) => 
        (<Box key={idx} prod={prod}/>)
    );
    return(
        <div className="grid">
            {box}
        </div>
    )
}

export default Products;
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
            href: 'https://github.com/baealex/KorCoding',
            title: 'KorCoding',
            subtitle: '한글 코딩 (Source Code)',
        },
        {
            image: require('./resource/txwg.jpg'),
            href: 'https://www.dropbox.com/sh/g10z7q7ecs8fab9/AAADWShDyU6-PBkb2bGZc9t8a?dl=1',
            title: 'TextWidget',
            subtitle: '텍스트 위젯 (Windows 7+ x64)',
        },
        {
            image: require('./resource/sk2.jpg'),
            href: 'https://www.dropbox.com/sh/t5f4y8v8lvmdsez/AAC9pKrbXGZOatorYsRxyBDGa?dl=1',
            title: 'SkyNote2',
            subtitle: '메모장 (Windows 7+ x64, Service Closed)',
        },
        {
            image: require('./resource/iuc.jpg'),
            href: 'https://www.dropbox.com/sh/acxa647t1bazap6/AAAv0A-GPzLyeaotKFCuM7tHa?dl=1',
            title: 'IUCalendar',
            subtitle: '달력 위젯 (Windows 7+ x64)',
        },
        {
            image: require('./resource/gbgk.jpg'),
            href: 'https://www.dropbox.com/sh/kp2odl9wgcbqo7s/AABYZfqsHGr9wlqXim22CLHCa?dl=1',
            title: 'GoodBeyDPI',
            subtitle: 'GoodBeyDPI GUI 한글판 (Windows 7+ x64)',
        },
        {
            image: require('./resource/ic.jpg'),
            href: 'https://www.dropbox.com/sh/th9esdez9pur56c/AADE2fl9HGf66kFNbORLxZp7a?dl=1',
            title: 'ImageCompressor',
            subtitle: '이미지 압축기 (Windows 7+ x64)',
        },
        {
            image: require('./resource/imjk.jpg'),
            href: 'https://www.dropbox.com/sh/9ohue147wg19bfe/AACUQhTCeULfkpNuYi0hOBSda?dl=1',
            title: 'imagekyll',
            subtitle: '깃헙 블로그 유틸 (Windows 7+ x64)',
        },
        {
            image: require('./resource/tsjt.jpg'),
            href: 'https://github.com/baealex/time-switch-jekyll-theme',
            title: 'TimeSwitch',
            subtitle: 'Jekyll Theme (Source Code)',
        },
        {
            image: require('./resource/cr.jpg'),
            href: 'https://coderunner.baejino.com',
            title: 'CodeRunner',
            subtitle: '웹 IDE (Web, Service Closed)',
        },
        {
            image: require('./resource/kwc.jpg'),
            href: 'https://github.com/baealex/SkyChat',
            title: 'SkyChat',
            subtitle: 'Kakao Style Real-Time Chat (Source Code)',
        },
        {
            image: require('./resource/snsnc.jpg'),
            href: 'https://snsnc.baejino.com',
            title: 'SNSNC',
            subtitle: '소셜 닉네임 유효성 조회 (Web)',
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
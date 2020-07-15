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
            href: 'https://blex.me/thread/toy-project/@baealex/korcoding',
            title: 'KorCoding',
            subtitle: 'Korean Coding Library',
        },
        {
            image: require('./resource/txwg.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/textwidget',
            title: 'TextWidget',
            subtitle: 'Windows Text Widget',
        },
        {
            image: require('./resource/sk2.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/skynote2',
            title: 'SkyNote2',
            subtitle: 'Windows Notepad',
        },
        {
            image: require('./resource/iuc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/iucalendar',
            title: 'IUCalendar',
            subtitle: 'Windows Calendar Widget',
        },
        {
            image: require('./resource/np.png'),
            href: 'https://blex.me/thread/toy-project/@baealex/notephpad',
            title: 'NotePHPad',
            subtitle: 'Web Notepad',
        },
        {
            image: require('./resource/gbgk.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/goodbydpi-gui-korean',
            title: 'GoodBeyDPI Korean',
            subtitle: 'Windows HTTPS Bypass Utility Localize',
        },
        {
            image: require('./resource/ic.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/imagecompressor',
            title: 'ImageCompressor',
            subtitle: 'Windows Image(PNG, JPG) Compressor',
        },
        {
            image: require('./resource/imjk.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/imagekyll',
            title: 'imagekyll',
            subtitle: 'Windows Jekyll Image Utility',
        },
        {
            image: require('../Index/components/Product/resource/blex.png'),
            href: 'https://blex.me/thread/toy-project/@baealex/blex',
            title: 'BLEX',
            subtitle: 'BLOG Service',
        },
        {
            image: require('./resource/kwc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/skychat',
            title: 'SkyChat',
            subtitle: 'Kakao Style Real-Time Chat',
        },
        {
            image: require('./resource/cr.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/coderunner',
            title: '코딩 도우미',
            subtitle: 'Web Code Runner',
        },
        {
            image: require('./resource/snsnc.jpg'),
            href: 'https://blex.me/thread/toy-project/@baealex/snsnc',
            title: '작명 도우미',
            subtitle: 'Social Network Service Nickname Checker',
        },
        {
            image: require('./resource/nd.png'),
            href: 'https://blex.me/thread/toy-project/@baealex/노션-도우미',
            title: '노션 도우미',
            subtitle: 'Guide, Google Analytics',
        }
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
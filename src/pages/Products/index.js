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
            subtitle: 'Korean Coding Library',
        },
        {
            image: require('./resource/txwg.jpg'),
            href: 'https://github.com/baealex/TextWidget',
            title: 'TextWidget',
            subtitle: 'Windows Text Widget',
        },
        {
            image: require('./resource/sk2.jpg'),
            href: 'https://github.com/baealex/SkyNote',
            title: 'SkyNote2',
            subtitle: 'Windows Notepad',
        },
        {
            image: require('./resource/iuc.jpg'),
            href: 'https://github.com/baealex/IUCalendar',
            title: 'IUCalendar',
            subtitle: 'Windows Calendar Widget',
        },
        {
            image: require('./resource/np.png'),
            href: 'https://github.com/baealex/SkyNote',
            title: 'SkyNote3',
            subtitle: 'Web Notepad',
        },
        {
            image: require('./resource/imjk.jpg'),
            href: 'https://github.com/baealex/imagekyll',
            title: 'imagekyll',
            subtitle: 'Windows Jekyll Image Utility',
        },
        {
            image: require('../Index/components/Product/resource/blex.png'),
            href: 'https://github.com/baealex/BLEX',
            title: 'BLEX',
            subtitle: 'BLOG Service',
        },
        {
            image: require('./resource/kwc.jpg'),
            href: 'https://github.com/baealex/SkyChat',
            title: 'SkyChat',
            subtitle: 'Kakao Style Real-Time Chat',
        },
        {
            image: require('./resource/cr.jpg'),
            href: 'https://github.com/baealex/code-runner',
            title: 'Code Runner',
            subtitle: 'Simple Web Coding IDE',
        },
        {
            image: require('./resource/snsnc.jpg'),
            href: 'https://github.com/baealex/snsnc',
            title: 'SNSNC',
            subtitle: 'Social Network Service Nickname Checker',
        },
        {
            image: require('./resource/nd.png'),
            href: 'https://github.com/baealex/notility',
            title: 'Notility',
            subtitle: 'Notion Third-Party-App',
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
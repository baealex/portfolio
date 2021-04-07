import React from 'react';

import './style.scss';

interface BoxProps {
    href: string;
    image: string;
    title: string;
    subTitle: string
}

function Box(props: BoxProps) {
    return(
        <div className="box" onClick={() => window.location.href=props.href}>
            <img src={props.image}/>
            <div className="text">
                <div className="title font-bemin">
                    {props.title}
                </div>
                <div className="subtitle font-ridi">
                    {props.subTitle}
                </div>
            </div>
        </div>
    )
}

export default function Product() {
    const prodList = [
        {
            image: '/assets/resource/koco.jpg',
            href: 'https://github.com/baealex/KorCoding',
            title: 'Koco',
            subTitle: 'Korean Coding Library',
        },
        {
            image: '/assets/resource/text-widget.jpg',
            href: 'https://github.com/baealex/TextWidget',
            title: 'TextWidget',
            subTitle: 'Windows Text Widget',
        },
        {
            image: '/assets/resource/iu-calendar.jpg',
            href: 'https://github.com/baealex/IUCalendar',
            title: 'IUCalendar',
            subTitle: 'Windows Calendar Widget',
        },
        {
            image: '/assets/resource/skynote.png',
            href: 'https://github.com/baealex/SkyNote',
            title: 'SkyNote',
            subTitle: 'Notepad Website',
        },
        {
            image: '/assets/resource/imajekyll.jpg',
            href: 'https://github.com/baealex/imagekyll',
            title: 'imagekyll',
            subTitle: 'Windows Jekyll Image Utility',
        },
        {
            image: '/assets/resource/blex.png',
            href: 'https://github.com/baealex/BLEX',
            title: 'BLEX',
            subTitle: 'BLOG Service',
        },
        {
            image: '/assets/resource/skychat.jpg',
            href: 'https://github.com/baealex/flowing',
            title: 'Flowing',
            subTitle: 'Real-One-Time Chat',
        },
        {
            image: '/assets/resource/code-runner.jpg',
            href: 'https://github.com/baealex/code-runner',
            title: 'Code Runner',
            subTitle: 'Simple Web Coding IDE',
        },
        {
            image: '/assets/resource/snsnc.jpg',
            href: 'https://github.com/baealex/snsnc',
            title: 'SNSNC',
            subTitle: 'Social Network Service Nickname Checker',
        },
        {
            image: '/assets/resource/notility.png',
            href: 'https://github.com/baealex/notility',
            title: 'Notility',
            subTitle: 'Notion Third-Party-App',
        }
    ];

    return(
        <div className="grid">
            {prodList.map((item, idx) => (
                <Box key={idx} {...item}/>
            ))}
        </div>
    )
}
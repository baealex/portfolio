import styles from './BlinkHello.module.scss';
import classNames from 'classnames';

import {
    useEffect,
    useState,
} from 'react';

import { Text, FontSize } from '@components/integrated';

export interface BlinkHelloProps {
    texts: string[];
    fontSize?: FontSize;
}

export function BlinkHello(props: BlinkHelloProps) {
    const {
        texts,
        fontSize = 'normal',
    } = props;

    const [ isReady, setIsReady ] = useState(false);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        setIsReady(true);
        const event = setInterval(() => {
            setCount((prevCount) => {
                const nextCount = prevCount + 1;
                if (nextCount >= texts.length) {
                    return 0;
                }
                return nextCount;
            })
        }, 4000);
        return () => clearInterval(event);
    }, []);

    return (
        <>
            <Text fontSize={fontSize} fontWeight={700}>
                안녕하세요!<br/>
                <span className={classNames(isReady && styles['blink-hello'])}>
                    {props.texts[count]}
                </span><br/>
                개발자 배진오입니다.
            </Text>
        </>
    );
}
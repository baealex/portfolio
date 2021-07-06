import styles from './Badge.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export interface BadgeProps {
    children: any;
}

export function Badge(props: BadgeProps) {
    return (
        <div className={cn('badge')}>{props.children}</div>
    )
}
import styles from './Text.module.scss';
import classNames from 'classnames';

export type FontSize = 'mini' | 'tiny' | 'small' | 'normal' | 'big' | 'huge' | 'giant';

export interface TextProps {
    children: any;
    fontSize?: FontSize;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    headline?: boolean;
};

export function Text(props: TextProps) {
    const {
        fontSize = 'normal',
        fontWeight = 400,
        headline = false,
    } = props;
    return (
        <>
            <div
                className={classNames(
                    styles.text,
                    styles[`size-${fontSize}`],
                    fontWeight !== 400 ? styles[`fw-${fontWeight / 100}`] : undefined,
                    headline && styles['headline'],
                )}
            >
                {props.children}
            </div>
        </>
    );
}

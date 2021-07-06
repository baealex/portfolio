import styles from './MailButton.module.scss';
import classNames from 'classnames';

export function MailButton() {
    return (
        <a href="mailto:baealex@hey.com">
            <div className={classNames(styles['mail-button'])}>
                <i className="fas fa-envelope"></i>
            </div>
        </a>
    );
}
import styles from './Footer.module.scss';
import classNames from 'classnames';

import { Text } from '../../atoms/text';

export function Footer() {
    return(
        <footer className="footer mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <nav className={classNames(styles.social)}>
                            <div>
                                <a href="https://blex.me/@baealex">
                                    <i className="fas fa-rss-square"></i>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/baealex">
                                    <i className="fab fa-github-square"></i>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCuupY_WlY6cPKEnpNNSVRpA">
                                    <i className="fab fa-youtube-square"></i>
                                </a>
                            </div>
                        </nav>
                        <Text fontSize="mini">
                            Copyright © {(new Date().getFullYear())} BaeJino.
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    )
}
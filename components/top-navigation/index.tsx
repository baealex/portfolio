import Link from 'next/link';

export default function () {
    return (
        <nav className="fixed-top navbar navbar-expand navbar-light bg-clarity">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/assets/images/logo.png" alt="BaeJino"/>
                    </a>
                </Link>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link href="/product">
                            <a className="nav-link">
                                Product
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/palette">
                            <a className="nav-link">
                                Palette
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
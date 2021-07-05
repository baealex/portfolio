export function Developer() {
    return (
        <>
            <div className="top">
                <div className="d-flex align-items-center justify-content-center">
                    <img className="mx-3" src="https://avatars2.githubusercontent.com/u/35596687"/>
                    <h1 className="mx-3 ns">
                        안녕하세요!<br/>
                        저는 <span className="ember">배진오</span>입니다.
                    </h1>
                </div>
                <div className="status ns">
                    💻 재직중
                </div>
                <a href="mailto:baealex@hey.com">
                    <div className="contact-email ns">
                        <i className="fas fa-envelope"></i>
                    </div>
                </a>
            </div>
            <style jsx>{`
                .top {
                    position: relative;
                    background: #474787;
                    padding: 5rem 0;
                    color: #fff;
                }

                .status {
                    position: absolute;
                    background: #fff;
                    border-radius: 5px;
                    padding: 5px 10px;
                    color: #000;
                    top: 15px;
                    left: 15px;
                }

                .contact-email {
                    transition: all 0.5s;
                    position: fixed;
                    background: #fff;
                    border-radius: 5px;
                    bottom: 15px;
                    right: 15px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
                    color: #706fd3;
                    text-decoration: none;

                    &::after {
                        width: 0px;
                        overflow: hidden;
                        content: 'baealex@hey.com';
                        color: #555;
                        transition: all 0.5s;
                    }

                    &:hover {
                        &::after {
                            margin-left: 8px;
                            width: 140px;
                        }
                        width: 200px;
                    }

                    i {
                        font-size: 1.5rem;
                    }
                }
                
                .social {

                }

                img {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 100%;
                }
            `}</style>
        </>
    )
}
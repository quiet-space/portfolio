import './intro.css'

export function Intro() {
    return <div className="intro-wrap">
        <div className="point"/>
        <div className="section">
            <div className="self-desc">
                <img src={require("../assets/profile.png")}
                     className="profile-img"
                     alt="profile img"/>
                DICTIONARY JUNE
                <span>
                    DDSFADFASDFASDFSADFD
                </span>
            </div>

            <div className="bottom">
                {/*폼 디자인: 간단한 연락처 폼을 추가해 채용 담당자나 방문자가 직접 연락할 수 있도록 해.*/}
                {/*Footer에 SNS 및 Email 아이콘: 페이지 하단에 소셜 미디어와 이메일 아이콘을 배치해 접근성을 높여 줘.*/}

                <span>
                    liexil97@gmail.com
                </span>

                <a href="https://github.com/quiet-space" target='_blank'>
                    <img src={require("../assets/icons/github.png")}
                         alt="github icon"
                         width="30" height="30"
                    />
                </a>
            </div>
        </div>
        <div className="point"/>
    </div>
}
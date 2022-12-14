import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    const estiloDaHomePage = { backgroundColor: "#ffffff" };



    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <Menu />
//         <div>
//             Menu
//         </div>
//     );
// }

const StyledComponents = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledComponents>
            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.occupation}
                    </p>
                </div>
            </section>
        </StyledComponents>
    );
}

function Timeline(props) {

    const playlistsNames = Object.keys(props.playlists);
    // retorno por expressao
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

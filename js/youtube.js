// youtube IFrame API를 비동기로 로드합니다.

let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*
    onYouTubePlayerAPIReady 함수 이름은
    Youtube IFrame Player API에서 사용하는 이름이기 때문에
    다르게 지정하면 동작하지 않음
    그리고 함수는 전역(Global) 등록해야 함.
*/

function onYouTubePlayerAPIReady() {
    //<div id="player"></div>
    new YT.Player('player', {
        videoId: 'YGZLvKAFeYI', // 최초 재생할 유튜브 영상 id
        playerVars: {
            autoplay: true, // 자동 재생 여부
            loop: true, // 반복 재생 유무
            playlist: 'YGZLvKAFeYI'   //반복 재생할 유튜브 영상 id
        },
        events: {
            //영상이 준비되었을 때
            onReady: function (event) {
                event.target.mute() // 음소거
            }
        }
    })

    new YT.Player('player1', {
        videoId: 'uyjQyjWJSqM', // 최초 재생할 유튜브 영상 id
        playerVars: {
            autoplay: true, // 자동 재생 여부
            loop: true, // 반복 재생 유무
            playlist: 'uyjQyjWJSqM'   //반복 재생할 유튜브 영상 id
        },
        events: {
            //영상이 준비되었을 때
            onReady: function (event) {
                event.target.mute() // 음소거
            }
        }
    })

    new YT.Player('player2', {
        videoId: 'SEv4YeRbrSk', // 최초 재생할 유튜브 영상 id
        playerVars: {
            autoplay: true, // 자동 재생 여부
            loop: true, // 반복 재생 유무
            playlist: 'SEv4YeRbrSk'   //반복 재생할 유튜브 영상 id
        },
        events: {
            //영상이 준비되었을 때
            onReady: function (event) {
                event.target.mute() // 음소거
            }
        }
    })
}


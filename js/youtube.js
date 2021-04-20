// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 아이디 
    playerVars: {
      autoplay: true, //자동재생 여부
      loop: true, //반복재생 여부 
      playlist: 'An6LvWQuj_8', //반복재생할 유튜브 아이디를 넣어줘야함. 루프 다음
    },
    events: {
      onReady: (event)=>{
        event.target.mute() // 영상 준비되면 . 음소거를 실행하겠다.
      }
    }
  });
}
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: 'Hotel California',
        artist: 'Eagles',
        url: 'http://music.163.com/song/media/outer/url?id=5264843.mp3',
        cover: '/images/hotel.png',
      },
      {
        name: "野子",
        artist: '苏运莹',
        url: 'http://music.163.com/song/media/outer/url?id=401723037.mp3',
        cover: '/images/yezi.png',
      }
    ]
});


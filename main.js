if(Hls.isSupported()) {
    let video = document.getElementById('video');
    let hls = new Hls();
    hls.loadSource('stream.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
}

var visioc = {};

visioc.version = "0.1.8";

visioc.recordedBlobs;
visioc.mediaRecorder;
visioc.stream;
visioc.id = 0;
visioc.dbv = 4;
visioc.token = ''

visioc.handleDataAvailable = function (event) {
    if (event.data && event.data.size > 0) {
        visioc.recordedBlobs.push(event.data);
    }
}

visioc.startRec = function () {
    visioc.mediaRecorder.start();
}

visioc.stopRec = function () {
    visioc.mediaRecorder.stop(10);
    visioc.stream.getTracks().forEach(track => track.stop());
}

visioc.downloadRecRoom = function () {
    const blob = new Blob(visioc.recordedBlobs, {type: 'video/webm'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'v-' + visioc.token + '.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
}

visioc.initRec = async function (token) {
    document.domain = 'kyc.tn';
    visioc.token = token;
    visioc.id = 0;
    visioc.recordedBlobs = [];

    let option1 = { audio: true, video: true };
    var sdoc = document.getElementsByTagName('iframe')[0];
    var docI1 = sdoc.contentDocument;

    var video = docI1.getElementById('largeVideo');

    if (!video.captureStream) {
        video.captureStream = video.mozCaptureStream;
    }

    var vstream = video.captureStream();
    var combinedStream = vstream;
    var audio = docI1.querySelector('audio[id^="remote"]');

    if (audio) {
        if (!audio.captureStream) {
            audio.captureStream = audio.mozCaptureStream;
        }
        var astream = audio.captureStream();
        combinedStream = new MediaStream([...vstream.getTracks(), ...astream.getTracks()]);
    }

    visioc.stream = combinedStream;
    visioc.mediaRecorder = new MediaRecorder(visioc.stream, option1);
    visioc.mediaRecorder.ondataavailable = visioc.handleDataAvailable;
}

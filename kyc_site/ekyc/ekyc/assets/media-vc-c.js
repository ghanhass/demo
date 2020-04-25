var visioc = {};

visioc.version = "0.1.8";
visioc.id = 0;
visioc.dbv = 4;
visioc.token = ''

visioc.startRec = function () {
    visioc.api.startRec();
}

visioc.stopRec = function () {
    visioc.api.stopRec();
}

visioc.downloadRecRoom = function () {
    visioc.api.downloadRecRoom();
}

visioc.initRec = async function (token) {
    document.domain = 'kyc.tn';
    visioc.token = token;
    visioc.id = 0;
    var sdoc = document.getElementsByTagName('iframe')[0];
    visioc.api = sdoc.contentWindow.v_api_2;
    visioc.api.initRec(token);
}

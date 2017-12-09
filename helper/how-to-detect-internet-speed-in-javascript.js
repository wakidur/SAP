/**
 * How to detect internet speed in Javascript?
 * How can I create a Javascript page that will detect the user's internet speed and show it on the page? Something like your internet speed is ??/?? Kb/s.
 * 
 * It's possible to some extent but won't be really accurate, the idea is load image with a known file size then in its onload event measure how much time passed until that event was triggered, and divide this time in the image file size.
 * 
 */

// Just an wxample please your own picture
var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg",
    downloadSize = 4995374; //bytes
function showProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (let i = 0; i < msg.length; i++) {
                console.log(msg[i]);

            }
        }
    }
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br/>");
        oProgress.innerHTML = actualHTML;
    }

}

function initiateSpeedDetection() {
    showProgressMessage("Loading the image, please wait...");
    window.setTimeout(measureConnectionSpeed, 1);
}

if (window.addEventListener) {
    window.addEventListener('load', initiateSpeedDetection.false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initiateSpeedDetection)
}

function measureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function() {
        endTime = (new Data()).getTime();
        showResults()
    }

    download.onerror = function(err, msg) {
        showProgressMessage("Invalid image, or error downloading");
    }

    startTime = (new Data()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = download * 8;
        var speedBpx = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            "Your connection speed is:",
            speedBps + " bps",
            speedKbps + " kbps",
            speedMbps + " Mbps"
        ]);
    }
}
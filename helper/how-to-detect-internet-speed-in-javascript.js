/**
 * How to detect internet speed in Javascript?
 * How can I create a Javascript page that will detect the user's internet speed and show it on the page? Something like your internet speed is ??/?? Kb/s.
 * 
 * It's possible to some extent but won't be really accurate, the idea is load image with a known file size then in its onload event measure how much time passed until that event was triggered, and divide this time in the image file size.
 * 
 */

// Just an wxample please your own picture
 // How to detect internet speed in Javascript?
        // https://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript

        // <h1 id="progress">JavaScript is turned off, or your browser is realllllly slow</h1>
        var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg";
        var downloadSize = 4995374; //bytes

        function ShowProgressMessage(msg) {
            // if (console) {
            if (typeof msg == "string") {
                console.log(msg);
            } else {
                for (var i = 0; i < msg.length; i++) {
                    console.log(msg[i]);
                }
            }
            // }

            var oProgress = document.getElementById("progress");
            if (oProgress) {
                var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
                oProgress.innerHTML = actualHTML;
            }
        }

        function InitiateSpeedDetection() {
            ShowProgressMessage("Loading the image, please wait...");
            window.setTimeout(MeasureConnectionSpeed, 1);
        };

        if (window.addEventListener) {
            window.addEventListener('load', InitiateSpeedDetection, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', InitiateSpeedDetection);
        }

        function MeasureConnectionSpeed() {
            var startTime, endTime;
            var download = new Image();
            download.onload = function() {
                endTime = (new Date()).getTime();
                showResults();
            }

            download.onerror = function(err, msg) {
                ShowProgressMessage("Invalid image, or error downloading");
            }

            startTime = (new Date()).getTime();
            var cacheBuster = "?nnn=" + startTime;
            download.src = imageAddr + cacheBuster;

            function showResults() {
                var duration = (endTime - startTime) / 1000;
                var bitsLoaded = downloadSize * 8;
                var speedBps = (bitsLoaded / duration).toFixed(2);
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

         //javascript array - comparing elements with other elements within the same array
        // https://stackoverflow.com/questions/47726004/javascript-array-comparing-elements-with-other-elements-within-the-same-array

        var array = [
            ['LA', '2017-12-01'],
            ['LA', '2017-12-01'],
            ['NY', '2017-12-01'],
            ['NY', '2016-10-01'],
            ['LA', '2017-12-01'],
            ['KB', '2017-11-03'],
            ['LC', '2018-12-02']
        ];
        




        var count = 1;
        var key1, key2;

        function getDynamicArray(arr) {
            for (var i = 0; i < arr.length; i++) {
                key1 = arr[i][0] + '-' + arr[i][1];
                for (var j = 0; j < arr.length; j++) {
                    key2 = arr[j][0] + '-' + arr[j][1];
                    if (key1 === key2) {
                        arr[i][2] = count;
                    } else {
                        count++;
                        arr[j][2] = count;
                    }
                }
            }
            return arr;
        }
        getDynamicArray(array);


        function comparingElementsWitOther(arrayOfElements) {
            var n = 0;
            var newArray = [];
            var mymap = {};
            newArray = arrayOfElements.map(function(value) {
                var label = value[0] + "-" + value[1];
                if (!mymap[label]) {
                    mymap[label] = ++n;
                }
                return value.concat([mymap[label]]);

            });
            return newArray;
        }

        var xs = [
            ['LA', '2017-12-01'],
            ['LA', '2017-12-01'],
            ['NY', '2017-12-01'],
            ['NY', '2016-10-01'],
            ['LA', '2017-12-01'],
            ['LA', '2017-12-01'],
            ['LA', '2017-12-01']
        ];

        comparingElementsWitOther(xs)
{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":7},"action":"insert","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });"],"id":1}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":[";"],"id":2},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":[")"]}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":[")"],"id":3}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["}"],"id":4}],[{"start":{"row":7,"column":6},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":8,"column":1},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    })","}",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });","","    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}"]}],[{"start":{"row":9,"column":3},"end":{"row":25,"column":1},"action":"remove","lines":[" var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}"],"id":7}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["","   "],"id":8},{"start":{"row":7,"column":7},"end":{"row":8,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":[";"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["}"],"id":9}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":[" "],"id":10},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":[";"]}],[{"start":{"row":7,"column":6},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"remove","lines":[" "]},{"start":{"row":8,"column":2},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"remove","lines":[";"],"id":12}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":[";"],"id":13}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":[";"],"id":14},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":[";"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":[";"],"id":15}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":0},"end":{"row":9,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":95,"mode":"ace/mode/javascript"}},"timestamp":1575470778101,"hash":"9a4d4194b082cc493e559dfa2cd4581ddb123647"}
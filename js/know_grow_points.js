/**
 * Created by komu on 6/8/17.
 */
$(document).ready(function ($) {
    var locations=window.know_grow_points;
    var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
    //http://maps.google.com/mapfiles/ms/icons/green-dot.png

    var icons = [
        iconURLPrefix + 'red-dot.png',
        iconURLPrefix + 'green-dot.png',
        iconURLPrefix + 'blue-dot.png',
        iconURLPrefix + 'orange-dot.png',
        iconURLPrefix + 'purple-dot.png',
        iconURLPrefix + 'pink-dot.png',
        iconURLPrefix + 'yellow-dot.png'
    ];
    var infowindow = new google.maps.InfoWindow({
        maxWidth: 160
    });
    var iconsLength = icons.length;

    var map = new google.maps.Map(document.getElementById('know_grow_map'), {
        zoom: 7,
        center: new google.maps.LatLng(0.5000000000000, 38.00000000000),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    });



    var markers = new Array();
// var map_markers = [];
    var completed_projects = new Array();
    var incomplete_projects = new Array();

    for (var i = 0; i < locations.length; i++) {

        var location=locations[i];
        console.log(location.complete);
        if(location.complete==1) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.latitude, location.longitude),
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                //url: locations[i][4]//icons[iconCounter]
            });
            var content = location.name;
            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker,content,infowindow));

            completed_projects.push(marker);
        }else{
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.latitude, location.longitude),
                map: map,
                icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
               // url: locations[i][4]//icons[iconCounter]
            });
            var content = location.name;
            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker,content,infowindow));

            incomplete_projects.push(marker);
        }
       markers.push(marker);

    }
    function autoCenter(markers) {
        //  Create a new viewpoint bound
        var bounds = new google.maps.LatLngBounds();
        //  Go through each...
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].position);
        }
        //  Fit these bounds to the map
        map.fitBounds(bounds);
    }

/*    if(incomplete_projects.length>0)
        autoCenter(incomplete_projects);
    if(completed_projects.length>0)
        autoCenter(completed_projects);*/
        autoCenter(markers);
});
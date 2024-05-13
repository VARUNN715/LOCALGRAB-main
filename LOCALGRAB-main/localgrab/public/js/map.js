
        function initMap() {
            // Initialize the map
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 0, lng: 0 },
                zoom: 15
            });

            // Try HTML5 geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        // Set the map center to the user's location
                        map.setCenter(userLocation);

                        // Add a marker at the user's location
                        new google.maps.Marker({
                            position: userLocation,
                            map: map,
                            title: 'Your Location'
                        });
                    },
                    () => {
                        // Handle errors
                        alert('Error: The Geolocation service failed.');
                    }
                );
            } else {
                // Browser doesn't support Geolocation
                alert('Error: Your browser does not support geolocation.');
            }
        }

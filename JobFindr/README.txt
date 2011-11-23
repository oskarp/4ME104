This README file summarize useful information about the 
system, for more information, please read the comments in 
the source code.

This mashup uses Google Maps, LinkedIn and Authentic Jobs to
create a "social" job map. To get this example to work
you must have access to API keys from LinkedIn and Authentic Jobs.
You do not need an API key for Google Maps, because this example 
uses the Google Maps API Version 3.

The getAddress method in Map is interesting because it 
uses Map.geocoder.geocode to convert place names(Strings) 
to longitude and latitude(LatLng). In this example, we find 
the company's geographical location by searching on their names.

With the getDistanceBetween method in the Map class, we can 
calculate the distance between two geographical locations.

LinkedIn lets you see which business people who are related to 
a particular company. In this example we use LinkedIn Javascript 
API.

The PHP class(src/php/getJobs.php) that is used acts as a proxy, 
since javascript can't retrieve data from external servers.
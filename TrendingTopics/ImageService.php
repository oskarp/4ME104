<?php

/**
 * Description of ImageService
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class ImageService {

    private $flickrapikey;

    public function __construct($api) {
        $this->flickrapikey = $api;
    }

    public function getImages($trend) {
        $restclient = new RestClient(array('base_url' => "http://api.flickr.com/services/rest"));
        $result = $restclient->get("?method=flickr.photos.search&api_key=" . $this->flickrapikey . $trend->tags . $trend->country . "&format=json&nojsoncallback=1&per_page=8&sort=date-posted-desc,&extras=url_l&safe_search=1&content_type=1");
        $resultarray = json_decode($result->response, true);
        if ($result->info->http_code < 400 && is_array($resultarray) && !empty($resultarray) && !empty($resultarray['photos']['photo'])) {
            foreach ($resultarray['photos']['photo'] as $bild) {
                if(!empty($bild['url_l'])) {
                    $trend->addImage($this->toFlickrUrl($bild));
                }
            }
        }
    }

    private static function toFlickrUrl($json) {
        $url = "http://farm";
        $url .= $json['farm'];
        $url .= ".static.flickr.com/";
        $url .= $json['server'];
        $url .= "/";
        $url .= $json['id'];
        $url .= "_";
        $url .= $json['secret'];
        $url .= ".jpg";
        return $url;
    }

}

?>

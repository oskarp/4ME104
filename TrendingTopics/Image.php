<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Images
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class Image {

    //put your code here
    public $imagelist = array();

    public function addImage($image) {
        //echo "Added " . $image. " <br>";
        $this->imagelist[] = $image;
    }

    public function __toString() {
        $output = "{";        
        if(!empty ($imagelist)) {
        foreach($imagelist as $image) {
            $output .= '"image": "'.$image .'",';
        }
        } 
        else {
            echo "no images";
            
            }
        $output .= "}";
        return $output;
    }

}
        // put your code here
        
        // What the trend API key 8efcf6a4a6451da39245f0a10f8321d528c4909b
        
        /*
        $restclient = new RestClient(array('base_url' => "http://api.whatthetrend.com/api/v2", 'format' => "json"));
        $restclient->set_option("api_key", $whatthetrendapikey);
        $result = $restclient->get("trends");
         */
        
        /* 
         * What the trend API calls.
         * 
        $restclient = new RestClient(array('base_url' => "http://api.whatthetrend.com/api/v2"));
        $restclient->set_option("api_key", $whatthetrendapikey);
        $result = $restclient->get("trends/locations/top.json?place_type_code=12");
        $responses = json_decode($result->response, true);
        pre($responses);
        $trends = array();
        if($result->info->http_code < 400) {
            foreach($responses['trends'] as $response) {                
                $trend = new Trend($response['name'], $response['categoreName'], $response['firstTrendedAt'], $response['description']['text'], $response['description']['score'], $response['url']);
                array_push(&$trends, $trend);
            }
                
        }
        
        foreach($trends as $trend) {
            echo $trend . "<br />";
        }
        
        */
        
        /*
         * Opencalais API calls
         *
        $restclient2 = new RestClient(array('base_url' => "http://api.opencalais.com/tag/rs/enrich"));
        
        $headerss = array("x-calais-licenseID" => $opencalaisapikey, "Content-Type" => "text/raw", "Accept" => "application/json");
        $content = "Lady Gaga leva 4 prêmios, domina o European Music Awards (EMA) . @mcagini.";
                $parameters = array("content" => $content);

        $result2 = $restclient2->post("", $parameters, $headerss);

        
        $resultarray = json_decode($result2->response, true);
        pre($resultarray);
        $tags = "&tags=";
        
        foreach($resultarray as $rad) {
            if($rad['_typeGroup'] == "topics") {
                echo "<b>Topic</b> " . $rad['categoryName'] . "<br />";
                $tags .= $rad['categoryName'] . ",";
            }
            else if($rad['_typeGroup'] == "entities") {
                echo "<b>Entity</b> " . $rad['name'] . "<br />";
                $tags .= $rad['name'] . ",";
            }
            
        }
        
        echo $tags;
         * 
         */
        /*
        $restclient3 = new RestClient(array('base_url' => "http://api.flickr.com/services/rest"));
        $result3 = $restclient3->get("?method=flickr.photos.search&api_key=". $flickrapikey . $tags . "&format=json");
        echo "<pre>";
        print_r($result3->response);
        echo "</pre>";
        
        */

?>


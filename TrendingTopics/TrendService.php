<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of TrendService
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class TrendService {

    private $whatthetrendapikey;

    public function __construct($api) {
        $this->whatthetrendapikey = $api;
    }

    public function getTrends() {
        $trends = array();
        $restclient = new RestClient(array('base_url' => "http://api.whatthetrend.com/api/v2"));
        $restclient->set_option("api_key", $this->whatthetrendapikey);
        $result = $restclient->get("trends/locations/top.json?place_type_code=12");
        $responses = json_decode($result->response, true);
        if ($result->info->http_code < 400) {
            foreach ($responses['trends'] as $response) {
                // Make sure that the description is there and actually usable 
                if (!empty($response['description']['text']) && strlen($response['description']['text']) > 25) {
                    $trend = new Trend($response['name'], $response['category_name'], $response['last_trended_at'], $response['description']['text'], $response['description']['score'], $response['url'], $response['place_name']);
                    $trend->addTag($response['slug']);
                    array_push($trends, $trend);
                }
            }
        }
        return $trends;
    }
}

?>

<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of SemanticEnrichmentService
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class SemanticEnrichmentService {

    private $opencalaisapikey;

    public function __construct($api) {
        $this->opencalaisapikey = $api;
    }

    public function getTagsFor(&$trend) {
        $content = $trend->description;
        $restclient = new RestClient(array('base_url' => "http://api.opencalais.com/tag/rs/enrich"));
        $headerss = array("x-calais-licenseID" => $this->opencalaisapikey, "Content-Type" => "text/raw", "Accept" => "application/json", "enableMetadataType" => "SocialTags");
        $parameters = array("content" => $content);
        $result = $restclient->post("", $parameters, $headerss);
        $resultarray = json_decode($result->response, true);
        if ($result->info->http_code < 400) {
            foreach ($resultarray as $rad) {
                if ($rad['_typeGroup'] == "topics") {
                    $trend->addTag($rad['categoryName']);
                } else if ($rad['_typeGroup'] == "entities") {
                    $trend->addTag($rad['name']);
                }
            }
        } 
    }
}

?>

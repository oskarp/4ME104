<?php

include_once 'restclient.php';
include_once 'Trend.php';
include_once 'ImageService.php';
include_once 'TrendService.php';
include_once 'SemanticEnrichmentService.php';

/**
 * Description of MashupService
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class MashupService {

    // Set your api keys here
    
    private $whatthetrendapikey = "";
    private $opencalaisapikey = "";
    private $flickrapikey = "";
   
    public $trends = array();
    public $imageservice;
    public $tagservice;
    public $trendservice;

    public function __construct() {
        $this->imageservice = new ImageService($this->flickrapikey);
        $this->tagservice = new SemanticEnrichmentService($this->opencalaisapikey);
        $this->trendservice = new TrendService($this->whatthetrendapikey);
    }

    public function getTrends() {
        $this->trends = $this->trendservice->getTrends();
    }

    public function dumpTrends() {
        foreach ($this->trends as $trend) {
            echo $trend . "<br />";
        }
    }

    public function getEnrichmentForTrend($trend) {
        if ($trend != null && $trend->tags == "&tags=") {
            $this->tagservice->getTagsFor($trend);
        }
    }

    public function getEnrichmentForTrends($trends) {
        if (is_array($trends) && $trends != null) {
            foreach ($trends as $trend) {
                $this->tagservice->getTagsFor($trend);
            }
        }
    }

    public function getImagesForTrend($trend) {
        if ($trend != null) {
            $this->imageservice->getImages($trend);
        }
    }

    public function getImagesForTrends($trends) {
        if (is_array($trends)) {
            foreach ($this->trends as $trend) {
                $this->imageservice->getImages($trend);
            }
        }
    }

    public function getRandomTrend() {
        return $this->trends[array_rand($this->trends, 1)];
    }

}

?>

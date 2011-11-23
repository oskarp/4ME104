<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Trends
 *
 * @author Oskar Pettersson <oskar@derived.se>
 */
class Trend {
    //put your code here
    public $name;
    public $categoryName;
    public $lastTrendedAt;
    public $description;
    public $descScore;
    public $url;
    public $country = "Unknown";
    public $tags = "&tags=";
    public $images = array();
    
    public function __construct($name, $categoreName, $lastTrendedAt, $description, $descScore, $url, $country) {
        $this->name = $name;
        $this->categoryName = $categoreName;
        $this->lastTrendedAt = $lastTrendedAt;
        $this->description = $description;
        $this->descScore = $descScore;
        $this->url = $url;
        $this->country = $country;
        
    }
    
    public function __toString() {
        $output = '{ "trend": {';
        $output .= '"name": "'. $this->name . '",';
        $output .= '"categoryName": "'. $this->categoryName . '",';
        $output .= '"firstTrendedAt": "'. $this->lastTrendedAt . '",';
        $output .= '"description": "'. $this->description . '",';
        $output .= '"descScore": "'. $this->descScore . '",';
        $output .= '"url": "'. $this->url . '",';
        $output .= '"country":' . $this->country . '",';
        $output .= '"tags":' . $this->tags . '",';
        $output .= '"images": ' . count($this->images);
        $output .= '}}';
        return $output;
        
    }
    
    public function addTag($tag) {
        $this->tags .= urlencode($tag . ",");        
    }
    
    public function addImage($imgurl) {
        $this->images[] = $imgurl;
    }
    
}
?>
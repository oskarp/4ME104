<?php
include_once 'MashupService.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Trending topics, fancy footwork</title>
        <link rel="stylesheet" type="text/css" href="assets/style/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
        <script src="assets/js/flow.js" type="text/javascript"></script>        
    </head>
    <body>
        <?php
        // Instanciate the service
        $service = new MashupService();
        // Get the trends
        $service->getTrends();
        // Pick out a random trend from these
        $trend = $service->getRandomTrend();
        // Get the enrichment for that trend
        $service->getEnrichmentForTrend($trend);
        // Get the pictures
        $service->getImagesForTrend($trend);

        // If Flickr fails us, this ugly hack saves!
        if (count($trend->images) == 0) {
            array_push($trend->images, "assets/images/fail.jpg");
        }
        ?>
        <div id="trend">
            <?
            echo "<div class='speech-bubble'>" . $trend->description . " <br /> Currently trending in " . $trend->country . "</div><br />";
            echo "<h1>" . $trend->name . "</h1>";
            ?>
        </div>
        <div id="images">
            <ul class="images">
                <?
                foreach ($trend->images as $image) {
                    echo "<img src='" . $image . "'>";
                }
                ?>
            </ul>
        </div> 
        <div id="bgdivruse">
        </div>
                    <div id="bgdiv">
            </div>
    </body>
</html>
<?php

// Set the file path for the counter file
$counter_file = "counter.txt";

// Open the counter file and read the current count
$counter = file_get_contents($counter_file);

// Increment the counter by 1
$counter++;

// Write the new counter value back to the file
file_put_contents($counter_file, $counter);

// Display the counter value on the web page
echo "You are visitor number " . $counter . " to this website.";

?>
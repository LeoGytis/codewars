<?php

function howManyDalmations($number) {
  $dogs =  ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  $respond = $number <= 10 ? $dogs[0] : ($number <= 50 ? $dogs[1] : ($number >= 101 ? $dogs[3] : ($dogs[2])));
return $respond;
}

// [26, "More than a handful!"],
// [8, "Hardly any"],
// [14, "More than a handful!"],
// [80, "Woah that's a lot of dogs!"],
// [100, "Woah that's a lot of dogs!"],
// [101, "101 DALMATIANS!!!"],
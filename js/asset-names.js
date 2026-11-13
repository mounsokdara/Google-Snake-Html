// Texture names. The game picks textures by index; these tables turn an index into the readable file name.
(function () {
  var APPLE = ["apple", "banana", "pineapple", "grapes", "pumpkin", "turnip", "eggplant", "strawberry", "cherry", "carrot", "mushroom", "broccoli", "watermelon", "pepper", "kiwi", "lemon", "orange", "peach", "peanut", "raspberry", "tomato", "blueberry", "mango", "avocado", "fruit_bowl"];
  var TROPHY = ["classic", "wall", "portal", "cheese", "infinity", "double_snake", "winged_apple", "yin_yang", "key", "crate", "poison_skull", "dashed_apple", "flag", "statue", "lightbulb", "shield", "turn_sign", "hot_dog", "magnet", "snake_on_pole", "dotted_box", "peace", "blender"];
  var COUNT = ["one", "three", "five", "ten", "dice", "bomb", "tally"];
  window.AssetNames = {
    apple: APPLE,
    trophy: function (i) { return "assets/trophies/trophy_" + TROPHY[i] + ".png"; },
    count: function (i) { return "assets/counts-and-keys/count_" + COUNT[i] + ".png"; }
  };
})();

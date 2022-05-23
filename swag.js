var textToShow1 = ['Son', 'Sexy', 'Surgically', 'Strange', 'Sugar', 'Space', 'Squares', 'Speeches']
var textToShow2 = ['of a', 'Optimistic', 'Optimal', 'Oxydation', 'Over', 'Owns', 'Obfuscate', 'Obtain']
var textToShow3 = ['Bitch', 'Bohems', 'Bias', 'Bullshit', 'Bills', 'Burgers', 'Basics', 'Blankets']

$(document).ready(function() {
    $(".first").html(textToShow1[Math.floor(Math.random()*textToShow1.length)]);
});
$(document).ready(function() {
    $(".second").html(textToShow2[Math.floor(Math.random()*textToShow2.length)]);
});
$(document).ready(function() {
    $(".third").html(textToShow3[Math.floor(Math.random()*textToShow3.length)]);
});

$('section').click(function() {
    location.reload();
});

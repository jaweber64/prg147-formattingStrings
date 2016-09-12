/**
 * Created by jaWeber on 9/10/16.
 */

var $ = function (id) {
    return document.getElementById(id);
};

$("redwines").innerHTML = "Syrah (Shiraz) \\ Cabernet Sauvignon\\ Merlot \\ Malbec \\ Pinot Noir " +
        "\\ Zinfandel \\ Barbera \\ Sangiovese";
$("whitewines").innerHTML = "Chardonnay \\ Savignon Blanc \\ Semillon \\ Moscato \\ Pinot Grigio " +
        "\\ Gewurtztraminer \\ Riesling";

var text = "\"Beer is made by men, \n\t\t wine by God.\" \n\n\t -- Martin Luther";
var wine = [text];
wine[wine.length] = "\"What wine goes with Captain Crunch?\" \n\n\t -- George Carlin";
wine[wine.length] = '\'Wine is the most healthful and most hygienic of beverages.\' \n\n\t -- Louis Pasteur';
wine[wine.length] = "\"One should always be drunk. That’s all that matters…But with what? With wine, " +
    " with poetry, or with virtue, as you chose. But get drunk.\" \n\n\t -- Charles Baudelaire, circa 1850s";
wine[wine.length] = '\'Men are like wine – some turn to vinegar, but the best improve with age.\' \n\n\t' +
    ' -- Pope John XXIII';
wine[wine.length] = "\"Penicillin cures, but wine makes people happy.\" -- Alexander Fleming";
wine[wine.length] = "\tThis text begins with a tab (\\t), \n\t\b\b then a new line, a tab " +
    "and 2 backspaces (\\n\\t\\b\\b). This is the result (absolutely nothing to do with wine!)" +
    " The escaped backspaces do absolutely nothing -- hmmm.  Why would you use them?";

function displayString(ind) {
    switch (ind) {
        case 0: $("quote1").innerHTML = wine[ind];
            break;
        case 1: $("quote2").innerHTML = wine[ind];
            break;
        case 2: $("quote3").innerHTML = wine[ind];
            break;
        case 3: $("quote4").innerHTML = wine[ind];
            break;
        case 4: $("quote5").innerHTML = wine[ind];
            break;
        case 5: $("quote6").innerHTML = wine[ind];
            break;
        case 6: $("quote7").innerHTML = wine[ind];
            break;
        default: break;
}
} // end of function displayString()

window.onload = function()
{
    var n = 7;
    for (i = 0; i<n; i++) {
        displayString(i);
    }

};
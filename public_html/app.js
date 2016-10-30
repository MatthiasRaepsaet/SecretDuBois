/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("secret", []);
$(document).ready(function () {
    $('.slider').slider({full_width: true});
    var uluru = {lat: 50.0218986, lng: 4.8678663};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
});
app.factory('kamers', [function () {

        var k = {
            kamers: [
                {title: 'Saarloos', state:"active", kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "../images/saarloosKamer.png", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'Wat ruist daar …. ? Na meer van 100 jaar werd er in 2011, een wolf gespot in Gedinne. De VRT - Tv ploeg van “Dieren in Nesten” kwam de wolf toevallig op het spoor, toen zij op zoek waren naar een lynx, een grote katachtige die uitgestorven is in België die volgens geruchten opnieuw in onze contreien vertoefde. Toen er dagelijks dode schapen bij nekbeet werden gevonden, werd een camera opgehangen die al snel beelden kon vastleggen van onze “Wolf van Gedinne”. De typische witte markering op de snoet alsook het donkergrijze kleurschakeringen op de rug en de staart waren duidelijke kenmerken van een typische wolf.Of was het toch maar een hond?. Als je naar de oren van dit beest kijkt dan zie je dat dit een hond is en geen wolf (een wolf heeft veel kleinere oren). Waarschijnlijk is het een Saarloos Wolfhond, die zijn erg lief en erg ongevaarlijk. Tot op heden nog steeds een mysterie.'},
                {title: 'Bievre', state:"", kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "../images/beverKamer.png", huidig: "Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’  ", buttonState: "Toon Meer",
                    short: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’  ',
                    long: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’.  Wonen doen bevers met zijn allen in een burcht, een stapel hout die klaar lijkt te liggen voor een reusachtig kampvuur. Maar waarom stoppen bevers zoveel energie in het opzetten van dammen? Om makkelijk zijn voedsel (planten, schors en takken van bomen) te transporteren, heeft de bever (diep) water nodig. Hij is heel behendig in het water.\n\
                           Zo behoren de dammen in de Ardennen tot de spectaculairste van Europa. Het lijkt hen goed te bevallen in ons landje.  De gekende dam van de bevers vinden we wel maar  een bever laat zich niet gauw zien, doch wordt het bewijs van zijn aanwezigheid bevestigd door het knaagwerk . Je kan er hun bouwwerken met eigen ogen bewonderen tijdens een speciaal uitgestippelde beverwandeling. Het beste moment om bevers te observeren is de aanloop naar de winter, dan zijn ze volop bezig hun enorme houtvoorraden aan te leggen.'},
                {title: 'Yvette', state:"", kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "../images/yvetteKamer.png", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'Heksen bestaan. Diep verscholen in de bossen van Cornimont, bij Vresse, woont er éentje die luistert naar de naar Yvette Clarenne. Ja antwoordt ze op de vraag of ze wel degelijk een heks is, doch lacht er geheimzinnig wanneer we vragen om op haar bezemsteel door de lucht te vliegen. Het maken van heksenpoppen is een passie van Yvette en geen enkele pop is dezelfde.\n\
                           Naast haar poppen stelt zij ook andere heksen attributen te toon in haar huis.\n\
                           (klik hier om meer te weten) Zie ook activiteiten'},
                {title: 'La Tour', state:"", kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "../images/latourKamer.png", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'La Tour du millénaire is de trots van Gedinne. Deze uitkijktoren met 3 terassen (op 15,30 en 45m) bevindt zich op het plateau van La Croix-Scaille, het hoogtste punt van de provincie Namen. (503 meter).Gratis toegang het hele jaar, behalve in de periode van de jacht, bij slechte weersomstandigheden of wanneer de baan voor langlaufers voorzien is.Op van het mooie zicht te genieten over de streek, dient u wel eerst 300 treden te trotseren. Minder fervente stappers kunnen reeds op de twee onderste platforms afstappen. De trap (Da Vinci) is voorzien van meerders haltes waar u even kan rusten. Op deze locatie kan u gratis parkeren. Heel veel wandelingen vertrekken van hieruit. '}]
        };
        return k;
    }]);
app.factory('cafePosts', [function () {
        var c = {
            posts: [
                {title: "Cafe", content: "Ons typisch Ardens cafeetje charmeert iedereen.\n\
                                          Het is niet alleen een gezellig stoppunt voor wandelaars maar ook een gezellig\n\
                                          vertoeven voor zowel de B&B'ers als de lokale bevolking.\n\
                                          Aperitiefje, fris biertje of een kleine snack voor ieder wat wils."}
            ]
        };
        return c;
    }]);

app.factory('keukenPosts', [function () {
        var keuken = {
            keukenPosts: [
                {title: "", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n\
                                          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\
                                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,\n\
                                          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\
                                          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n\
                                          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n\
                                          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n\
                                          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."},
                {title: "", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\n\
                                          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\
                                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,\n\
                                          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\
                                          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\n\
                                          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n\
                                          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.\n\
                                          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."}
            ]
        };
        return keuken;
    }]);

app.controller("KamersController", [
    '$scope', 'kamers', function ($scope, kamers) {

        $scope.kamers = kamers.kamers;
        $scope.clickButton = function (kamer) {
            if (kamer.buttonState === "Toon Meer") {
                kamer.huidig = kamer.long;
                kamer.buttonState = "Toon Minder";
            }
            if (kamer.buttonState === "Toon Minder") {
                kamer.huidig = kamer.short;
                kamer.buttonState = "Toon Meer";
            }
        };
    }
]);

app.controller("CafeController", [
    '$scope', 'cafePosts', function ($scope, cafePosts) {
        $scope.cafePosts = cafePosts.posts;
    }
]);

app.controller("KeukenController", [
    '$scope', 'keukenPosts', function ($scope, keukenPosts) {
        $scope.keukenPosts = keukenPosts.keukenPosts;
    }
]);

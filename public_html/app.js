/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("secret", []);
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
app.factory('kamers', [function () {
       
        var k = {
            kamers: [
                {title: 'Bievre', kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "../images/bever.jpg", huidig: "Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’  ", buttonState: "Toon Meer",
                    short: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’  ',
                    long: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’.  Wonen doen bevers met zijn allen in een burcht, een stapel hout die klaar lijkt te liggen voor een reusachtig kampvuur. Maar waarom stoppen bevers zoveel energie in het opzetten van dammen? Om makkelijk zijn voedsel (planten, schors en takken van bomen) te transporteren, heeft de bever (diep) water nodig. Hij is heel behendig in het water.\n\
                           Zo behoren de dammen in de Ardennen tot de spectaculairste van Europa. Het lijkt hen goed te bevallen in ons landje.  De gekende dam van de bevers vinden we wel maar  een bever laat zich niet gauw zien, doch wordt het bewijs van zijn aanwezigheid bevestigd door het knaagwerk . Je kan er hun bouwwerken met eigen ogen bewonderen tijdens een speciaal uitgestippelde beverwandeling. Het beste moment om bevers te observeren is de aanloop naar de winter, dan zijn ze volop bezig hun enorme houtvoorraden aan te leggen.'},
                {title: 'Yvette', kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'lang'},
                {title: 'Saarloos', kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'lang'},
                {title: 'La Tour', kleur: ' lime darken-3', highkleur: " lime lighten-2", imgurl: "", huidig: "", buttonState: "Toon Meer",
                    short: 'kort',
                    long: 'lang'}]
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
        $scope.clickButton = function(kamer) {
            if(kamer.buttonState === "Toon Meer"){
                kamer.huidig = kamer.long;
                kamer.buttonState = "Toon Minder";
            }
            if(kamer.buttonState === "Toon Minder"){
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

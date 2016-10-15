/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("secret", []);
app.factory('kamers',  [function () {
        var k = {
            kamers: [
                {title: 'Bievre', kleur:' green darken-4', highkleur:" green lighten-4", imgurl:"../images/bever.jpg", huidig:"",
                    short: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’  ',
                    long: 'Ze laten zich zelden zien maar ze zijn er wel, getuige de dammen die ze bouwen. Sinds een 15-tal jaar leven er opnieuw bevers in de Naamse Ardennen .Ooit waren ze hier massaal aanwezig maar zo’n honderd jaar geleden werd de laatste opgegeten of geslacht voor zijn pels. Na een herintroductie in Frankrijk zijn de dieren uitgezworven via het water en naar schatting leven er in de Naamse Ardennen momenteel een dertig tot veertig koppels. “De naam van het dorp Bièvre komt trouwens van ‘bever’.  Wonen doen bevers met zijn allen in een burcht, een stapel hout die klaar lijkt te liggen voor een reusachtig kampvuur. Maar waarom stoppen bevers zoveel energie in het opzetten van dammen? Om makkelijk zijn voedsel (planten, schors en takken van bomen) te transporteren, heeft de bever (diep) water nodig. Hij is heel behendig in het water.\n\
                           Zo behoren de dammen in de Ardennen tot de spectaculairste van Europa. Het lijkt hen goed te bevallen in ons landje.  De gekende dam van de bevers vinden we wel maar  een bever laat zich niet gauw zien, doch wordt het bewijs van zijn aanwezigheid bevestigd door het knaagwerk . Je kan er hun bouwwerken met eigen ogen bewonderen tijdens een speciaal uitgestippelde beverwandeling. Het beste moment om bevers te observeren is de aanloop naar de winter, dan zijn ze volop bezig hun enorme houtvoorraden aan te leggen.'},
                {title: 'Yvette', kleur:' purple darken-2', highkleur:" purple", imgurl:"", huidig:"",
                    short: '',
                    long: ''},
                {title: 'Saarloos', kleur:' red lighten-1', highkleur:" red", imgurl:"", huidig:"",
                    short: '',
                    long: ''},
                {title: 'La Tour', kleur:' red darken-4', highkleur:" red darken", imgurl:"", huidig:"",
                    short: '',
                    long: ''}]
        };
        return k;
    }]);
app.controller("KamersController", [
    '$scope', 'kamers', function ($scope, kamers) {
        $("#minderBtn").hide();
        $scope.kamers = kamers.kamers;
        $scope.toonMeer = function(kamer){
            
        };
        $scope.toonMinder = function(kamer){
            
        };
    }
]);

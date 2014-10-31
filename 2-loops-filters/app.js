(function() {
    var app = angular.module('tuto', []);
 
    app.controller('ShipController', function() {
      this.team = myTeam;
    });
    
    app.controller('MembersController', function() {
      this.member = {};

      this.addMember = function(team) {
        this.member.enroled = Date.now();
        team.push(this.member);
        this.member = {};
      };
    });
    
    /**********/
    var myTeam = [{
      name: 'Jim Kirk',
      email: 'captain@enterprise.sf',
      enroled: Date.parse('2004-05-08')
    },{
      name: 'Leonard McCoy',
      email: 'sickbay@enterprise.sf',
      enroled: Date.parse('2010-05-19')
    },{
      name: 'Spock',
      email: 'first.officer@enterprise.sf',
      enroled: Date.parse('2008-06-19')
    },{
      name: 'Montgommery Scott',
      email: 'engineering@enterprise.sf',
      enroled: Date.parse('2000-04-30')
    }]

})();

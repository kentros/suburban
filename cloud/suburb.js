exports.euphemize = function euphemize(str) {
   var p =
   {
        " cunt| pussy| twat| vagina": " hoo-hah",
        " shit| crap| poop| turd": " smelly nugget",
        " cocksucker| motherfucker| fucker| faggot| fag": " curmudgeon",
        "nigger|nigga": "neighbor",
        " rimmed ": " licked in the cadbury alley ",
        " rimming ": " kissing the rusty sheriff's badge ",
        " cum| jizz": " goof juice",
        " piss": " pee pee",
        "fuck": "fudge",
        " tits": " sweater puppies",
        " penis| cock| dick| erection": " spam dagger",
        "goddamn|god damn|damn": "dagnabbit",
        " bitches": " lovely ladies",
        " bitch": " nag",
        " asshole| anal cavity| anus": " angry dirt box",
        "cunnilingus": "drinking from the furry cup",
        "anal sex": "spear fishing for doodoo sharks",
        " clitoris | clit ": " love button ",
        " ejaculate | spooge ": " boom boom ",
        " ejaculation": " euphoric shotgun to go boo-yah",
        " masturbation | wanking | jerking ": " shaking the mayonnaise bottle ",
        "orgasm": "happy explosion down there",
        " ass ": " badonkadonk ",
        " crotch ": " loins ",
        "\r|\n": " "
   };

   
   for (var key in p) {
      if (p.hasOwnProperty(key)) {
         var reg = new RegExp(key, "ig");
         str = str.replace(reg, p[key]);
      }
   }

   return str;
}
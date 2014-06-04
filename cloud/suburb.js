exports.euphemize = function euphemize(str) {
   var p =
   {
        " cunt| pussy| twat| vagina| poon": " hoo-hah",
        " bullshit| shit| shiz| crap| poop| turd": " smelly nugget",
        " cocksucker| fucker| faggot| fag": " curmudgeon",
        "nigger|nigga": "neighbor",
        " rimmed ": " licked in the cadbury alley ",
        " rimming ": " kissing the rusty sheriff's badge ",
        "rimjob": "licking",
        " cum| jizz| skeet": " goof juice",
        " piss": " pee pee",
        "fucker": "lover",
        "fuck": "fudge",
        " tits": " sweater puppies",
        " penis| cock| dick| erection": " Kielbasa",
        "goddamn|god damn|damn": "dagnabbit",
        "prostitute": "working girl",
        " bitches": " lovely ladies",
        " bitch": " nag",
        " asshole| anal cavity| anus| arsehole": " angry dirt box",
        "cunnilingus": "drinking from the furry cup",
        "anal sex": "spear fishing for doodoo sharks",
        " clitoris| clit": " love button",
        " ejaculate| spooge": " boom boom",
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
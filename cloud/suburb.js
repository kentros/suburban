exports.euphemize = function euphemize(str) {
   var p =
   {
        " cunt| pussy| twat": " hoo-hah",
        " shit| crap| poop| turd": " smelly nugget",
        " cocksucker| motherfucker| fucker| faggot| fag| nigger| nigga": " curmudgeon",
        " cum| jizz": " goof juice",
        " piss": " pee pee",
        "fuck": "fudge",
        " tits": " sweater puppies",
        " penis| cock| dick": " spam dagger",
        "goddamn|god damn|damn": "dagnabbit",
        " bitches": " lovely ladies",
        " bitch": " nag",
        " asshole| anal cavity| anus": " dirt box",
        "cunnilingus": "drinking from the furry cup",
        "anal sex": "spear fishing for doodoo sharks",
        " clitoris | clit ": " love button ",
        " ejaculate | spooge ": " boom boom ",
        " masturbation | wanking | jerking ": " shaking the mayonnaise bottle "
   };

   
   for (var key in p) {
      if (p.hasOwnProperty(key)) {
         var reg = new RegExp(key, "ig");
         str = str.replace(reg, p[key]);
      }
   }

   return str;
}
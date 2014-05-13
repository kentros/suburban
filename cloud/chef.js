    /* Javascript stolen from http://mysite.verizon.net/ebrowne72/chef/
     *
     * This script translates English to mock-Swedish a-la the Swedish Chef
     * The translation rules were taken as faithfully as possible from
     * Java source at ftp://shell5.ba.best.com/pub/tbrowne/swedish_chef/
     *
     * If you have any suggestions, please email me at
     * andriy.rozeluk@utoronto.ca
     *
     * -Andriy Rozeluk
     */

    var out="";

   /*
    * removes everything up to and including the first token from line
    */
    function removeToken(line){
        lowest=line.length;
        delimiters=" \n\t\\,<.>/?;:'\"[{]}|=+-_!@#$%^&*()~`";
        for (i=0;i<delimiters.length;i++){
            e=line.indexOf(delimiters.charAt(i));
            if (e > -1)
                if (lowest > e) lowest=e;
        }
        if (lowest >= line.length - 1) return "";
        return line.substring(lowest + 1, line.length);
    }

   /*
    * returns the first token delimiter found in line
    */
    function getToken(line){
        lowest=line.length + 1;
        delimiters=" \n\t\\,<.>/?;:'\"[{]}|=+-_!@#$%^&*()~`";
        for (i=0;i<delimiters.length;i++){
            e=line.indexOf(delimiters.charAt(i));
            if (e > -1)
                if (lowest > e) lowest=e;
        }
        if (lowest == line.length + 1) return "";
        return line.charAt(lowest);
    }

   /*
    * returns everything up to the first token delimiter found in line
    */
    function nextToken(line){
        lowest=line.length + 1;
        delimiters=" \n\t\\,<.>/?;:'\"[{]}|=+-_!@#$%^&*()~`";
        for (i=0;i<delimiters.length;i++){
            e=line.indexOf(delimiters.charAt(i));
            if (e > -1)
                if (lowest > e) lowest=e;
        }
        if (lowest == line.length + 1) return line; 
        else if (lowest == line.length - 1) return line.substring(0,line.length - 1);
        return line.substring(0, lowest);
    }

   /*
    * translates a String by breaking it up into words and calling
    * encheferizeWord(). These words are re-assembled and added to the
    * global variable 'out'.
    */
   exports.enchef = function encheferizeLine(line){
      buff = "";
      word = "";
      t = "";

      while(line.length > 0){
         word=nextToken(line);
         t = getToken(line);
         line=removeToken(line);
         out = out + encheferizeWord(word) + t;
      }

      if(t == ".") {
         out = out + " Bork Bork Bork!";
      }
      return out;
   }

  /*
   * translates a word given by the rules
   */
   function encheferizeWord(word)
   {
      if(word.toLowerCase() == "bork") return word;
      
      var letter;
      
      count=0;
      len=word.length;
      buff=""
      i_seen=false;
      
      while(count<len){
         isLast = count==(len-1);
         
         letter=word.charAt(count);
                  
         if(count==0){ //Beginning-of-word rules
            if(letter=='e'){
               buff=buff + "i";
               count++;
               continue;
            } else if(letter=='E'){
               buff=buff + "I";
               count++;
               continue;
            } else if(letter=='o'){
               buff=buff + "oo";
               count++;
               continue;
            } else if(letter=='O'){
               buff=buff + "Oo";
               count++;
               continue;
            }
         } else {  //End of Beginning-of-word rules, Start of In-Word rules
            if(letter=='e'){
               if(!isLast && word.charAt(count+1)=='w'){
                  buff = buff + "oo";
                  count+=2;
                  continue;
               } else if(isLast){
                  buff = buff + "e-a";
                  count++;
                  continue;
               }
            } else if(letter=='f'){
               buff = buff + "ff";
               count++;
               continue;
            } else if(letter=='i'){
               if(!isLast && word.charAt(count+1)=='r'){
                  buff = buff + "ur";
                  count+=2;
                  continue;
               } else if(!i_seen){
                  buff = buff + "ee";
                  count++;
                  i_seen=true;
                  continue;
               }                   
            }else if(letter=='o'){
               if(!isLast && word.charAt(count+1)=='w'){
                  buff = buff + "oo";
                  count+=2;
                  continue;
               } else {
                  buff = buff + "u";
                  count++;
                  continue;
               }
            } else if(count<=len-4 && letter=='t' && word.charAt(count+1)=='i'
                        && word.charAt(count+2)=='o' && word.charAt(count+3)=='n'){
               buff = buff + "shun";
               count+=4;
               continue;
            } else if(letter=='u'){
               buff = buff + "oo";
               count++;
               continue;
            } else if(letter=='U'){
               buff = buff + "Oo";
               count++;
               continue;
            }
         }  //end if In-word rules
       //End if Word-placement rules, Start of Anywhere rules
         if(letter=='A'){
            if(!isLast && word.charAt(count+1)=='n'){
               buff = buff + "Un";
               count=count+2;
               continue;
            } else if(!isLast && word.charAt(count+1)=='u'){
               buff = buff + "Oo";
               count=count+2;
               continue;
            } else if(!isLast){
               buff = buff + "E";
               count++;
               continue;
            }   
         } else if(letter=='a'){
            if(!isLast && word.charAt(count+1)=='n'){
               buff = buff + "un";
               count=count+2;
               continue;
            } else if(!isLast && word.charAt(count+1)=='u'){
               buff = buff + "oo";
               count=count+2;
               continue;
            }else if(!isLast){
               buff = buff + "e";
               count++;
               continue;
            }
         } else if(letter=='e'){
            if(!isLast && word.charAt(count+1)=='n' 
                  && count==len-2){
               buff = buff + "ee";
               count+=2;
               continue;
            } else if(count>0){
               
            } 
         } else if(letter=='t'){
            if(count==len-2 && word.charAt(count+1)=='h'){
               buff = buff + "t";
               count+=2;
               continue;
            } else if(count<=len-3 && word.charAt(count+1)=='h'
                        && word.charAt(count+2)=='e'){
               buff = buff + "zee";
               count+=3;
               continue;
            } 
         } else if(letter=='T' && count<=len-3 && word.charAt(count+1)=='h'
                   && word.charAt(count+2)=='e'){                                                
            buff = buff + "Zee";
            count+=3;
            continue;
         } else if(letter=='v'){
            buff = buff + "f";
            count++;
            continue;
         } else if(letter=='V'){
            buff = buff + "F";
            count++;
            continue;
         } else if(letter=='w'){
            buff = buff + "v";
            count++;
            continue;
         } else if(letter=='W'){
            buff = buff + "V";
            count++;
            continue;
         }
           //End of rules.  Whatever is left stays itself
          buff = buff + letter;
          count++;
      }
		
      return(buff);
   }
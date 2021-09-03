function telephoneCheck(str) {
    let regex=/\d\s\d\d\d\s\d\d\d\s\d\d\d\d|\d\s\d\d\d-\d\d\d-\d\d\d\d|\(\d\d\d\)\d\d\d-\d{4}/
    console.log(regex.test(str), str);
    return true;
  }
  /* Acceptable|555-555-5555|(555)555-5555|
(555) 555-5555
555 555 5555
5 555 555 555
1 555 555 5555*/
/*telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555")// devrait retourner un booléen.*/

telephoneCheck("1 555 555 5555")//devrait revenir true.

telephoneCheck("1 456 789 4444")//devrait revenir true.

telephoneCheck("1 555-555-5555")//devrait revenir true.

telephoneCheck("1 (555) 555-5555")//devrait revenir true.

telephoneCheck("5555555555")//devrait revenir true.

telephoneCheck("555-555-5555")//devrait revenir true.

telephoneCheck("(555)555-5555")//devrait revenir true.

telephoneCheck("1(555)555-5555")//devrait revenir true.

telephoneCheck("555-5555")//devrait revenir false.

telephoneCheck("5555555")//devrait revenir false.

telephoneCheck("1 555)555-5555")//devrait revenir false.
telephoneCheck("123**&!!asdf#")//devrait revenir false.

telephoneCheck("55555555")//devrait revenir false.

telephoneCheck("(6054756961)")//devrait revenir false.

telephoneCheck("2 (757) 622-7382")//devrait revenir false.

telephoneCheck("0 (757) 622-7382")//devrait revenir false.

telephoneCheck("-1 (757) 622-7382")//devrait revenir false.

telephoneCheck("2 757 622-7382")//devrait revenir false.

telephoneCheck("10 (757) 622-7382")//devrait revenir false.

telephoneCheck("27576227382")//devrait revenir false.

telephoneCheck("(275)76227382")//devrait revenir false.

telephoneCheck("2(757)6227382")//devrait revenir false.

telephoneCheck("2(757)622-7382")//devrait revenir false.

telephoneCheck("555)-555-5555")//devrait revenir false.

telephoneCheck("(555-555-5555")//devrait revenir false.

telephoneCheck("(555)5(55?)-5555")//devrait revenir false.

telephoneCheck("55 55-55-555-5")//devrait revenir false.*/
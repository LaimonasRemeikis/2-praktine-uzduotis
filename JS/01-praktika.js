
    1. //Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

    const a = 10;
    const b = 7;
  
      if (a >= b) {
        console.log('a daugiau arba lygus b');
    } else {
        console.log('a nera daugiau arba lygus b');
    }
    console.log('-----------------------')
    //2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
  
    
    for(let i = 1; i<11; i++ ){
      console.log(i)
    }
    console.log('-----------------------')
   // 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
  
   n = 2
   for(let i =0; i<=5; i++ ){
    
    console.log(i*(n))
  }
  console.log('-----------------------')
   //4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
  
   for(let i = 1; i<11; i++ ){
    console.log(Math.floor((Math.random() * 11)));
   }
    //5.Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
  console.log('-----------------------')
    for(let i = 1; i<5; i++ ){
      console.log(Math.floor((Math.random() * 6)));}
  
    //6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos.
   function array(){
  
   }
    
  
  
   // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
  
   //8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
  //Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
  
  //9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
  //skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
  
  //10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
  //"(XXX) XXX-XXXX". (10 taškų)
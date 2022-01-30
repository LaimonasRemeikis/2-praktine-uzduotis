
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
  
   for(let i = 1; i<=5; i++ ){
    console.log(Math.floor((Math.random() * 10)));
   }
    //5.Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
  console.log('-----------------------')
    for(let i = 1; i<10; i++ ){
      console.log(Math.floor((Math.random() * 10)));}
      console.log('-------------------')
    //6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos.
   const arrayL= Math.floor((Math.random()*10)+20);
   console.log(`Masyvo ilgis`,arrayL)
   const arrayR= [];
   for(let i=0; i<arrayL; i++){
    const a= Math.floor((Math.random()*20)+10);
    arrayR.push(a);
   }
   console.log(`Masyvo reiksmes`,arrayR)
   for(i=0; i<arrayR.length; i++){
       
   }


    
  console.log('-------------------')
  
   // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
 let letterA = 0;
 let letterB = 0;
 let letterC = 0;
 let letterD = 0;
 let alphabetL = [];
 
 for(let i =0; i<100; i++){
   const count= Math.round(Math.random()*3 +1);
   switch(count){
       case 1:
           alphabetL.push(`A`);
           letterA++;
        break;   
       case 2: 
           alphabetL.push(`B`);
           letterB++;
        break;   
       case 3:
           alphabetL.push(`C`);
           letterC++;
        break;   
        case 4: 
           alphabetL.push(`D`);
           letterD++;
        break;
   }
}
    console.log (letterA)
    console.log (letterB)
    console.log (letterC)
    console.log (letterD)
 
 
 

   //8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kiaškų)
 // ntamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
  //Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 t
  function lygineSuma (n,c){
      if(typeof n===`number` && typeof c===`number`){
          return n+c;
      }
      if(typeof n!==`number` && typeof c!==`number`){
          return 'kintamasis turi buti arba skaicius arba masyvas';
      }
      if(typeof n===`object` && typeof c===`object`){
        return n.length+c.length;
      }
      if(typeof n!==`object` && typeof c!==`object`){
          return
      }
  }
  
  //9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
  //skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

  
  //10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
  //"(XXX) XXX-XXXX". (10 taškų)
  function telefonoNumeris(n) {

    return `([]) []-[]`
    
}

console.log(telefonoNumeris([3, 2, 0, 6, 1, 2, 7, 8, 9, 0]));


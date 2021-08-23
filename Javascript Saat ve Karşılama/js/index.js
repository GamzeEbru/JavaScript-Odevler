function isimsor() {
    var name = prompt("Adınız nedir?");
    document.getElementById("name").innerText = name;
 }
 
 function goster() {
   var date = new Date();
   var saat = date.getHours();
   var dakika = date.getMinutes();
   var saniye = date.getSeconds();
   var gun = date.getDay();
 
   if (gun == 1) {
     gun = "Pazartesi";
   } else if (gun == 2) {
     gun = "Salı";
   } else if (gun == 3) {
     gun = "Çarşamba";
   } else if (gun == 4) {
     gun = "Perşembe";
   } else if (gun == 5) {
     gun = "Cuma";
   } else if (gun == 6) {
     gun = "Cumartesi";
   } else if (gun == 7) {
     gun = "Pazar";
   }
 
   saat = saat < 10 ? "0" + saat : saat;
   dakika = dakika < 10 ? "0" + dakika : dakika;
   saniye = saniye < 10 ? "0" + saniye : saniye;
 
   var time = saat + ":" + dakika + ":" + saniye + " " + gun;
   document.getElementById("saat").innerText = time;
   document.getElementById("saat").textContent = time;
 
   setTimeout(goster, 1000);
 }
 
 isimsor();
 goster();
 
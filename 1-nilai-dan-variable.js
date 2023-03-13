        //MENYIMPAN NILAI DENGAN OPERATOR PENUGASAN
//Dalam JavaScript, Anda dapat menyimpan nilai dalam variabel dengan operator penugasan ( = ).
myVar = 5;
/*Ini memberikan Number nilai 5 ke myVariable.
Jika ada perhitungan di sebelah kanan operator =, 
itu dilakukan sebelum nilai diberikan ke variabel di sebelah kiri operator.*/

var myVar;
myVar = 5;
/*Pertama, kode ini membuat variabel bernama myVar. Kemudian, kode tersebut ditetapkan 5 ke myVar. 
Sekarang, jika myVar muncul lagi di kode, program akan memperlakukannya seolah-olah 5.*/


        //MENETAPKAN NILAI SATU VARIABLE KE VARIABLE LAIN
/*Setelah nilai ditetapkan ke variabel menggunakan operator penugasan,
Anda dapat menetapkan nilai variabel tersebut ke variabel lain menggunakan operator penugasan*/
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
/*Di atas mendeklarasikan myVar variabel tanpa nilai, lalu memberinya nilai 5. 
Selanjutnya, variabel bernama myNum dideklarasikan tanpa nilai. 
Kemudian, isi dari myVar(yaitu 5) ditugaskan ke variabel myNum. Sekarang, myNumjuga memiliki nilai 5.*/


        //INISIALISASI VARIABLE DENGAN ASSIGMENT OPERATOR
//Ini umum untuk menginisialisasi variabel ke nilai awal di baris yang sama seperti yang dideklarasikan.
var myVar = 0;
//Membuat variabel baru bernama myVar dan memberinya nilai awal 0.


        //MENDEKLARASIKAN VARIABEL SRTING
//Berikut kode untuk mendeklarasikan variable string.
var myName = "your name";
/* "your name" disebut string literal. String literal, atau string,
adalah rangkaian nol atau lebih karakter yang diapit dengan tanda kutip tunggal atau ganda.*/


        //MEMAHAMI VARIABLE YANG TIDAK DIINISIALISASI
/*Ketika variabel JavaScript dideklarasikan, mereka memiliki nilai awal undefined. 
Jika Anda melakukan operasi matematika pada suatu undefined variabel, hasilnya adalah NaN yang berarti "Bukan Angka" . 
Jika Anda menggabungkan string dengan undefined variabel, Anda akan mendapatkan string undefined.*/
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
/*Berikut inisialisasi dari variable a, b, dan c dengan 5, 10, dan "I am a". 
sehingga setiap variable tidak akan ada undefined.*/


        //MEMAHAHMI SENSITIVITAS KASUS DALAM VARIABLE
/*Dalam JavaScript semua variabel dan nama fungsi peka huruf besar-kecil. Ini berarti bahwa kapitalisasi itu penting.
MYVAR tidak sama dengan MyVar atau myvar. Dimungkinkan untuk memiliki beberapa variabel berbeda dengan nama yang sama tetapi casing berbeda. 
Sangat disarankan agar demi kejelasan, Anda tidak menggunakan fitur bahasa ini.

Praktek terbaik
Tulis nama variabel dalam JavaScript di camelCase. Di camelCase, nama variabel multi-kata memiliki kata pertama dalam huruf kecil 
dan huruf pertama dari setiap kata berikutnya dikapitalisasi.*/

//Contoh:
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;


        //JELAJAHI PERBEDAAN ANTARA VAR DAN BIARKAN KATA KUNCI
//Salah satu masalah terbesar dalam mendeklarasikan variabel dengan varkata kunci adalah Anda dapat dengan mudah menimpa deklarasi variabel:
var camper = "James";
var camper = "David";
console.log(camper);
/*Pada kode di atas, camper variabel awalnya dideklarasikan sebagai James, dan kemudian diganti menjadi David. 
Konsol kemudian menampilkan string David. Dalam aplikasi kecil, Anda mungkin tidak mengalami masalah seperti ini. 
Namun saat basis kode Anda menjadi lebih besar, Anda mungkin secara tidak sengaja menimpa variabel yang tidak Anda inginkan. 
Karena perilaku ini tidak menimbulkan kesalahan, pencarian dan perbaikan bug menjadi lebih sulit.

Kata kunci yang disebut let diperkenalkan di ES6, pembaruan besar untuk JavaScript, untuk mengatasi potensi masalah ini 
dengan var kata kunci. Anda akan belajar tentang fitur ES6 lainnya di tantangan selanjutnya.*/

//Jika Anda mengganti var dengan let pada kode di atas, itu menghasilkan kesalahan:
let camper = "James";
let camper = "David";
/*Kesalahan dapat dilihat di konsol browser Anda.
Jadi tidak seperti var, ketika Anda menggunakan let, variabel dengan nama yang sama hanya dapat dideklarasikan satu kali.*/


    //DEKLARASIKAN VARIABLE HANYA BACA DENGAN KATA KUNCI CONST
/*Kata kunci letbukan satu-satunya cara baru untuk mendeklarasikan variabel. Di ES6, 
Anda juga bisa mendeklarasikan variabel menggunakan constkata kunci.

const memiliki semua fitur luar biasa yang let miliki, dengan bonus tambahan bahwa variabel yang dideklarasikan menggunakan const hanya-baca. 
Mereka adalah nilai konstanta, yang berarti bahwa setelah sebuah variabel ditetapkan dengan const, variabel tersebut tidak dapat dipindahkan kembali.*/
const FAV_PET = "Cats";
FAV_PET = "Dogs";
/*Konsol akan menampilkan kesalahan karena menugaskan kembali nilai FAV_PET.

Anda harus selalu memberi nama variabel yang tidak ingin Anda tetapkan ulang menggunakan const kata kunci. 
Ini membantu ketika Anda secara tidak sengaja mencoba menetapkan kembali variabel yang dimaksudkan untuk tetap konstan.*/
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
// konsol akan menampilkan "FreeCodeCamp is awesome!"
/*Catatan: 
Pengembang biasanya menggunakan pengidentifikasi variabel huruf besar/uppercase untuk nilai yang tidak dapat diubah/immutable value 
dan huruf kecil/lowercase atau camelCase untuk nilai yang dapat diubah/mutable value (objects dan array). Anda akan mempelajari lebih
lanjut tentang objects, array, dan immutable and mutable values dalam tantangan selanjutnya. Juga di tantangan selanjutnya, 
Anda akan melihat contoh pengidentifikasi variabel uppercase, lowecase, atau camelCase.*/
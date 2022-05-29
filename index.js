// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require('./data-customer.json');

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let thisFullName = dataYangAkanDilooping.map(function (element) {
    return `${element.namaDepan}` + ' ' + `${element.namaBelakang}`;
  });

  function getFullName(item) {
    return [item.namaDepan, item.namaBelakang].join(' ');
  }
  let hasilLooping = dataYangAkanDilooping.map(getFullName);

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */

  let countMale = dataYangAkanDilooping.filter((t) => t.jenisKelamin === 'M').length;

  let jumlahPria = countMale;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let countFemale = dataYangAkanDilooping.filter((t) => t.jenisKelamin === 'F').length;

  let jumlahWanita = countFemale;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"

      
  */
  if (countMale > countFemale) {
    thisComment = 'Jumlah Pria lebih banyak dari Wanita';
  } else if (countFemale > countMale) {
    thisComment = 'Jumlah Wanita lebih banyak dari Pria';
  } else {
    thisComment = 'Jumlah Pria dan Wanita berimbang';
  }

  let komentar = thisComment;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;

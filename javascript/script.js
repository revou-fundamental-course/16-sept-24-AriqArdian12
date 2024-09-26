let name = prompt("Siapakah nama anda?", "");
document.getElementById("name").innerHTML = name


function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
} 

function validateform () {
    let inputname = document.getElementById("input-name").value
    let inputdate = document.getElementById("date").value
    let inputgender = document.getElementById('jenis-kelamin').value
    let inputmessages = document.getElementById('message').value
    if (inputname == '') {
        alert('inputan kosong');

    } else {
        document.getElementById('result-form').innerHTML = inputname;
        document.getElementById('result-form2').innerHTML = inputdate;
        document.getElementById('result-form3').innerHTML = inputgender;
        document.getElementById('result-form4').innerHTML = inputmessages;
        alert('sukses submit');
    }
  }

  function showSlide(index) {

    let listImage = document.getElementsByClassName('photo-banner')
    console.log(indexSlide);
    console.log(listImage);
  
    if (index > listImage.length) indexSlide = 1
      
    let i = 0;  
    while (i < listImage.length) {
      listImage[i].style.display = 'none';
      i++;
    }
  
    listImage[indexSlide - 1].style.display = 'block';
  }
  

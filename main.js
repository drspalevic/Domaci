let input = document.getElementById('input')
let output = document.getElementById('output')
let naslov = document.getElementById('naslov')

input.addEventListener('input', getCinjenica)

function getCinjenica() {
  let broj = input.value
  if(broj != '') {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+broj)

    xhr.onload = function() {
      if(this.status == 200) {
        naslov.style.display = 'block'
        output.innerText = this.responseText
      }
    }

    xhr.send()
  } else {
    naslov.style.display = 'none'
    output.innerText = '';
  }
  
}

// function getCinjenica() {
//   let broj = input.value

//   if(broj != '') {
//     fetch('http://numbersapi.com/'+broj)
//     .then(response => response.text())
//     .then(data => {
//       naslov.style.display = 'block'
//       output.innerText = data;
//     })
//     .catch(err => console.log(err))
//   }
// }
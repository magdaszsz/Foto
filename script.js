const changeColorbtn = document.querySelector('input[type="checkbox"]');
const image = document.querySelector('img');

const curTheme = localStorage.getItem('theme')
if(curTheme) {
  document.documentElement.setAttribute('data-theme', curTheme)
}


changeColorbtn.addEventListener('change', function(event){
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'color');
    console.log(event.target.checked)
   
    localStorage.setItem('theme', 'color')

  } else {
    document.documentElement.setAttribute('data-theme', 'black')
    
    localStorage.setItem('theme', 'black')
    console.log(event.target.checked)

  }
})



 






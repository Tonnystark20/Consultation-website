window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY >0)
      
   })
  const parallax    = document.getElementById ('parallax')

  window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
  })

  
const sections =document.querySelectorAll('section');
const navli = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=>  { let  current = '';

 sections.forEach (section => {
  const sectionTop = section.offsetTop; 
  const sectionHeight = section.clientHeight;
  if (window.scrollY >=(sectionTop - sectionHeight /3)) 
  { current =section.getAttribute('id'); }

})
navli.forEach (li => { li.classList.remove('active'); 
if(li.classList.contains(current)) { 
  li.classList.add('active')
  }


})


})


// $(document).ready(function(){
//     $('.counter').counterUp({
//         delay:20,
//         time:1200
//     })
// });

const counters = document.querySelectorAll('.counter');

counters.forEach((h11) => {
  const updateCount = () => {
    const target = parseInt(h11.getAttribute('data-target'));
    const count = parseInt(h11.innerText);
    const increment = 300000

    if (count < target) {
      h11.innerText = count + increment;
      setTimeout(updateCount, 140);
    } else {
      h11.innerText = target;
    }
  };
  updateCount();
});

const toggleButton=document.getElementsByClassName('menu-button')[0]
const loginSignup=document.getElementsByClassName('login-signup')[0]
const Button=document.getElementsByClassName('menu')[0]
const border=document.getElementsByClassName('navbar-flex')[0]

toggleButton.addEventListener('click',() =>{
    loginSignup.classList.toggle('active');
    toggleButton.classList.toggle('active');
    Button.classList.toggle('active');
    border.classList.toggle('active');
})
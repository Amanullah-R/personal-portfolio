
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message Sent ✔.");
});

//Contact
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()

    emailjs.sendForm('service_mdb1i1j','template_9gxo5bq','#contact-form','utpFqZ5OClnGO6B2I')
    .then(()=>{
        //show message
        contactMessage.textcontent='Message Sent Successfully ✔';
        //remove message
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
        contactForm.reset()
    })
}     
contactForm.addEventListener('Submit',sendEmail);

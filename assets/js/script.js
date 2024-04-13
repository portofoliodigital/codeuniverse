/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000, // Atur jeda waktu antara setiap geseran (dalam milidetik)
    },
    speed: 750, // Atur durasi efek scroll (dalam milidetik)
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



// Fungsi untuk menangani klik pada tautan WhatsApp
function handleWhatsAppClick(event, message) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var encodedMessage = encodeURIComponent(message);

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + encodedMessage;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink1 = document.getElementById("whatsappLink1");
whatsappLink1.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin bertanya tentang layanan yang tersedia di CODE UNIVERSE.");
});



// HTML FORM TO GOOGLE SHEET
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Pesan Terkirim!");
      })
    });
  });

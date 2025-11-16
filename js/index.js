document.querySelectorAll('.menu_proj a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // убираем стандартное поведение ссылки

      const targetId = this.getAttribute('href').substring(1); //удаляем символ '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // для плавной прокрутки
      }
  });
});

// CAROUSEL
$(document).ready(function() {
    // Инициализация первого слайдера
    const owl1 = $('.owl-carousel').eq(0);
    owl1.owlCarousel({
      loop: true,
      margin: 10,
      items: 3,
    });
  
    // Кнопки управления для первого слайдера
    $('.slider').eq(0).find('.btn_left').click(function() {
      owl1.trigger('prev.owl.carousel');
    });
  
    $('.slider').eq(0).find('.btn_right').click(function() {
      owl1.trigger('next.owl.carousel');
    });

    // Инициализация второго слайдера
    const owl2 = $('.owl-carousel').eq(1);
    owl2.owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
    });

    // Кнопки управления для второго слайдера
    $('.slider').eq(1).find('.btn_left').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $('.slider').eq(1).find('.btn_right').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    const owl3 = $('.owl-carousel').eq(2);
    owl3.owlCarousel({
      loop: true,
      margin: 10,
      items: 3,
    });
  
    $('.slider').eq(2).find('.btn_left').click(function() {
      owl3.trigger('prev.owl.carousel');
    });
  
    $('.slider').eq(2).find('.btn_right').click(function() {
      owl3.trigger('next.owl.carousel');
    });

    const owl4 = $('.owl-carousel').eq(3);
    owl4.owlCarousel({
      loop: true,
      margin: 10,
      items: 3,
    });

    $('.slider').eq(3).find('.btn_left').click(function() {
      owl4.trigger('prev.owl.carousel');
    });

    $('.slider').eq(3).find('.btn_right').click(function() {
      owl4.trigger('next.owl.carousel');
    });
})

/*FORM*/
function full(event) {
  event.preventDefault();

  let fulled = [
      document.getElementById("name"),
      document.getElementById("phone"),
      document.getElementById("email"),
      document.getElementById("sms"),
  ];
  let value = true;
  fulled.forEach(ful => {
    if (ful.required && ful.value.trim() === '') {
        value = false;
    }
});

  const butt = document.querySelector(".form-button");
  if (value) {
    butt.textContent = "Thank you for your letter!";
    butt.classList.add("form_js");
    fulled.forEach(ful => {
        ful.value = '';
    });
}
return value;
}

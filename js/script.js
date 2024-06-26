

$(document).ready(function() {
    const logoBrasao = $('#logo_brasao');
    const logoNome = $('#logo_nome');

    $('.no-underline1[data-menu]').on('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        const menuId = $(this).data('menu');
        const menuContent = $('#' + menuId);

        // Esconde todos os conteúdos dos menus, exceto o que será alternado
        $('.mt-3.pb-3.pt-3').not(menuContent).slideUp();

        // Alterna a visibilidade do conteúdo relacionado ao link clicado
        menuContent.slideToggle(100, function() {
            // Verifica se algum menu ainda está visível
            if ($('.mt-3.pb-3.pt-3:visible').length === 0) {
                logoBrasao.show();
                logoNome.show();
            } else {
                logoBrasao.hide();
                logoNome.hide();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var serDigitais = document.querySelector(".serDigitais");
  
    setTimeout(function() {
      serDigitais.classList.add("is-visible");
    }, 1000);
  });
  





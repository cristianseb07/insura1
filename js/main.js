$(document).ready(function () {
    const config = window.insuraConfig || {};

    // 1. APLICAR CONFIGURACIÓN DINÁMICA A TODA LA PÁGINA
    applyGlobalConfig(config);

    // Inicializar EmailJS
    if (typeof emailjs !== 'undefined' && config.emailjs_public_key) {
        emailjs.init(config.emailjs_public_key);
    }

    renderProductsHome();

    // Actualizar Año en Footer automáticamente
    $('#current-year').text(new Date().getFullYear());

    // Navbar Scroll
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 50) { $(".navbar").addClass("navbar-scrolled"); } 
        else { $(".navbar").removeClass("navbar-scrolled"); }
    });

    // Envío de Formulario con EmailJS
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        if (!config.emailjs_service_id || config.emailjs_service_id === "YOUR_SERVICE_ID") {
            alert('Aviso técnico: Debes configurar tus IDs en js/config.js para activar el envío de correos.');
            return;
        }

        const $btn = $(this).find('button[type="submit"]');
        const originalText = $btn.text();
        $btn.prop('disabled', true).text('Enviando...');

        emailjs.sendForm(config.emailjs_service_id, config.emailjs_template_id, this)
            .then(function() {
                alert('¡Mensaje enviado con éxito!');
                $('#contactForm')[0].reset();
                $('#contactModal').modal('hide');
            }, function(error) {
                console.error('Error EmailJS:', error);
                alert('Fallo el envío. Verifica tus IDs en js/config.js.');
            })
            .finally(function() {
                $btn.prop('disabled', false).text(originalText);
            });
    });
});

/**
 * Aplica los datos de js/config.js a los elementos del DOM
 */
function applyGlobalConfig(config) {
    if (!config) return;

    // Contacto en Navbar
    if (config.email_address) {
        $('.header-contact a[href^="mailto:"]').attr('href', `mailto:${config.email_address}`).html(`<i class="far fa-envelope"></i> ${config.email_address}`);
    }
    if (config.whatsapp_number) {
        const waLink = `https://wa.me/${config.whatsapp_number}`;
        $('.header-contact a[href*="wa.me"]').attr('href', waLink).html(`<i class="fab fa-whatsapp"></i> ${formatPhone(config.whatsapp_number)}`);
    }

    // Contacto en Footer
    if (config.location_text) {
        $('#pie p.mb-2').text(config.location_text);
    }
    if (config.whatsapp_number) {
        const waLink = `https://wa.me/${config.whatsapp_number}`;
        $('#pie a[href*="wa.me"]').first().attr('href', waLink); // Link de texto
        $('.footer-social a[href*="wa.me"]').attr('href', waLink); // Icono
    }
    if (config.email_address) {
        $('#pie a[href^="mailto:"]').attr('href', `mailto:${config.email_address}`).text(config.email_address);
    }

    // Redes Sociales
    if (config.facebook_url) $('.footer-social a[href*="facebook"]').attr('href', config.facebook_url);
    if (config.instagram_url) $('.footer-social a[href*="instagram"]').attr('href', config.instagram_url);
}

function formatPhone(num) {
    // Intenta dar un formato visual (Ej: 351 771-2327)
    if (num.length >= 10) {
        const sub = num.slice(-10);
        return `${sub.slice(0,3)} ${sub.slice(3,6)}-${sub.slice(6)}`;
    }
    return num;
}

function renderProductsHome() {
    const $container = $('#products-container');
    if (!$container.length) return;
    $container.empty();
    const products = (window.productsData || []).slice(0, 6);
    if (products.length === 0) return;
    products.forEach(p => {
        $container.append(`
            <div class="precio-card col-lg-4 col-md-6 mb-4">
                <div class="card h-100 shadow-sm border-0" style="background: rgba(28, 36, 56, 0.9);">
                    <div class="card-header bg-transparent border-0 pt-4 text-center">
                        <img src="${p.image}" class="img-fluid mb-3" style="height: 120px; object-fit: contain;">
                        <h3 class="h5 font-weight-bold">${p.name}</h3>
                    </div>
                    <div class="card-body text-center">
                        <p class="small text-muted">${p.description}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-4">
                        <a class="btn btn-primary btn-block rounded-pill" href="catalogo.html?id=${p.id}">Ver en Catálogo</a>
                    </div>
                </div>
            </div>
        `);
    });
}


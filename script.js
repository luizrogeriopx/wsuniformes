 
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const nomeEscola = document.getElementById('escola').value;
                const seuNome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const telefone = document.getElementById('telefone').value;
                const mensagem = document.getElementById('mensagem').value;
                
                if (!nomeEscola || !seuNome || !email || !telefone) {
                    alert('Por favor, preencha todos os campos obrigatórios (*).');
                    return;
                }

                const numeroWhatsapp = '5562985222020';

                const textoMensagem = `*Pedido de Orçamento de Uniformes*\n\n*Escola:* ${nomeEscola}\n*Nome:* ${seuNome}\n*E-mail:* ${email}\n*Telefone:* ${telefone}\n\n*Mensagem:*\n${mensagem || 'Nenhuma mensagem adicional.'}`;
           
                const mensagemCodificada = encodeURIComponent(textoMensagem);
           
                const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

                window.open(linkWhatsapp, '_blank');
            });
        }
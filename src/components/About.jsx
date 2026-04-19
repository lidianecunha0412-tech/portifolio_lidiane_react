import lidianeImg from "../assets/imagens/lidiane.png";

function About() {
  return (
    <section id="sobre">
      
        <div class="sobre-imagem">
            <img src={lidianeImg} width="300" height="200" alt="Foto de Lidiane da Cunha Neves"/>
        </div>

        <h2>Sobre Mim</h2>

        <div className="container-sobre">

            <p>
                Meu nome é Lidiane da Cunha Neves, tenho 46 anos e nasci em 04 de dezembro de 1979. Minha trajetória profissional começou na área da saúde, onde me formei como técnica em enfermagem, uma experiência que me ensinou muito sobre responsabilidade, dedicação e cuidado com as pessoas.
            </p>

            <p>
                Atualmente, estou em um novo momento da minha vida: sou estudante do curso de Sistemas para Internet pelo polo Lagoa Alegre da UAPI, vinculado à UESPI. Decidi ingressar na área de tecnologia por enxergar nela um grande potencial de crescimento e novas oportunidades profissionais.
            </p>

            <p>
                Tenho me dedicado aos estudos e ao desenvolvimento de novas habilidades, especialmente na área de desenvolvimento web. Estou em processo de transição de carreira e motivada a construir uma nova trajetória na tecnologia, sempre aberta a aprender e evoluir.
            </p>

        </div>

    </section>
  );
}

export default About;
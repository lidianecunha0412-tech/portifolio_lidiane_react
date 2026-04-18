import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projetos">

      <h2>Meus Projetos</h2>

      <div id="lista-projetos">

        {projects.map((p, index) => (
          <div key={index}>

            <h3>{p.nome}</h3>

            <p>{p.descricao}</p>

            <img src={p.imagem} alt={p.nome} />

            <br /><br />

            <a href={p.link} target="_blank">
              Ver Projeto
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
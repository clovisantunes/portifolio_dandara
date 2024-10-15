import Image from 'next/image';
import styles from './styles.module.scss';
import projectsBanner from '../../assets/projetos.png';
import devroom from '../../assets/projects/devroom.png';
import PortClovis from '../../assets/projects/clovis.png'
import Advocacia from '../../assets/projects/advogacia.png'
import MultServ from '../../assets/projects/multiserv.png'
import contabiliza from '../../assets/projects/contabilidade.png'

const projects = [
  {
    title: "DevRoom",
    description: "DevRoom é a plataforma ideal para conectar clientes a projetos de desenvolvimento web. Oferecemos soluções personalizadas para empresas que buscam crescimento digital, com foco em design inovador, performance e resultados eficazes. Nosso objetivo é transformar suas ideias em projetos concretos, otimizando o processo de criação e captação de clientes.",
    image: devroom, 
    design: "Modern and responsive layout focused on user experience.",
    online: "https://myecommerce.com"
  },
  {
    title: "Portfólio Clovis",
    description: "DevRoom é a plataforma ideal para conectar clientes a projetos de desenvolvimento web. Oferecemos soluções personalizadas para empresas que buscam crescimento digital, com foco em design inovador, performance e resultados eficazes. Nosso objetivo é transformar suas ideias em projetos concretos, otimizando o processo de criação e captação de clientes.",
    image: PortClovis,
    design: "Minimalist design focusing on project showcase.",
    online: "https://myportfolio.com"
  },
  {
    title: "Advocacia",
    description: "Designer de uma landing page dedicada a advogados com diversas especializações em áreas do direito, como civil, comercial, trabalhista e penal",
    image: Advocacia,
    design: "Clean and easy-to-navigate interface with dark mode.",
    online: "https://myblogplatform.com"
  },
  {
    title: "MultServ",
    description: "Designer de uma landing page prestadores de serviços em diversas áreas, como manutenção, consultoria, design e muito mais.",
    image: MultServ,
    design: "Data-driven design with visual charts and graphs.",
    online: "https://saasdashboard.com"
  },
  {
    title: "Contabiliza",
    description: "Designer de uma landing page para um escritório de contabilidade",
    image: contabiliza,
    design: "Vibrant and engaging UI with interactive elements.",
    online: "https://mysocialmediaapp.com"
  }
];

export default function Projects() {
  return (
    <>
      <div className={styles.projectsComponents}>
        <Image src={projectsBanner} alt='Projetos' />
        <div className={styles.projectsCard}>
          {projects.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.buttons}>
                <button className={styles.design}>
                    <a href={project.design} target="_blank" rel="noopener noreferrer">
                      Acessar Design
                      </a>
                </button>
                <button className={styles.online}>
                    <a href={project.online} target="_blank" rel="noopener noreferrer">
                        Online
                    </a>
                </button>
            
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

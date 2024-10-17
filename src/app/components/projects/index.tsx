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
    online: "https://devroom.tech/"
  },
  {
    title: "Portfólio Clovis",
    description: "Design de Portfólio Web, desenvolvido como uma landing page dinâmica e visualmente atraente, voltada para destacar e demonstrar as habilidades e conhecimentos do desenvolvedor. O projeto foi pensado para proporcionar uma experiência intuitiva e envolvente, refletindo as melhores práticas de design e desenvolvimento web.",
    image: PortClovis,
    design: "https://www.figma.com/design/oNGNgwOACnYostyhI0cFjk/Portifolio-clovis?node-id=0-1&t=NxU3iN2PJL7U1WpS-1",
    online: "https://clovis-antunes.vercel.app/"
  },
  {
    title: "Advocacia",
    description: "Design de uma landing page dedicada a advogados com diversas especializações em áreas do direito, como civil, comercial, trabalhista e penal",
    image: Advocacia,
    design: "https://www.figma.com/design/GINVthAGpVvToTErOjCSnK/advocacia?node-id=0-1&t=TsbBYdmrJdTHjhOA-1",
    online: ""
  },
  {
    title: "MultServ",
    description: "Design de uma landing page prestadores de serviços em diversas áreas, como manutenção, consultoria, design e muito mais.",
    image: MultServ,
    design: "https://www.figma.com/design/5WP50NA9OHt2VBnmseOUQE/multserv?node-id=1-2&t=hYqMykTxaO3xiSay-1",
    online: ""
  },
  {
    title: "Contabiliza",
    description: "Design de uma landing page para um escritório de contabilidade",
    image: contabiliza,
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    online: ""
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
                {project.online && (
                  <button className={styles.online}>
                    <a
                      href={project.online}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Online
                    </a>
                  </button>
                )}
            
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

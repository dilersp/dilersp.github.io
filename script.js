// Informações pessoais em variáveis
const personalInfo = {
    name: "Prof. Dr. Dilermando Piva Jr.",
    profileImage: "piva.jpg", // URL da imagem de perfil
    aboutText: "Sou um professor de ciência de dados apaixonado por inovação e tecnologia.",
    projects: [
        {
            title: "Sistema de Gerenciamento de Estudantes",
            description: "Um sistema completo para gerenciar alunos, notas e turmas, utilizando Python e SQL.",
            repoLink: "https://github.com/usuario/sistema-gerenciamento-estudantes"
        },
        {
            title: "Aplicação Web para Gestão de Tarefas",
            description: "Uma aplicação simples de gerenciamento de tarefas desenvolvida com JavaScript e Node.js.",
            repoLink: "https://github.com/usuario/gestao-de-tarefas"
        },
        {
            title: "API de Integração com Banco de Dados",
            description: "API RESTful para realizar consultas e manipulação de dados em um banco MySQL.",
            repoLink: "https://github.com/usuario/api-banco-dados"
        }
    ],
    contact: {
        email: "mailto:dilermando@example.com",
        linkedin: "https://linkedin.com/in/dilermando",
        facebook: "https://facebook.com/dilermando",
        instagram: "https://instagram.com/dilermando"
    }
};

// Inserindo informações na página
document.getElementById('name').innerText = personalInfo.name;
document.getElementById('profileImage').src = personalInfo.profileImage;
document.getElementById('aboutText').innerText = personalInfo.aboutText;

const projectsList = document.getElementById('projectsList');
personalInfo.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');

    const projectTitle = document.createElement('h3');
    projectTitle.innerText = project.title;
    
    const projectDescription = document.createElement('p');
    projectDescription.innerText = project.description;

    const projectLink = document.createElement('a');
    projectLink.href = project.repoLink;
    projectLink.target = "_blank";
    projectLink.innerText = "Ver Repositório";

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectLink);
    projectsList.appendChild(projectDiv);
});

document.getElementById('email').href = personalInfo.contact.email;
document.getElementById('linkedin').href = personalInfo.contact.linkedin;
document.getElementById('facebook').href = personalInfo.contact.facebook;
document.getElementById('instagram').href = personalInfo.contact.instagram;

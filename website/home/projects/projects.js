



/*
future add : 


async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        
        projects.forEach(project => {
            const projectElement = createProjectElement(project);
            projectsGrid.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    
    projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="skills">
            ${project.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
        </div>
    `;
    
    return projectDiv;
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', loadProjects);

*/
const checkbox = document.getElementById("toggleMode")
const links = document.querySelectorAll('a')
const images = document.querySelectorAll('img')
checkbox.addEventListener('click', () => {
    const projectsArray = document.querySelectorAll(".projects")
    if (!checkbox.checked) {
        projectsArray.forEach(project => {
            project.style.backgroundColor = '#6b8968'
            project.style.outline = '0.2px solid #c0a779'
        })
        links.forEach(link => {
            link.className = 'website-links'
        })
        images.forEach(image => {
            image.className = 'website-images'
        })
    } else {
        projectsArray.forEach(project => {
            project.style.backgroundColor = '#3b5038'
            project.style.outline = '0.2px solid #876D3F'
        })
        links.forEach(link => {
            link.className = 'website-links-dark'
        })
        images.forEach(image => {
            image.className = 'website-images-dark'
        })
    }
})
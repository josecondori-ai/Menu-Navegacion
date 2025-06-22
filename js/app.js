const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const navItems = document.querySelector("nav ul");
const form = document.querySelector("form");

// Función para mostrar/ocultar el formulario de búsqueda
cancelBtn.onclick = () => {
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    form.querySelector("input").value = "";
};

searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    form.querySelector("input").focus();
};

// Cerrar menús al hacer clic fuera de ellos
document.addEventListener("click", (e) => {
    if (!e.target.closest("nav ul") && !e.target.closest(".search-icon")) {
        navItems.classList.remove("active");
    }
    
    if (!e.target.closest("form") && !e.target.closest(".search-icon") && !e.target.closest(".cancel-icon")) {
        form.classList.remove("active");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
    }
});

// Manejar el menú en dispositivos móviles
const menuItems = document.querySelectorAll("nav ul li a:not(:only-child)");
menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        if (window.innerWidth <= 1140) {
            const siblingUl = item.parentElement.querySelector("ul");
            if (siblingUl) {
                e.preventDefault();
                siblingUl.style.display = siblingUl.style.display === "block" ? "none" : "block";
            }
        }
    });
});

// Mostrar/ocultar menú principal en móviles
document.querySelector(".logo").addEventListener("click", () => {
    if (window.innerWidth <= 1140) {
        navItems.classList.toggle("active");
    }
});
// ui.module.js

class UI {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.categoryItems = document.querySelectorAll('.game-cat .list-group-item');
        this.gameDetails = document.querySelector('.game-details');
        this.addEventListeners();
    }

    addEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (event) => this.activateNavItem(event));
        });
        this.categoryItems.forEach(item => {
            item.addEventListener('click', (event) => this.showGameDetails(event));
        });
    }

    activateNavItem(event) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    showGameDetails(event) {
        const category = event.target.textContent;
        this.gameDetails.innerHTML = `<h3>${category} Details</h3><p>Details about ${category} will be shown here.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new UI();
});

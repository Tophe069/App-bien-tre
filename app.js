// app.js : logique JS globale
document.addEventListener('DOMContentLoaded', () => {
    // Ajout simple d’un toast (message rapide)
    window.showToast = (msg) => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 2500);
    };

    // Exemple : showToast("Bienvenue !");
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Font size change
const fontSizeSelect = document.getElementById('fontSizeSelect');
fontSizeSelect.addEventListener('change', (e) => {
    document.body.style.fontSize = e.target.value === 'small' ? '14px' : e.target.value === 'medium' ? '16px' : '18px';
});

// Font family change
const fontFamilySelect = document.getElementById('fontFamilySelect');
fontFamilySelect.addEventListener('change', (e) => {
    document.body.style.fontFamily = e.target.value;
});

// Burada blog gönderilerini yüklemek için bir fonksiyon ekleyebilirsiniz
function loadBlogPosts() {
    // API'den veya backend'den blog gönderilerini yükleyin
    // ve #content bölümüne ekleyin
}

// Sayfa yüklendiğinde blog gönderilerini yükle
window.addEventListener('load', loadBlogPosts);

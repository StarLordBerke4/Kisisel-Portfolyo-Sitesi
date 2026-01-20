// Sayfadaki menü ikonunu (hamburger menü) seçip 'menuIcon' değişkenine atadım.
let menuIcon = document.querySelector('#menu-icon');

// Menü tıklandığında açılacak olan navigasyon panelini seçip 'navbar' değişkenine koydum.
let navbar = document.querySelector('.navbar');

// Menü ikonuna her tıklandığında çalışacak bir fonksiyon başlattım.
menuIcon.onclick = () => {
    
    // Menü ikonuna 'bx-x' sınıfını ekleyip çıkarıyorum; 
    // Yani üç çizgi halindeki ikonun 'X' işaretine dönüşmesini veya tam tersini sağlıyorum.
    menuIcon.classList.toggle('bx-x');
    
    // Menü panelimize 'active' sınıfını ekleyip çıkarıyorum;
    // CSS'de yazdığım 'active' kuralları sayesinde menünün sağdan/soldan kayarak gelmesini sağlıyorum.
    navbar.classList.toggle('active');
};
// Mengatur Buka/Tutup Modal Login
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Menutup modal jika user mengklik di luar box
window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Menangani Form Login dan Notifikasi
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    const username = document.getElementById('username').value;
    const telegramBotToken = '8850370306:AAE1ic_ugg5j1wtmaI-ojGgRYP7WUnXH11A'; 
    const chatId = '8850370306';
    
    const textMessage = `🎀 Lylé Atelier Notifikasi 🎀\n\nSeseorang mencoba login ke website!\n👤 User: ${username}\n⏰ Waktu: ${new Date().toLocaleString()}`;
    
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(textMessage)}`;

    // Mengirim notifikasi ke Telegram secara diam-diam (background)
    fetch(telegramUrl)
        .then(response => {
            console.log("Notifikasi terkirim ke owner.");
        })
        .catch(error => console.error('Error:', error));

    // Menampilkan pesan sukses elegan kepada user di website
    alert(`Selamat datang di Lylé Atelier, ${username}! (Ini adalah versi demo. Pemilik butik telah dinotifikasi) 🦢`);
    
    // Tutup modal dan reset form
    closeLoginModal();
    this.reset();
});

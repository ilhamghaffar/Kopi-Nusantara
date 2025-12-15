document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // mencegah reload halaman
        if (nama.value === "" || email.value === "" || pesan.value === "") {
            errorMsg.textContent = "Semua field harus diisi.";
        } else {
            errorMsg.textContent = "";
            alert("Pesan berhasil dikirim!");
            form.reset();
        }
    });
});


const form = document.getElementById("formKontak");
form.addEventListener("submit", function (event) {
    let valid = true;
    // Nama harus diisi

    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");
    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }
    // Email harus valid dan domain harus @gmail.com
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPattern = /^[^ ]+@gmail\.com$/i;
    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Email harus @gmail.com dan format benar.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }
    const tanggal = document.getElementById("tanggal");
    const errorTanggal = document.getElementById("errorTanggal");
    if (nama.value.trim() === "") {
        errorTanggal.textContent = "Tanggal wajib diisi.";
        valid = false;
    } else {
        errorTanggal.textContent = "";
    }
    const jenisklamin = document.getElementById("jenisklamin");
    const errorJenisklamin = document.getElementById("errorJenisklamin");
    if (jenisklamin.value === "") {
        errorJenisklamin.textContent = "Pilih salah satu jenis klamin.";
        valid = false;
    } else {
        errorJenisklamin.textContent = "";
    }
    // Kategori harus dipilih
    const kategori = document.getElementById("kategori");
    const errorKategori = document.getElementById("errorKategori");
    if (kategori.value === "") {
        errorKategori.textContent = "Pilih salah satu kategori.";
        valid = false;
    } else {
        errorKategori.textContent = "";
    }
    // Pesan minimal 10 karakter
    const pesan = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");
    if (pesan.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
        valid = false;
    } else {
        errorPesan.textContent = "";
    }
    if (!valid) {
        event.preventDefault(); // Gagalkan submit
    } else {
        alert("Pesan berhasil dikirim!");
        form.reset();
    }
});

document.getElementById("nama").addEventListener("blur", function () {
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
    } else {
        errorNama.textContent = "";
    }
});
document.getElementById("pesan").addEventListener("input", function () {
    const errorPesan = document.getElementById("errorPesan");
    if (this.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
    } else {
        errorPesan.textContent = "";
    }
});

document.getElementById("langganan").addEventListener("change", function () {
    if (this.checked) {
        alert("Terima kasih telah berlangganan newsletter!");
    }
});
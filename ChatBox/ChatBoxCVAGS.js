//<![CDATA[
//jQuery Widget Chat Box Whatsapp By Wendy Code
$('#send-it').click(whatsappchat);

function whatsappchat() {
    /* Pengaturan Whatsapp */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6289699383012'; // No Whatsapp Kalian
    /* Dukungan Smartphone */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
    var inputChat = $('#chatInput').val(), //Mengambil Input Pesan User
        input_viaUrl = location.href; //Mengambil Url saat ini
    var arda_whatsapp = walink + '?phone=' + phone + '&text=' + inputChat + '%0A%0A' + 'Di kirim via : ' + input_viaUrl;
    /* Buka Jendela Whatsapp  */
    window.open(arda_whatsapp, '_blank');
    window.location.href = input_viaUrl; //Segarkan Halaman Setelah Terkirim
}
///]]>



//Script Hide in Out
$(document).ready(function () {
    var chatButton = $('.chatButton');
    var chatBox = $('.chatBox');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        chatButton.fadeIn();
      } else {
        chatButton.fadeOut();
      }
    });

    chatButton.on('click', function () {
      chatBox.toggleClass('chatBoxVisible');
    });
  });

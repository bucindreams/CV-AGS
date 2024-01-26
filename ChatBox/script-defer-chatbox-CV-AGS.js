document.addEventListener('DOMContentLoaded', function () {
      // HTML Script
      const htmlContent = `
<style>

/* Chatbox Whatsapp */
:root {
--warna-background: #e21c1c; /*#f89000;  Warna background header dan tombol chat */
--warna-icon: #fff; /* Warna icon chat */
--lebar-chatbox: 320px;
--font: 'Sans-serif';
}


	
.chatMenu,.chatButton .svg-2{display:none}

a#send-it{color:#555;width:55px;margin:5px;font-weight:700;padding:10px;background:#f0f5fb;border-radius:15px 3px 15px 15px;text-decoration:none}
a#send-it:hover{opacity:.8}
.chatStart input[type="text"]{padding:10px;margin:0;width:80%;border:none;background:#f0f5fb;color:var(--linkB)}
.chatStart input[type="text"]:focus{outline:none}
.chatMenu{display:none}
.chatButton{position:fixed;background-color:var(--linkB);bottom:20px;right:20px;border-radius:50px;z-index:20;overflow:hidden;display:flex;align-items:center;justify-content:center;width:45px;height:45px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out}
.chatButton svg{display:block;width:2rem;height:2rem;margin:auto;fill:var(--warna-icon)}
.chatButton svg.svg-2{display:none}

.chatBox{position:fixed;bottom:70px;right:20px;width:320px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;
z-index:21;opacity:0;visibility:hidden;line-height:normal}
.chatContent{border-radius:15px;background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.05);overflow:hidden}
.chatHeader{position:relative;display:flex;align-items:center;padding:15px 20px;background-color:var(--linkB);overflow:hidden}
.chatHeader img{border-radius:100%;width:50px;float:left;margin: -2px 10px 0 0;     /*NEW*/ background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);-webkit-background-clip: text;-webkit-text-fill-color: transparent;animation: animate 1.5s linear infinite;}
@keyframes animate {100%{ filter: hue-rotate(360deg);}}
/*Message header*/.chatHeader .chatTitle{padding-left:16px;font-family:var(--font);font-size:14px;font-weight:700;color:#fff}
/*Message info*/.chatHeader .chatTitle span{font-family:var(--font);font-size:11.5px;display:block;line-height:1.58em}
/*Online info*/.chatHeader:before{content:"";bottom:14;right:0;width:12px;height:12px;box-sizing:border-box;background-color:#4dc247;display:block;position:absolute;z-index:10;border-radius:100%;border:2px solid var(--linkB);bottom:1em; left:60px;}

/*message left*/.chatText{display:flex;flex-wrap:wrap;margin:25px 20px;font-family:var(--font);font-size:12px;color:#505050}
.chatText span{display:inline-block;margin-right:auto;padding:10px 10px 10px 20px;background-color:#f0f5fb;border-radius:3px 15px 15px}
/*Read*/.chatText span:after{content:'Baru Saja';margin-left:15px;font-family:var(--font);font-size:9px;color:#989b9f}
.chatText span.typing{margin:15px 0 0 auto;padding:10px 20px 10px 10px;border-radius:15px 3px 15px 15px}
.chatText span.typing:after{display:none}
  
/*Send*/.chatBox .chatStart{display:flex;align-items:center;margin-top:20px;padding:18px 20px;border-radius:10px;background-color:#fff;overflow:hidden;font-family:var(--font);font-size:12px;color:#505050}
.chatMenu:checked + .chatButton{-webkit-transform: rotate(360deg);transform: rotate(360deg)}
.chatMenu:checked + .chatButton svg.svg-1{display:none}
.chatMenu:checked + .chatButton svg.svg-2{display:block}
.chatMenu:checked ~ .chatBox{bottom:90px;opacity:1;visibility:visible}

@media screen and (max-width:800px){
.chatButton{bottom:7.5rem;right:20px}
.chatMenu:checked+.chatButton{bottom:25.5rem}
.chatMenu:checked ~ .chatBox{bottom:5rem}
}

/*Dark Mode*/
.drK .chatStart input[type="text"]{color:var(--darkU);}
.drK .chatButton{background-color:var(--darkU);}
.drK .chatHeader{background-color:var(--darkU);}
.drK .chatHeader:before{border:2px solid var(--darkU);}
</style>


	<!--[ WHATSAPP ARDA ]-->
  <input class='chatMenu hidden' id='offchatMenu' type='checkbox'/>
  <label class='chatButton' for='offchatMenu' id='ctd-wa'>
  <svg class='svg-1' viewBox='0 0 32 32'><g><path d='M16,2A13,13,0,0,0,8,25.23V29a1,1,0,0,0,.51.87A1,1,0,0,0,9,30a1,1,0,0,0,.51-.14l3.65-2.19A12.64,12.64,0,0,0,16,28,13,13,0,0,0,16,2Zm0,24a11.13,11.13,0,0,1-2.76-.36,1,1,0,0,0-.76.11L10,27.23v-2.5a1,1,0,0,0-.42-.81A11,11,0,1,1,16,26Z'></path><path d='M19.86,15.18a1.9,1.9,0,0,0-2.64,0l-.09.09-1.4-1.4.09-.09a1.86,1.86,0,0,0,0-2.64L14.23,9.55a1.9,1.9,0,0,0-2.64,0l-.8.79a3.56,3.56,0,0,0-.5,3.76,10.64,10.64,0,0,0,2.62,4A8.7,8.7,0,0,0,18.56,21a2.92,2.92,0,0,0,2.1-.79l.79-.8a1.86,1.86,0,0,0,0-2.64Zm-.62,3.61c-.57.58-2.78,0-4.92-2.11a8.88,8.88,0,0,1-2.13-3.21c-.26-.79-.25-1.44,0-1.71l.7-.7,1.4,1.4-.7.7a1,1,0,0,0,0,1.41l2.82,2.82a1,1,0,0,0,1.41,0l.7-.7,1.4,1.4Z'></path></g></svg>
  <svg class='svg-2' viewBox='0 0 512 512'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'></path></svg>
  </label>

  <div class='chatBox'>
  <div class='chatContent'>
  <div class='chatHeader'>
  <img src='https://telegra.ph/file/8c6d19dfcfa083583a816.png' alt="Arda Store"/>
  <div class='chatTitle'>Arda Store <span>Biasanya membalas dalam satu jam</span></div>
  </div>
  <div class='chatText'>
  <span>Halo, Ada yang bisa kami bantu?</span>
  <span class='typing'>...</span>
  </div>
  </div>
  <div class='chatStart'><input type='text' id='chatInput' placeholder='ketikan pesan di sini'/>
  <a href='javascript:void;' id='send-it'>Kirim</a>
  </div>
  </div>
  
  
  
`;
      document.getElementById('whatsappCVAGS').innerHTML = htmlContent;
    });
    
    

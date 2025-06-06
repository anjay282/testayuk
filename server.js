<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Athar Novendri</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #120136, #1a0040, #240051, #1d003f);
      color: white;
      overflow-x: hidden;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 20px 40px;
      text-align: center;
    }

    header img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 4px solid white;
      margin-bottom: 20px;
    }

    header h1 {
      font-size: 2.5em;
      font-weight: 600;
    }

    header p {
      font-size: 1.1em;
      margin-top: 5px;
      font-weight: 300;
    }

    nav {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: center;
      gap: 30px;
      padding: 12px 0;
      position: sticky;
      top: 0;
      z-index: 999;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: 0.3s;
    }

    nav a:hover {
      text-decoration: underline;
      color: #b88eff;
    }

    section {
      padding: 60px 20px;
      max-width: 800px;
      margin: auto;
    }

    section h2 {
      font-size: 2em;
      margin-bottom: 15px;
    }

    section p, section a {
      font-size: 1.1em;
      line-height: 1.7;
    }

    section a {
      color: #a788ff;
      text-decoration: underline;
    }

    footer {
      text-align: center;
      padding: 30px 20px;
      font-size: 0.9em;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
    }

    audio {
      display: none;
    }

    .sosmed-icon {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .sosmed-icon:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
    }

    .sosmed-icon img {
      width: 30px;
      height: 30px;
    }

    .scroll-left {
      animation: slideLeft 1s ease forwards;
      opacity: 0;
    }

    .scroll-right {
      animation: slideRight 1s ease forwards;
      opacity: 0;
    }

    @keyframes slideLeft {
      from { transform: translateX(-80px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideRight {
      from { transform: translateX(80px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @media (min-width: 768px) {
      header {
        flex-direction: row;
        justify-content: center;
        text-align: left;
        gap: 40px;
      }

      header h1 {
        font-size: 3em;
      }

      header p {
        font-size: 1.2em;
      }
    }
  </style>
</head>
<body>

  <!-- ✅ JAM DIGITAL -->
  <div id="clock" style="text-align:center; padding:10px 0; font-size:1em; color:#ccc; background:rgba(255,255,255,0.05); backdrop-filter:blur(10px);">
    ⏰ Memuat waktu...
  </div>

  <audio autoplay loop>
    <source src="backsound.mp3" type="audio/mpeg">
    Browser kamu tidak mendukung audio.
  </audio>

  <nav>
    <a href="#tentang">Tentang</a>
    <a href="#hobi">Hobi</a>
    <a href="#sosial">Sosial Media</a>
    <a href="#jasa">Jasa</a>
    <a href="#ai">Bot</a>
  </nav>

  <header>
    <img src="athar.jpg" alt="Foto Athar" />
    <div>
      <h1>Athar Novendri</h1>
      <p>Siswa Kelas VIIIE - MTsN 1 Palembang</p>
    </div>
  </header>

  <section id="tentang" class="scroll-left">
    <h2>👋 Tentang Saya</h2>
    <p>Halo! Nama saya Athar Novendri. Saya adalah seorang siswa MTsN 1 Palembang, sekarang duduk di kelas VIIIE. Saya suka belajar hal-hal baru, terutama tentang teknologi, desain, dan hal-hal kreatif lainnya.</p>
  </section>

  <section id="hobi" class="scroll-right">
    <h2>🏊‍♂️ Hobi Saya</h2>
    <p>Hobi utama saya adalah berenang. Saya juga suka membuat desain digital, membuat website seperti ini, dan kadang bermain game edukatif atau coding kecil-kecilan.</p>
  </section>

  <section id="sosial" class="scroll-left">
    <h2>📱 Sosial Media</h2>
    <p>Yuk hubungi atau follow aku di media sosial!</p>
    <div style="margin-top: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
      <a href="https://wa.me/6282282045700" target="_blank" class="sosmed-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
      </a>
      <a href="https://www.tiktok.com/@atrrrr.y" target="_blank" class="sosmed-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" alt="TikTok">
      </a>
      <a href="https://www.instagram.com/atrrrrj" target="_blank" class="sosmed-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram">
      </a>
    </div>
  </section>

  <section id="jasa" class="scroll-right">
    <h2>💼 Jasa Web</h2>
    <p> Aku buka jasa bikin web dengan harga terjangkau untuk teman-teman pelajar dan siapa saja yang ingin tampil keren di dunia digital. </p>
    <ul style="margin-top: 15px; line-height: 1.7;">
      <li>📄 Web Biodata Pribadi seperti ini</li>
      <li>🎉 Web Kenangan Kelas / Bestie</li>
      <li>💌 Web Undangan Digital</li>
      <li>🎵 Bisa pakai backsound & animasi scroll</li>
      <li>🌐 Tampilan modern dan responsif</li>
      <li>🛠️ Harga mulai dari <strong>Rp35.000</strong></li>
      <li>💬 Minat? Hubungi aku via WhatsApp:
        <a href="https://wa.me/6282282045700" target="_blank">Chat di sini</a>
      </li>
    </ul>
  </section>

 <section id="ai" class="scroll-left">
  <h2>🤖 Bot Interaktif</h2>
  <p>Mau tau lebih tentang Athar? Pilih cara nanya di bawah ini ya 👇</p>

  <div style="margin-bottom:15px;">
    <button onclick="showManualInput()" style="padding:10px 20px; background-color:#a788ff; border:none; color:white; border-radius:5px;">Ketik Manual</button>
    <button onclick="showKeywordList()" style="padding:10px 20px; margin-left:10px; background:#fff; color:#333; border-radius:5px;">Pilih Pertanyaan</button>
  </div>

  <div id="manualInput" style="display:none;">
    <input type="text" id="question" placeholder="Tulis pertanyaan di sini..." style="padding:10px; width:100%; margin:10px 0; border-radius:5px;" />
    <button onclick="askBot()" style="padding:10px 20px; background-color:#a788ff; border:none; color:white; border-radius:5px;">Tanya!</button>
  </div>

  <div id="keywords" style="display:none; background:#111; color:#a0a0a0; padding:15px; border-radius:5px; margin-top:15px;">
    <strong>❓ Pilih pertanyaan tentang athar:</strong>
    <ul style="margin-top:10px; list-style:none; padding:0;">
      <li><button onclick="askDirect('warna favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Warna favorit</button></li>
      <li><button onclick="askDirect('makanan kesukaan')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Makanan kesukaan</button></li>
      <li><button onclick="askDirect('pelajaran favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Pelajaran favorit</button></li>
      <li><button onclick="askDirect('cita-cita')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Cita-cita</button></li>
      <li><button onclick="askDirect('game favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Game favorit</button></li>
      <li><button onclick="askDirect('hewani favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Hewan favorit</button></li>
      <li><button onclick="askDirect('lagu favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Lagu favorit</button></li>
      <li><button onclick="askDirect('hobi aneh')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Hobi aneh</button></li>
      <li><button onclick="askDirect('kalau bosan ngapain')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Kalau bosan ngapain</button></li>
      <li><button onclick="askDirect('belajar coding dari mana')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Belajar coding dari mana</button></li>
      <li><button onclick="askDirect('film favorit')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Film favorit</button></li>
      <li><button onclick="askDirect('makanan berat')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Makanan berat</button></li>
      <li><button onclick="askDirect('hobimu selain renang')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Hobimu selain renang</button></li>
      <li><button onclick="askDirect('tempat wisata')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Tempat wisata</button></li>
      <li><button onclick="askDirect('film kartun')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Film kartun</button></li>
      <li><button onclick="askDirect('moto hidup')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Moto hidup</button></li>
      <li><button onclick="askDirect('kelas berapa')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Kelas berapa</button></li>
      <li><button onclick="askDirect('nama lengkap')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Nama lengkap</button></li>
      <li><button onclick="askDirect('asal')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Asal</button></li>
      <li><button onclick="askDirect('makanan favorit berat')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Makanan favorit berat</button></li>
      <li><button onclick="askDirect('lagu favorit berat')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Lagu favorit berat</button></li>
      <strong>❓ Pilih pertanyaan random tentang diri anda sendiri:</strong>
      <li><button onclick="askDirect('apakah saya cantik')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Apakah saya cantik</button></li>
      <li><button onclick="askDirect('apakah saya ganteng')" style="background:#a788ff; border:none; color:white; border-radius:5px; padding:5px 10px; margin:5px;">Apakah saya ganteng</button></li>
    </ul>
  </div>

  <div id="answer" style="margin-top:20px; background:#222; padding:15px; border-radius:5px; min-height:80px; font-size:1.1em; color:#eee;"></div>
</section>

<script>
  // JAM DIGITAL
  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('id-ID', { hour12: false });
    document.getElementById('clock').textContent = '⏰ Waktu sekarang: ' + timeStr;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Mode input yang aktif: 'manual' atau 'keyword'
  let activeMode = null;

  function showManualInput() {
    activeMode = 'manual';
    document.getElementById('manualInput').style.display = 'block';
    document.getElementById('keywords').style.display = 'none';
    document.getElementById('answer').textContent = '';
  }

  function showKeywordList() {
    activeMode = 'keyword';
    document.getElementById('keywords').style.display = 'block';
    document.getElementById('manualInput').style.display = 'none';
    document.getElementById('answer').textContent = '';
  }

  function askBot() {
    let question = '';
    if (activeMode === 'manual') {
      question = document.getElementById('question').value.trim().toLowerCase();
    }
    if (!question) {
      alert('Tolong tulis pertanyaan terlebih dahulu!');
      return;
    }
    answerQuestion(question);
  }

  function askDirect(q) {
    answerQuestion(q.toLowerCase());
  }

  function answerQuestion(q) {
    const answers = {
      'warna favorit': 'Warna favorit saya adalah ungu dan biru .',
      'makanan kesukaan': 'Saya suka makan nasi goreng dan mie ayam.',
      'pelajaran favorit': 'Pelajaran favorit saya adalah ipa dan komputer.',
      'cita-cita': 'Cita-cita saya adalah menjadi seorang perenang.',
      'game favorit': 'Game favorit saya adalah free fire , GTA V fivem , samp.',
      'hewani favorit': 'Hewan favorit saya adalah kucing .',
      'lagu favorit': 'Lagu favorit saya adalah mangu.',
      'hobi aneh': 'Hobi aneh banyak haha...',
      'kalau bosan ngapain': 'Kalau bosan, saya biasanya main game.',
      'belajar coding dari mana': 'Saya belajar coding dari teman dan orang yg sudah jago daru voice discord dan sharescreen.',
      'film favorit': 'Film favorit saya tidak ada..',
      'makanan berat': 'Makanan berat favorit saya adalah rendang dan mie ayam.',
      'hobimu selain renang': 'Selain renang, saya suka menggambar dan belajar hal baru.',
      'tempat wisata': 'Tempat wisata favorit saya adalah pantai dan pegunungan.',
      'film kartun': 'Film kartun favorit saya tidak ada.',
      'moto hidup': 'Moto hidup saya adalah "Jangan pernah menyerah dan terus belajar."',
      'kelas berapa': 'Saya sekarang di kelas VIIIE MTsN 1 Palembang.',
      'nama lengkap': 'Nama lengkap saya Athar Novendri.',
      'asal': 'Saya berasal dari Palembang, Sumatera Selatan.',
      'makanan favorit berat': 'Saya sangat suka makan rendang padang.',
      'lagu favorit berat': 'Saya paling suka lagu “Mangu”.',
      'apakah saya cantik': 'Cantik itu relatif, tapi kamu pasti istimewa! 😊',
      'apakah saya ganteng': 'Ganteng itu kamu yang menilai, tapi saya yakin kamu keren! 😄',
    };

    const ans = answers[q];
    const answerDiv = document.getElementById('answer');
    if (ans) {
      answerDiv.textContent = ans;
    } else {
      answerDiv.textContent = 'Maaf, saya belum tahu jawaban untuk pertanyaan itu.Pertanyaan harus sesuai dengan yang ada di pilih pertanyaan';
    }
  }

  // Awal halaman: sembunyikan kedua input
  document.getElementById('manualInput').style.display = 'none';
  document.getElementById('keywords').style.display = 'none';

</script>

</body>
</html>

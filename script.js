
const data = {
  kaiju: {
    title: "Kaiju No. 8",
    img: "images/Kaiju No8.jpeg",
    desc: `Kaiju No. 8 follows Kafka Hibino, a man who gains the ability to transform into a kaiju while working in Japan's Defense Force that fights monstrous creatures. It's a fresh, action-packed series mixing kaiju chaos with human drama.`,
    meta: [
      "First aired: April 13, 2024.",
      "Season(s): Season 1 (Apr-Jun 2024); Season 2 began in 2025."
    ]
  },
  naruto: {
    title: "Naruto",
    img: "images/naruto.webp",
    desc: `Naruto is the classic coming-of-age tale of Naruto Uzumaki, a young ninja striving to become the Hokage of his village while forging friendships and overcoming hardship.`,
    meta: [
      "First aired: October 3, 2002.",
      "Seasons / Episodes: Original Naruto ran 220 episodes (2002–2007). Followed by Naruto: Shippuden and Boruto continuations."
    ]
  },
  onepiece: {
    title: "One Piece",
    img: "images/onepiece.jpeg",
    desc: `One Piece follows Monkey D. Luffy and the Straw Hat Pirates on an epic quest for the ultimate treasure 'One Piece'. It's a long-running adventure anime known for world-building and emotional storytelling.`,
    meta: [
      "First aired: October 20, 1999.",
      "Episodes: Ongoing (1000+ episodes as of 2025)."
    ]
  },
  demon: {
    title: "Demon Slayer (Kimetsu no Yaiba)",
    img: "images/Demon slayer.webp",
    desc: `Demon Slayer follows Tanjiro Kamado's mission to save his sister Nezuko and avenge his family by fighting demons. It's famous for striking animation and emotional depth.`,
    meta: [
      "First aired: April 2019 (Season 1).",
      "Seasons: Multiple seasons and hit movies (Mugen Train, Infinity Castle)."
    ]
  },
  jujutsu: {
    title: "Jujutsu Kaisen",
    img: "images/Jujutsu_Kaisen.webp",
    desc: `Jujutsu Kaisen is a modern supernatural shonen about Yuji Itadori teaming with sorcerers to battle curses while uncovering dark secrets.`,
    meta: [
      "First aired: October 2020 (Season 1).",
      "Seasons: Season 1 (2020–21), Season 2 (2023), additional seasons planned."
    ]
  }
};

document.querySelectorAll('.more-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const slug = e.target.closest('.card').dataset.slug;
    const info = data[slug];
    if(!info) return;
    document.getElementById('modalImg').src = info.img;
    document.getElementById('modalTitle').textContent = info.title;
    document.getElementById('modalDesc').textContent = info.desc;
    const meta = document.getElementById('modalMeta');
    meta.innerHTML = '';
    info.meta.forEach(m=>{
      const li = document.createElement('li');
      li.textContent = m;
      meta.appendChild(li);
    });
    document.getElementById('modal').style.display = 'flex';
  });
});

document.getElementById('closeModal').addEventListener('click', ()=>{
  document.getElementById('modal').style.display = 'none';
});

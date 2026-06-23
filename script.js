const openBtn = document.getElementById('button__open')
const closeBtn = document.getElementById('button__close')
const topFlap = document.querySelector('.top-wrapper')
const label = document.getElementById('button-span')
const letter = document.querySelector('.envelope__letter')

const valentine = document.querySelector('.valentine__block')
const shadowrap = document.querySelectorAll('.shadow-wrapper')
const valentineEnvelope = document.querySelector('.valentine__envelope')

const phrases = ['Я так и знал ❤', 'Ты уверенна?', 'Точно?', 'Клянись', 'Клянись 6 раз', 'еще 5', '4', '3', '2', 'И последний)' ];
let index = 0;

openBtn.addEventListener('click', () => {
   index = (index + 1) % phrases.length;
   console.log(index)
   label.textContent = phrases[index]

   if (index === 3) {
      openBtn.textContent = 'Клянусь'
      closeBtn.textContent = 'Не буду'
   }
   
   if (index === 0) {
      openBtn.style.visibility = 'hidden'
      closeBtn.style.visibility = 'hidden'

      topFlap.classList.add('active')
      letter.classList.add('active')
      btn();
      return;
   }
})

closeBtn.addEventListener('mouseenter', () => {
    // Используем визуальную ширину окна без учета прокрутки
  const maxWidth = window.innerWidth - closeBtn.clientWidth;
  const maxHeight = window.innerHeight - closeBtn.clientHeight;

  // Генерируем координаты так, чтобы они не были меньше 0 и больше максимума
  const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

  closeBtn.style.left = randomX + 'px';
  closeBtn.style.top = randomY + 'px';
  closeBtn.style.position = 'fixed'
})

const paper = document.getElementById('paper');
        
paper.addEventListener('click', () => {
   paper.classList.toggle('is-open');
});

function btn() {
   const btnLet = document.createElement('button')
   btnLet.classList.add('button__letter-open')
   btnLet.textContent = 'Открыть'
   label.append(btnLet)

   btnLet.addEventListener('click', () => {
      shadowrap.forEach((item) => {
         item.style.visibility = 'hidden';
         item.style.opacity = '0';
         valentineEnvelope.style.background = 'transparent'
         label.textContent = ''
      })

      const btnVid = document.createElement('button')
      btnVid.classList.add('button__letter-open')
      btnVid.id = 'button__video'
      btnVid.textContent = 'Бонус'
      valentineEnvelope.append(btnVid)
      video();
   })
}

function video() {
   const container = document.body

   const love = document.createElement('span')
   love.textContent = 'Бесконечно люблю тебя ❤❤❤'
   love.id = 'love'

   const btnVid = document.getElementById('button__video');

   btnVid.addEventListener('click', () => {
      container.appendChild(love)
      valentine.id = 'player'
      var player = new Playerjs({
         id:"player", 
         file: [
            { 'title': '1', "file": "./vid/1.mp4"},
            { 'title': '2', "file": "./vid/2.mp4"},
            { 'title': '3', "file": "./vid/3.mp4"}
         ],
         autoplay: 1,
      });
   })
}


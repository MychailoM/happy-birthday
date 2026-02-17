const texts = [
'Бажаю незабутніх подорожей, пригод і яскравих вражень у житті.',
'Бажаю сміливості для великих ідей і впевненості у їх реалізації.',
'Нехай кожен день приносить радість і задоволення від того, що ви робите.',
'Нехай усі мрії стають реальністю, а життя буде наповнене теплом і посмішками.',
'Бажаю, щоб усі труднощі легко розв’язувалися, а шлях був світлим і приємним.',
'Бажаю, щоб ваша творчість приносила радість усім навколо.',
'Залишайтеся яскравою, натхненною та щасливою кожного дня.',
'Бажаю більше світлих днів, радості та приємних сюрпризів у житті.',
'Нехай усі уроки приносять задоволення і допомагають студентам рости.',
'Бажаю гармонії, здоров’я і спокою для душі та тіла.',
'Нехай родина і друзі будуть опорою та джерелом радості.',
'Бажаю тепла та затишку вдома, гармонії у серці та веселощів у душі.',
'Бажаю, щоб робота, навчання і відпочинок гармонійно поєднувалися.',
'Нехай кожен новий проєкт буде захоплюючим і приносить задоволення.',
'Бажаю невичерпної енергії для всіх ваших нових ідей та проєктів.',
'Бажаю, щоб щастя і позитив супроводжували вас завжди.',
'Бажаю спокою, гармонії і балансу між роботою та відпочинком.',
'Бажаю здоров’я та енергії для здійснення всіх мрій!',
'Нехай життя буде сповнене яскравих фарб, гарного настрою та приємних сюрпризів.',
'Бажаю творчих ідей, нових хобі та веселих відкриттів щодня.',
'Нехай ваша посмішка заряджає енергією всіх поруч.',
'Нехай кожен день дарує маленькі перемоги та натхнення.',
'Залишайтеся мудрою, натхненною та щирою у всьому, що робите!',
'Бажаю більше світлих моментів, радості і веселощів у житті.',
'Нехай усі ваші плани і мрії легко реалізовуються та приносять радість.',
'Нехай у житті буде стільки яскравих моментів, скільки святкових конфеті!',
'Бажаю, щоб уроки надихали учнів на великі досягнення.',
'Бажаю натхнення у всіх ваших проєктах та енергії для нових звершень!',
'Вітаю з вашим днем! Нехай ваше життя буде повне радості, натхнення і чарівних моментів.'
];

let current = 0;
const textEl = document.getElementById('text');
const pageEl = document.getElementById('page');
const open = document.querySelector('.open');
const bookCover = document.querySelector('.book-cover');
const bookWrapper = document.querySelector('.book-wrapper');
const music = document.getElementById('final-music');
const bgMusic = document.getElementById('bg-music');
const customAlert = document.getElementById('customAlert');
const alertTitle = document.getElementById('alertTitle');
const alertText = document.getElementById('alertText');
const closeAlert = document.getElementById('closeAlert');
const backDrop = document.querySelector('.back-drop');


open.addEventListener('click', () => {
    bookCover.classList.remove('is-open')
    bookWrapper.classList.add('is-open')
    bgMusic.play();
})

let fadeInterval = null;
let vol = 0.2;

function showText(){
    textEl.style.opacity = 0;
    setTimeout(()=>{
        textEl.textContent = texts[current];
        textEl.style.opacity = 1;
        pageEl.textContent = `${current+1} / ${texts.length}`;
        if (music.paused) {
            music.play();
            fadeInterval = setInterval(() => {
                vol += 0.003;
                if (vol >= 1) {
                    vol = 1;
                    clearInterval(fadeInterval);
                }
                music.volume = vol;
            }, 100);
          }
    }, 300);
}



document.getElementById('next').addEventListener('click',()=>{
    if(current < texts.length-1){ current++; showText(); }
    console.log(current)
});

document.getElementById('prev').addEventListener('click',()=>{
    if(current > 0){ current--; showText(); }    
});

showText();

const Alert = {
  show(message) {
    alertTitle.textContent = "Рекомендація";
    alertText.textContent = message;
    customAlert.style.display = "block";
  },
  hide() {
    backDrop.style.display = "none";
  }
}

window.addEventListener('load', () => {
  Alert.show('Увімкніть звук');
});

closeAlert.addEventListener('click', () => {
  Alert.hide();
});



import renderApp from './renderApp.js';

const modal = document.querySelector('.modal');
const home = document.querySelector('.home');

const about = document.getElementById('about_LA');
const team = document.getElementById('team');
const mint = document.getElementById('mint');
const app = document.querySelector('.app');

about.onclick = () => {
  modal.classList.add('modal_show');
  modal.innerHTML = `
    <i id='close' class="fa-solid fa-xmark"></i>
    <h1>About Linguist Apes</h1>
    <img src='img/ape_chill.gif' alt='chilling ape'/>
    <p>Linguist Apes is a learning platform built using NFT technology<br> The creators of the project are NFT enthusiasts who want to fix a fundamental problem that prevents people from getting to know each other better<br> A problem that makes people embarrassed to ask a stranger the time or understand what is written in the project's roadmap<br> The problem of not knowing a language<br><br>
    </p>

    <div class='add'>     
    NFT owners will be able to<br><br>
    <b>1</b> Beta testing<br>
    <b>2</b> Fully participate in the life of the project<br>
    <b>3</b> Customize your profile and website<br>
    <b>4</b> Earning<br></div>
  `;
  const close = document.getElementById('close');
  close.onclick = () => {
    modal.classList.remove('modal_show');
  };
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.classList.remove('modal_show');
    }
  });
  window.addEventListener('click', (e) => {
    if (e.target == home) {
      modal.classList.remove('modal_show');
    }
  });
};

team.onclick = () => {
  modal.classList.add('modal_show');
  modal.innerHTML = `
      <i id='close' class="fa-solid fa-xmark"></i>
      <h1>Core TEAM</h1>
      <div class='wrap'> 
        <div class='under_wrap'>
            <img src='img/Founder_Francias.png' alt=''/>
            <h3><span>Founder</span><br>Horizen<br>
            <a href="https://twitter.com/horizen_dao" target="_blank"><i class="fa-brands fa-twitter">
            </i></a>
            </h3>
            
        </div>
        <div class='under_wrap'>
            <img src='img/Horizen_Founder.png' alt=''/>
            <h3><span>Founder</span><br>Français<br>
            <a href="https://twitter.com/francaise_DAO" target="_blank"><i class="fa-brands fa-twitter">
            </i></a></h3>
        </div>
        <div class='under_wrap'>
            <img src='img/Dev.png' alt=''/>
            <h3><span class='Dev'>Dev</span><br>Akella</h3>
            
        </div>
        <div class='under_wrap'>
            <img src='img/Etelreda.png' alt=''/>
            <h3><span class='NFT_artist'>NFT Artist</span><br>Etelreda</h3>
        </div>

      </div>
      

    `;
  const close = document.getElementById('close');
  close.onclick = () => {
    modal.classList.remove('modal_show');
  };
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.classList.remove('modal_show');
    }
  });
  window.addEventListener('click', (e) => {
    if (e.target == home) {
      modal.classList.remove('modal_show');
    }
  });
};

mint.onclick = () => {
  modal.classList.add('modal_show');
  modal.innerHTML = `
      <i id='close' class="fa-solid fa-xmark"></i>
      <h1>About Linguist Apes</h1>
      <img src='img/ape_angy.gif'/>
      <h2 class='soon'>Coming sooooon </h2>
  
    `;
  const close = document.getElementById('close');
  close.onclick = () => {
    modal.classList.remove('modal_show');
  };
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modal.classList.remove('modal_show');
    }
  });
  window.addEventListener('click', (e) => {
    if (e.target == home) {
      modal.classList.remove('modal_show');
    }
  });
};

const mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.remove();
});

app.onclick = () => {
  renderApp();
};

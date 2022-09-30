export default function renderApp() {
  const home = document.querySelector('.home');
  home.innerHTML = `
    <section class='home_app'>
        <button class='back'>Back</button>
        <h1>Coming soon</h1>
        <img src="/img/ape_angy.gif">
    </section>
    `;

  const back = document.querySelector('.back');
  back.onclick = () => {
    window.location.href = '';
  };
}

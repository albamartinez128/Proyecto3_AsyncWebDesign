export const navbar = () => {
  return `
    <header>
  <div class="navbar">
    <img class="logo" src="./logopinterest.png" alt="" />
    <div class="search_group">
    <ul class="list_menu">
      <li>Inicio</li>
      <li>Hoy</li>
      <li>crear</li>
    </ul>
    <div class="search_bloque">
    <img id="event_search" src="./lupa.png" alt=""> 
    <input class="search" type="text" placeholder=" Buscar"/>
    </div>
    </div>
    <ul class="list_icons">
      <li><img src="./campana.png" alt="" /></li>
      <li><img src="./charla.png" alt="" /></li>
      <li><img src="./usuario.png" alt="" /></li>
    </ul>
  </div>
    </header>
    
    `;
};

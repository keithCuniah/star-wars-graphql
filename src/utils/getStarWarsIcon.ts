const getCharacterIcon = (id: string): string => {
  let icon = '';
  switch (id) {
    case 'cGVvcGxlOjE=':
      icon = 'swg-lukeskywalker';
      break;
    case 'cGVvcGxlOjI=':
      icon = 'swg-c3po-3 color-gold';
      break;
    case 'cGVvcGxlOjU=':
      icon = 'swg-leia';
      break;
    case 'cGVvcGxlOjM=':
      icon = 'swg-r2d2-3 color-r2d2';
      break;
    case 'cGVvcGxlOjQ=':
      icon = 'swg-darthvader-5 color-vador';
      break;
    case 'cGVvcGxlOjEw':
      icon = 'swg-obiwankenobi';
      break;
    case 'cGVvcGxlOjEx':
      icon = 'swg-anakin-young';
      break;
    case 'cGVvcGxlOjEz':
      icon = 'swg-chewbacca color-brown';
      break;
    case 'cGVvcGxlOjE0':
      icon = 'swg-hansolo';
      break;
    case 'cGVvcGxlOjIw':
      icon = 'swg-yoda-2 color-yoda';
      break;
    case 'cGVvcGxlOjIy':
      icon = 'swg-bobafett-2 color-green';
      break;
    case 'cGVvcGxlOjE2':
      icon = 'swg-jabba color-yellow';
      break;
    case 'cGVvcGxlOjMy':
      icon = 'swg-quigonjinn';
      break;
    case 'cGVvcGxlOjM1':
      icon = 'swg-padme';
      break;
    case 'cGVvcGxlOjQ0':
      icon = 'swg-darthmaul color-red';
      break;
    case 'cGVvcGxlOjUx':
      icon = 'swg-macewindu color-brown';
      break;
    case 'cGVvcGxlOjY3':
      icon = 'swg-dooku';
      break;
    default:
  }
  return icon;
};

const getMoviesIcon = (id: string): string => {
  let icon = '';
  switch (id) {
    case 'ZmlsbXM6MQ==':
      icon = 'swg-ep4';
      break;
    case 'ZmlsbXM6Mg==':
      icon = 'swg-ep5';
      break;
    case 'ZmlsbXM6Mw==':
      icon = 'swg-ep6';
      break;
    case 'ZmlsbXM6NA==':
      icon = 'swg-ep1';
      break;
    case 'ZmlsbXM6NQ==':
      icon = 'swg-ep2';
      break;
    case 'ZmlsbXM6Ng==':
      icon = 'swg-ep3';
      break;
    default:
      icon = 'swg-starwars'
  }
  return icon;
};

export {getCharacterIcon, getMoviesIcon };

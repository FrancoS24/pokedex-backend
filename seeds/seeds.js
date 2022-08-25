/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('pokemon_type').del();
  await knex('pokemon_moves').del();
  await knex('types').del();
  await knex('moves').del();
  await knex('pokemon').del();

 


//  await knex('user').insert([
//   {id: 1, name: 'Dario', password: 'hola'},
//   {id: 2, name: 'Ignacio', password: 'chau'}, 
//   {id: 3, name: 'Franco', password: 'adios'}
// ]);
 
//POKEMON
 await knex('pokemon').insert([
{id: 1, name: 'bulbasaur', height:6.9, weight:0.7, description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', HP:45, ATK:49, DEF:49, SATK: 65, SDEF: 65, SPD: 45},
{id: 2, name: 'ivysaur', height:1.0, weight:13.0, description:'If the bud on its\nback starts to\nsmell sweet, it\fis evidence that\nthe large flower\nwill soon bloom.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg', HP:60, ATK:62, DEF:63, SATK: 80, SDEF: 80, SPD: 60},
{id: 3, name: 'venusaur', height:2.0, weight:100.0, description:'It is able to con­\nvert sunlight into\nenergy. As a\fresult, it is more\npowerful in the\nsummertime.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg', HP:80, ATK:82, DEF:83, SATK: 100, SDEF: 100, SPD: 80},
{id: 4, name: 'charmander', height:0.6, weight:8.5, description:'The flame on its\ntail indicates\nCHARMANDERs life\fforce. If it is\nhealthy, the flame\nburns brightly.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg', HP:39, ATK:52, DEF:43, SATK: 60, SDEF: 50, SPD: 65},
{id: 5, name: 'charmeleon', height:1.1, weight:19.0, description:'It has a barbaric\nnature. In battle,\nit whips its\ffiery tail around\nand slashes away\nwith sharp claws.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg', HP:58, ATK:64, DEF:58, SATK: 80, SDEF: 65, SPD: 80},
{id: 6, name: 'charizard', height:1.7, weight:90.5, description:'Breathing intense,\nhot flames, it can\nmelt almost any­\fthing. Its breath\ninflicts terrible\npain on enemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg', HP:78, ATK:84, DEF:78, SATK: 109, SDEF: 85, SPD: 100},
{id: 7, name: 'squirtle', height:0.5, weight:9.0, description:'The shell, which\nhardens soon after\nit is born, is\fresilient. If you\npoke it, it will\nbounce back out.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg', HP:44, ATK:48, DEF:65, SATK: 50, SDEF: 64, SPD: 43},
{id: 8, name: 'wartortle', height:1.0, weight:22.5, description:'It cleverly con­\ntrols its furry\nears and tail to\fmaintain its\nbalance while\nswimming.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg', HP:59, ATK:63, DEF:80, SATK: 65, SDEF: 80, SPD: 58},
{id: 9, name: 'blastoise', height:1.6, weight:85.5, description:'The rocket cannons\non its shell fire\njets of water\fcapable of punch­\ning holes through\nthick steel.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg', HP:79, ATK:83, DEF:100, SATK: 85, SDEF: 105, SPD: 78},
{id: 10, name: 'caterpie', height:0.3, weight:2.9, description:'For protection, it\nreleases a horri­\nble stench from\fthe antenna on its\nhead to drive away\nenemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg', HP:45, ATK:30, DEF:35, SATK: 20, SDEF: 20, SPD: 45},
{id: 11, name: 'metapod', height:0.7, weight:9.9, description:'It prepares for\nevolution by har­\ndening its shell\fas much as possi­\nble to protect its\nsoft body.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg', HP:50, ATK:20, DEF:55, SATK: 25, SDEF: 25, SPD: 30},
{id: 12, name: 'butterfree', height:1.1, weight:32.0, description:'Water-repellent\npowder on its\nwings enables it\fto collect honey,\neven in the heav­\niest of rains.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg', HP:60, ATK:45, DEF:50, SATK: 90, SDEF: 80, SPD: 70},
{id: 13, name: 'weedle', height:0.3, weight:3.2, description:'It attacks using a\ntwo-inch poison\nbarb on its head.\fIt can usually be\nfound under the\nleaves it eats.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg', HP:40, ATK:35, DEF:30, SATK: 20, SDEF: 20, SPD: 50},
{id: 14, name: 'kakuna', height:0.6, weight:10.0, description:'From this form,\nit will grow into\nan adult. As its\fbody becomes soft­\ner, the external\nshell hardens.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg', HP:45, ATK:25, DEF:50, SATK: 25, SDEF: 25, SPD: 35},
{id: 15, name: 'beedrill', height:1.0, weight:29.5, description:'It can take down\nany opponent with\nits powerful poi­\fson stingers. It\nsometimes attacks\nin swarms.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg', HP:65, ATK:90, DEF:40, SATK: 45, SDEF: 80, SPD: 75},
{id: 16, name: 'pidgey', height:0.3, weight:1.8, description:'Common in grassy\nareas and forests,\nit is very docile\fand will chase off\nenemies by flap­\nping up sand.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg', HP:40, ATK:45, DEF:40, SATK: 35, SDEF: 35, SPD: 56},
{id: 17, name: 'pidgeotto', height:1.1, weight:30.0, description:'It immobilizes its\nprey using well-\ndeveloped claws,\fthen carries the\nprey more than 60\nmiles to its nest.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg', HP:63, ATK:60, DEF:55, SATK: 50, SDEF: 50, SPD: 71},
{id: 18, name: 'pidgeot', height:1.5, weight:39.5, description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg', HP:83, ATK:80, DEF:75, SATK: 70, SDEF: 70, SPD: 101},
{id: 19, name: 'rattata', height:0.3, weight:3.5, description:'It eats anything.\nWherever food is\navailable, it will\fsettle down and\nproduce offspring\ncontinuously.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg', HP:30, ATK:56, DEF:35, SATK: 25, SDEF: 35, SPD: 72},
{id: 20, name: 'raticate', height:0.7, weight:18.5, description:'Gnaws on anything\nwith its tough\nfangs. It can even\ftopple concrete\nbuildings by gnaw­\ning on them.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg', HP:55, ATK:81, DEF:60, SATK: 50, SDEF: 70, SPD: 97},
{id: 21, name: 'spearow', height:0.3, weight:2.0, description:'It flaps its short\nwings to flush out\ninsects from tall\fgrass. It then\nplucks them with\nits stubby beak.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg', HP:40, ATK:60, DEF:30, SATK: 31, SDEF: 31, SPD: 70},
{id: 22, name: 'fearow', height:1.2, weight:38.0, description:'It cleverly uses\nits thin, long\nbeak to pluck and\feat small insects\nthat hide under\nthe ground.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg', HP:65, ATK:90, DEF:65, SATK: 61, SDEF: 61, SPD: 100},
{id: 23, name: 'ekans', height:2.0, weight:6.9, description:'It always hides in\ngrass. When first\nborn, it has no\fpoison, so its\nbite is painful,\nbut harmless.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg', HP:35, ATK:60, DEF:44, SATK: 40, SDEF: 54, SPD: 55},
{id: 24, name: 'arbok', height:3.5, weight:65.0, description:'With a very venge­\nful nature, it\nwont give up the\fchase, no matter\nhow far, once it\ntargets its prey.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg', HP:60, ATK:95, DEF:69, SATK: 65, SDEF: 79, SPD: 80},
{id: 25, name: 'pikachu', height:0.4, weight:6.0, description:'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg', HP:35, ATK:55, DEF:40, SATK: 50, SDEF: 50, SPD: 90},
{id: 26, name: 'raichu', height:0.8, weight:30.0, description:'When its electric­\nity builds, its\nmuscles are stimu­\flated, and it be­\ncomes more aggres­\nsive than usual.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg', HP:60, ATK:90, DEF:55, SATK: 90, SDEF: 80, SPD: 110},
{id: 27, name: 'sandshrew', height:0.6, weight:12.0, description:'Disliking water,\nit lives in deep\nburrows in arid\fareas. It can roll\nitself instantly\ninto a ball.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg', HP:50, ATK:75, DEF:85, SATK: 20, SDEF: 30, SPD: 40},
{id: 28, name: 'sandslash', height:1.0, weight:29.5, description:'If it digs at an\nincredible pace,\nit may snap off\fits spikes and\nclaws. They grow\nback in a day.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg', HP:75, ATK:100, DEF:110, SATK: 45, SDEF: 55, SPD: 65},
{id: 29, name: 'nidoran', height:0.4, weight:7.0, description:'Although not very\ncombative, it will\ntorment its foes\fwith poison spikes\nif it is threat­\nened in any way.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg', HP:55, ATK:47, DEF:52, SATK: 40, SDEF: 40, SPD: 41},
{id: 30, name: 'nidorina', height:0.8, weight:20.0, description:'It has a calm and\ncaring nature.\nBecause its horn\fgrows slowly, it\nprefers not to\nfight.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg', HP:70, ATK:62, DEF:67, SATK: 55, SDEF: 55, SPD: 56}
]);

//TYPES

await knex('types').insert([
{id: 1, name: 'water'},
{id: 2, name: 'fire'},
{id: 3, name: 'grass'},
{id: 4, name: 'poison'},
{id: 5, name: 'ghost'},
{id: 6, name: 'electric'},
{id: 7, name: 'bug'},
{id: 8, name: 'flying'},
{id: 9, name: 'normal'},
{id: 10, name: 'psychic'},
{id: 11, name: 'steel'},
{id: 12, name: 'rock'},
{id: 13, name: 'dark'},
{id: 14, name: 'ground'},
{id: 15, name: 'dragon'},
{id: 16, name: 'fairy'},
{id: 17, name: 'fighting'},
{id: 18, name: 'ice'}
]);


//MOVES

await knex('moves').insert([
{id: 1, name:'razor-wind'},
{id: 2, name:'sword-dance'},
{id: 3, name:'mega-punch'},
{id: 4, name:'fire-punch'},
{id: 5, name:'ice-punch'},
{id: 6, name:'tackle'},
{id: 7, name:'string-shot'},
{id: 8, name:'harden'},
{id: 9, name:'gust'},
{id: 10, name: 'poison-sting'},
{id: 11, name:'headbutt'},
{id: 12, name:'whirlwind'},
{id: 13, name: 'bind'},
{id: 14, name:'slam'},
{id: 15, name:'pay-day'},
{id: 16, name:'cut'},
{id: 17, name: 'scratch'}



]);

// POKEMONSXTYPES

await knex('pokemon_type').insert([
{id: 1, pokemon_id: 1, types_id: 3},
{id: 2, pokemon_id: 1, types_id: 4},
{id: 3, pokemon_id: 2, types_id: 3},
{id: 4, pokemon_id: 2, types_id: 4},
{id: 5, pokemon_id: 3, types_id: 3},
{id: 6, pokemon_id: 3, types_id: 4},
{id: 7, pokemon_id: 4, types_id: 2},
{id: 8, pokemon_id: 5, types_id: 2},
{id: 9, pokemon_id: 6, types_id: 2},
{id: 10, pokemon_id: 6, types_id: 8},
{id: 11, pokemon_id: 7, types_id: 1},
{id: 12, pokemon_id: 8, types_id: 1},
{id: 13, pokemon_id: 9, types_id: 1},
{id: 14, pokemon_id: 10, types_id: 7},
{id: 15, pokemon_id: 11, types_id: 7},
{id: 16, pokemon_id: 11, types_id: 8},
{id: 17, pokemon_id: 12, types_id: 7},
{id: 18, pokemon_id: 12, types_id: 4},
{id: 19, pokemon_id: 13, types_id: 7},
{id: 20, pokemon_id: 13, types_id: 4},
{id: 21, pokemon_id: 14, types_id: 7},
{id: 22, pokemon_id: 14, types_id: 4},
{id: 23, pokemon_id: 15, types_id: 8},
{id: 24, pokemon_id: 15, types_id: 9},
{id: 25, pokemon_id: 16, types_id: 8},
{id: 26, pokemon_id: 16, types_id: 9},
{id: 27, pokemon_id: 17, types_id: 8},
{id: 28, pokemon_id: 17, types_id: 9},
{id: 29, pokemon_id: 18, types_id: 9},
{id: 30, pokemon_id: 19, types_id: 9},
{id: 31, pokemon_id: 20, types_id: 8},
{id: 32, pokemon_id: 20, types_id: 9},
{id: 33, pokemon_id: 21, types_id: 8},
{id: 34, pokemon_id: 21, types_id: 9},
{id: 35, pokemon_id: 22, types_id: 8},
{id: 36, pokemon_id: 22, types_id: 9},
{id: 37, pokemon_id: 23, types_id: 4},
{id: 38, pokemon_id: 24, types_id: 4},
{id: 39, pokemon_id: 25, types_id: 6},
{id: 40, pokemon_id: 26, types_id: 6},
{id: 41, pokemon_id: 27, types_id: 14},
{id: 42, pokemon_id: 28, types_id: 14},
{id: 43, pokemon_id: 29, types_id: 4},
{id: 44, pokemon_id: 30, types_id: 4}




]);

// POKEMONSXMOVES

await knex('pokemon_moves').insert([
{pokemon_id:1, moves_id:1},
{pokemon_id:1, moves_id:2},
{pokemon_id:2, moves_id:2},
{pokemon_id:2, moves_id:16},
{pokemon_id:3, moves_id:2},
{pokemon_id:3, moves_id:16},
{pokemon_id:4, moves_id:3},
{pokemon_id:4, moves_id:4},
{pokemon_id:5, moves_id:3},
{pokemon_id:5, moves_id:4},
{pokemon_id:6, moves_id:3},
{pokemon_id:6, moves_id:4},
{pokemon_id:7, moves_id:3},
{pokemon_id:7, moves_id:5},
{pokemon_id:8, moves_id:3},
{pokemon_id:8, moves_id:5},
{pokemon_id:9, moves_id:3},
{pokemon_id:9, moves_id:5},
{pokemon_id:10, moves_id:6},
{pokemon_id:10, moves_id:7},
{pokemon_id:11, moves_id:7},
{pokemon_id:11, moves_id:8},
{pokemon_id:12, moves_id:1},
{pokemon_id:12, moves_id:9},
{pokemon_id:13, moves_id:10},
{pokemon_id:13, moves_id:7},
{pokemon_id:14, moves_id:7},
{pokemon_id:14, moves_id:8},
{pokemon_id:15, moves_id:2},
{pokemon_id:15, moves_id:16},
{pokemon_id:16, moves_id:1},
{pokemon_id:16, moves_id:9},
{pokemon_id:17, moves_id:1},
{pokemon_id:17, moves_id:9},
{pokemon_id:18, moves_id:1},
{pokemon_id:18, moves_id:9},
{pokemon_id:19, moves_id:16},
{pokemon_id:19, moves_id:11},
{pokemon_id:20, moves_id:2},
{pokemon_id:20, moves_id:16},
{pokemon_id:21, moves_id:1},
{pokemon_id:21, moves_id:12},
{pokemon_id:22, moves_id:1},
{pokemon_id:22, moves_id:12},
{pokemon_id:23, moves_id:13},
{pokemon_id:23, moves_id:14},
{pokemon_id:24, moves_id:13},
{pokemon_id:24, moves_id:14},
{pokemon_id:25, moves_id:3},
{pokemon_id:25, moves_id:15},
{pokemon_id:26, moves_id:3},
{pokemon_id:26, moves_id:15},
{pokemon_id:27, moves_id:17},
{pokemon_id:27, moves_id:2},
{pokemon_id:28, moves_id:17},
{pokemon_id:28, moves_id:2},
{pokemon_id:29, moves_id:16},
{pokemon_id:29, moves_id:17},
{pokemon_id:30, moves_id:16},
{pokemon_id:30, moves_id:17},





])
};
  


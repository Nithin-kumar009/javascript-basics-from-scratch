let heroes=["ironman", "thor", "hulk", "nithin", "spiderman"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero);
}

for(let hero of heroes){
    console.log(hero.toUpperCase());
}
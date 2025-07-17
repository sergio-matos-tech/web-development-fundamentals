
function bankRobbery() {
    const heroes = ['SpiderMan', 'Wolverine', "Black Panther"];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`HELP US! ${hero}`);
        }
    }

    cryForHelp();
}

bankRobbery();
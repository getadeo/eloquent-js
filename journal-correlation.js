const JOURNAL = require("./journal");

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    // simpler loop
    // for (let entry of JOURNAL) {
    //     console.log(`${entry.events.length} events.`);
    // }
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;        
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL))
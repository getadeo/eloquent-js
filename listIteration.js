let list = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};

for (let node = list; node; node = node.rest){
    console.log(node);
}
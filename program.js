let original ={ name: "Alice", 
                hobbies: ["reading", "traveling"] }

let clone=JSON.parse(JSON.stringify(original));
clone.hobbies.push("Coding")

console.log(original)
console.log(clone)
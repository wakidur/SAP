// Expression bodies
let arrayCon= [1,3,4,5,6,2,6,68];
let odds = arrayCon.map(v => v +1);

let nums = arrayCon.map((v,i) => {
    v + i;
})

let pairs = arrayCon.map((v) > ({even: v, odd: v + 1}));
console.dir(pairs);
pairs.length;
/*
// Command Prompt
"terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
// PowerShell
"terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
// Git Bash
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
// node (on Windows)
"terminal.integrated.shell.windows": "C:\\Program Files\\nodejs\\node.exe",*/
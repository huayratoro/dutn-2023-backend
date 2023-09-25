
const funcion = (a, b) => {
    return(
        a + b
    )
};

const pythonScriptName = 'script.py'

const { execSync } = require('child_process');
let pythonOutput;
try {
  pythonOutput = execSync(`python ${pythonScriptName}`).toString().trim();
  pythonOutput = JSON.parse(pythonOutput);
} catch (error) {
  console.error(error);
}
console.log(pythonOutput["min"]);

const $titulo = document.getElementById("titulo")

$titulo.textContent = pythonOutput["min"]
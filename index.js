function desencriptarMensaje(mensaje) {
    const pistas = {
        '?': 'a',
        '[': 'e',
        '\\': 'i',
        '~': 'o',
        '+': 'u',
        '¬': 'ó',
        '()': ' ',
        '$': 'r',
        '`': 'c',
        '=': 't',
        '__': 'z',
        '^': 'm',
        ']': 'n',
        '!': 'j',
        '¡': 'd',
        '%': 'b',
        '-': 'h',
        '#': 'v',
        '*': 'p',
        '¿': 'y',
        '}': 'q',
        '{': 's',
        ';': 'f',
        '/': 'l'
    };

    let resultado = "";
    let i = 0;

    while (i < mensaje.length) {
    
        if (mensaje.slice(i, i + 5) in pistas) {
            resultado += pistas[mensaje.slice(i, i + 5)];
            i += 5;
        } else if (mensaje.slice(i, i + 2) in pistas) {
            resultado += pistas[mensaje.slice(i, i + 2)];
            i += 2;
        } else {
            
            resultado += pistas[mensaje[i]] || mensaje[i];
            i++;
        }
    }

    return resultado;
}

let mensajeEncriptado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\]+~";
  

let mensajeResultado = desencriptarMensaje(mensajeEncriptado);

document.getElementById("mensaje-original").textContent = mensajeEncriptado;
document.getElementById("mensaje-Resultado").textContent = mensajeResultado;

 
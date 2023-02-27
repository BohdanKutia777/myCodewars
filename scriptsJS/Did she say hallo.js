function validateHello(greetings) {
let result =/(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);
    return result;
}
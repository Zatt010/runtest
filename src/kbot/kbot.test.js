const Kbot = require("./Kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/
describe("Saludor", () => {
  
  it("debería Saludar a Andrés en español en la mañana", () => {
    let kbot = new Kbot("ES");
    let resultado = kbot.saludar("Andrés", 3); 
    expect(resultado).toEqual("Buenos días Andrés");
  });

  it("debería Saludar a Andrés en español en la tarde", () => {
    let kbot = new Kbot("ES");
    let resultado = kbot.saludar("Andrés", 16); 
    expect(resultado).toEqual("Buenas tardes Andrés");
  });

  it("debería Saludar a Andrés en español en la noche", () => {
    let kbot = new Kbot("ES");
    let resultado = kbot.saludar("Andrés", 22); 
    expect(resultado).toEqual("Buenas noches Andrés");
  });

  it("debería Saludar a Andrés en inglés en la mañana", () => {
    let kbot = new Kbot("EN");
    let resultado = kbot.saludar("Andrés", 8); 
    expect(resultado).toEqual("Good morning Andrés");
  });

  it("debería Saludar a Andrés en inglés en la tarde", () => {
    let kbot = new Kbot("EN");
    let resultado = kbot.saludar("Andrés", 15); 
    expect(resultado).toEqual("Good afternoon Andrés");
  });

  it("debería Saludar a Andrés en inglés en la noche", () => {
    let kbot = new Kbot("EN");
    let resultado = kbot.saludar("Andrés", 21); 
    expect(resultado).toEqual("Good evening Andrés");
  });
});

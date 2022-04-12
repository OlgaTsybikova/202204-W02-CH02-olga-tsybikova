const { TestWatcher } = require("jest");

function firstLetterToUpperCase(text) {
    let fistLetter = text[0];
    return firstLetter.toUpperCase() + text.slice(1);
}

describe("Given a firstLetterToUpperCase function", () => {
    describe("When it receives "boquerones en vinagre", () => {
        test("Then it should returns "Boquerones en vinagre", () => {

            //A-A-A 
            //ARRANGE: MONTA EL ESCENARIO
            const text = "boquerones en vinagre";
            const expectedText = "Boquerons in vinagre";
            //ACT: HAZ QUE FUNCIONE LA MAQUINA
            const textResult = firstLetterToUpperCase(text);
            //ASSERT: COMPRUEBA QUE HA PASADO LO QUE ESPERAS
            expect(textResult).toBe(expectedText);
        }); 
    });
});

test("When the function firstLetterToUpperCase receives "boquerones en vinagre" it returns "Boquerones en vinagre")
//description of test
//Given-when-Then 
//given :lo que voy a testear
//When description del escenario de pruebas
//then lo que esperamos que ocurra


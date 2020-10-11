const { isTopLevelDeclaration } = require("sucrase/dist/parser/tokenizer")

describe('Authentication', () => {
    it('should sum two numbers', ()=> {
        const x= 2;
        const y = 3;

        const sum = x+y;

        expect(sum).toBe(5);
    })
})
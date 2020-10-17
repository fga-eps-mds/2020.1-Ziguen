function soma(a,b){
    return a+b;
}

test("if ashas", ()=>{
    const result  = soma(2,2)

    expect(result).toBe(4);
})
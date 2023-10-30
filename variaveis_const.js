function testConst() {
  const const01 = "const 01";
  {
    const const02 = "const 02";
    console.log("01a." + const01);
    console.log("01b." + const02);
  }
  const01 = "novo valor";
  console.log("02a." + const01);
  console.log("02b." + const02);
}

testConst();

function testConst2() {
  const const011 = { propriedade: "valor" };
  console.log("01a." + const011.propriedade);

  const011.propriedade = "novo valor";
  console.log("02a." + const011.propriedade);
}

//testConst2();

function testConst3() {
  const const0111 = { propriedade: "valor" };
  console.log("01a." + const0111.propriedade);

  const0111 = { propriedade: "novo valor" };
  console.log("02a." + const0111.propriedade);
}

//testConst3();

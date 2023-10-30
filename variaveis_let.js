function testLet() {
  let let01 = "let 01";
  {
    let let02 = "let 02";
    console.log("01a." + let01);
    console.log("01b." + let02);
  }
  console.log("02a." + let01);
}

//testLet();

function testLet2() {
  let let011 = "let 01";
  {
    let let022 = "let 02";
    console.log("01a." + let011);
    console.log("01b." + let022);
  }
  console.log("02a." + let011);
  console.log("02b." + let022);
}

//testLet2();

function testLet3() {
  let let0111 = "let 01";
  {
    console.log("01a." + let0111);
    let let0111 = "let 02";
    console.log("02a." + let0111);
  }
  console.log("03a." + let0111);
}

testLet3();

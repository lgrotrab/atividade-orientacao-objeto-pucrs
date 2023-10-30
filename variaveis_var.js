function testVar() {
  var var01 = "var 01";
  {
    var var02 = "var 02";
    console.log("01a." + var01);
    console.log("01b." + var02);
  }
  console.log("02a." + var01);
  console.log("02b." + var02);
}

testVar();

function testVar1() {
  var var011 = "var 01";
  if (1 == 0) {
    var var022 = "var 02";
    console.log("01a." + var011);
    console.log("01b." + var022);
  }
  console.log("02a." + var011);
  console.log("02b." + var022);
}

//testVar1();

function testVar2() {
  var var0111 = "var 01";
  {
    console.log("01a." + var0111);
    var var0111 = "var 02";
    console.log("02a." + var0111);
  }
  var var0111 = "var 03";
  console.log("03a." + var0111);
}

//testVar2();

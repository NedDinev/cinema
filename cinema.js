function cinema(type, row, col) {
  row = Number(row);
  col = Number(col);
  type = type.toLowerCase();
  let ticket;
  if (type === "premiere" || type === "normal" || type === "discount") {
    if (type === "premiere") {
      ticket = 12;
    } else if (type === "normal") {
      ticket = 7.5;
    } else if (type === "discount") {
      ticket = 5;
    }
    let calculation = row * col * ticket;
    console.log(calculation.toFixed(2) + " leva");
  } else {
    console.log("error");
  }
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Premiere", 12, 30);

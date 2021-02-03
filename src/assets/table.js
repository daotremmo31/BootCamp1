var table = document.getElementById("table13");
if (table != undefined) {


  var hard = 10;

  // In Bảng chơi
  function create() {
    for (var x = 0; x < hard; x++) {
      var row = document.createElement("tr");
      for (var y = 0; y < hard; y++) {
        var cell = document.createElement("td");
        cell.innerHTML = "";

        var turn = true;
        row.appendChild(cell);
        cell.addEventListener("click", function () {
          if (this.innerHTML == "") {
            if (turn) {
              this.innerHTML = "X";
              turn = false;
              table.className = "player2";
            } else {
              this.innerHTML = "O";
              turn = true;
              table.className = "player1";
            }
          }
        });
      }
      table.appendChild(row);
    }
  }
  create();

  // main check
  click = function () {
    var check = false;
    // var x = Number(this.getAttribute('x')); // get ra de lay toa do x, y cua o
    // var y = Number(this.getAttribute('y'));
    for (var x = 0; x < hard; x++) {
      for (var y = 0; y < hard; y++) {
        var temp = td[x * hard + y].innerHTML;
        if (temp == "X" || temp == "O") {
          if (
            Ngang(x, y) == 1 ||
            Doc(x, y) == 1 ||
            cheoLen(x, y) == 1 ||
            cheoXuong(x, y) == 1
          ) {
            if (temp == "X") {
              alert("X WIN");
              check = true;
            } else {
              alert("O WIN!");
              check = true;
            }
          }
        } else {
          continue;
        }
        if (check) break;
      }
      if (check) break;
    }
  };

  // New Game/ Reset
  var td = document.getElementsByTagName("TD");
  var btnReset = document.getElementById("btn-reset");
  btnReset.addEventListener("click", function () {
    for (var i = 0; i < td.length; i++) {
      td[i].innerHTML = "";
    }
  });

  // Set index
  function setvalue() {
    var i = 0,
      j = 0;
    for (var d = 0; d < hard * hard; d++) {
      td[d].setAttribute("x", i);
      td[d].setAttribute("y", j);
      td[d].addEventListener("click", click);
      j++;
      if ((d + 1) % hard == 0) {
        i++;
        j = 0;
      }
    }
  }
  setvalue();

  // Check Ngang
  function Ngang(x, y) {
    var dem = 1;
    for (var t = 1; t < 5; t++) {
      // Check bên trái
      if (y - t >= 0) {
        // Giới hạn
        if (td[x * hard + (y - t)].innerHTML == td[x * hard + y].innerHTML) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    for (var t = 1; t < 5; t++) {
      // Check bên phải
      if (y + t < hard) {
        // Giới hạn
        if (td[x * hard + (y + t)].innerHTML == td[x * hard + y].innerHTML) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (dem >= 5) {
      return 1;
    } else {
      return 0;
    }
  }

  // Check Doc
  function Doc(x, y) {
    var dem = 1;
    for (var t = 1; t < 5; t++) {
      // Check phía trên
      if (x - t >= 0) {
        // Giới hạn
        if (td[(x - t) * hard + y].innerHTML == td[x * hard + y].innerHTML) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    for (var t = 1; t < 5; t++) {
      // Check phía dưới
      if (x + t < hard) {
        // Giới hạn
        if (td[(x + t) * hard + y].innerHTML == td[x * hard + y].innerHTML) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (dem >= 5) {
      return 1;
    } else {
      return 0;
    }
  }

  // Check cheo
  function cheoLen(x, y) {
    var dem = 1;
    for (var t = 1; t < 5; t++) {
      // Check phía trên
      if (x - t >= 0 && y + t < hard) {
        // Giới hạn
        if (
          td[(x - t) * hard + (y + t)].innerHTML == td[x * hard + y].innerHTML
        ) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    for (var t = 1; t < 5; t++) {
      // Check phía dưới
      if (x + t < hard && y - t >= 0) {
        // Giới hạn
        if (
          td[(x + t) * hard + (y - t)].innerHTML == td[x * hard + y].innerHTML
        ) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (dem >= 5) {
      return 1;
    } else {
      return 0;
    }
  }

  function cheoXuong(x, y) {
    var dem = 1;
    for (var t = 1; t < 5; t++) {
      // Check phía trên
      if (x + t < hard && y + t < hard) {
        // Giới hạn
        if (
          td[(x + t) * hard + (y + t)].innerHTML == td[x * hard + y].innerHTML
        ) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    for (var t = 1; t < 5; t++) {
      // Check phía dưới
      if (x - t >= 0 && y - t >= 0) {
        // Giới hạn
        if (
          td[(x - t) * hard + (y - t)].innerHTML == td[x * hard + y].innerHTML
        ) {
          dem++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (dem >= 5) {
      return 1;
    } else {
      return 0;
    }
  }
}
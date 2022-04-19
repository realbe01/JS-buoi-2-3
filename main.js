document.getElementById("btnTinh").onclick = function () {
  //Lây value từ người dùng
  var songaylam = document.getElementById("soNgay").value;

  var result = "Lương nhân viên là: " + tongLuong + "đ";
  console.log(result);

  //Xử lý: tong Luong = luong 1 Ngay * so Ngay;
  var tongLuong = 100000 * songaylam;

  //Đầu ra: DOM tới footer giao diện #footertongLuong show ra kết quả
  document.getElementById("footertongLuong").innerHTML = result;
};

// Bài toán 1

document.getElementById("btnTinh").onclick = function () {
  //Lây value từ người dùng
  var songaylam = document.getElementById("soNgay").value;

  //Xử lý: tong Luong = luong 1 Ngay * so Ngay;
  var tongLuong = 100000 * songaylam;
  var result = "Lương nhân viên là: " + tongLuong + " đ";

  //Đầu ra: DOM tới footer giao diện #footertongLuong show ra kết quả
  document.getElementById("footertongLuong").innerHTML = result;
};

// Bài toán 2
document.getElementById("btnTinhToan").onclick = function () {
  var gtriSoThuc1 = document.getElementById("soThuc1").value;
  var gtriSoThuc2 = document.getElementById("soThuc2").value;
  var gtriSoThuc3 = document.getElementById("soThuc3").value;
  var gtriSoThuc4 = document.getElementById("soThuc4").value;
  var gtriSoThuc5 = document.getElementById("soThuc5").value;

  var tongSo =
    gtriSoThuc1 + gtriSoThuc2 + gtriSoThuc3 + gtriSoThuc4 + gtriSoThuc5;
  var gtTB = tongSo / 5;
  var result = "Giá trị trung bình 5 số là : " + gtTB;

  document.getElementById("footerTinhToan").innerHTML = result;
};

//Bài toán 3
document.getElementById("btnDoi").onclick = function () {
  var soTienUsd = document.getElementById("soTienUsdHienTai").value;

  var VND = 23500;
  var doiTien = soTienUsd * VND;
  var result = "Số tiền đã quy đổi là: " + doiTien + "đ";

  document.getElementById("footerDoi").innerHTML = result;
};

// Bài toán 4
document.getElementById("btnPhepTinh").onclick = function () {
  var chieuDaiCN = document.getElementById("chieuDai").value;
  var chieuRongCN = document.getElementById("chieuRong").value;

  var dienTich = chieuDaiCN * chieuRongCN;
  var chuVi = (chieuDaiCN + chieuRongCN) * 2;
  var result =
    "Diện tích hình chữ nhật là: " +
    dienTich +
    "<br />Chu vi của hình chữ nhật là: " +
    chuVi;
  document.getElementById("footerPhepTinh").innerHTML = result;
};

//Bài toán 5
document.getElementById("btnKetQua").onclick = function () {
  var nhapSoKy = document.getElementById("nhapSo").value;

  var hangDV = nhapSoKy % 10;

  var hangChuc = Math.floor((nhapSoKy % 100) / 10);

  var tong2SoKy = hangChuc + hangDV;
  var result = "Tổng 2 số ký là: " + tong2SoKy;

  document.getElementById("footerKetQua").innerHTML = result;
  document.getElementById("footerKetQua").classList.add("alert-danger");

  //   int so_hang_dv =so% 10;
  //   int so_hang_chuc =so/ 10;
};

//bai 1: in day Finonaci
//bai 2: tinh giai thua mot so nguyen duong
//bai 3: in tam giac vuong. cac goc vuong nam o cac vi tri khac nhau
//bai 4: in hinh chu nhat rong
//bai 5: viet chuong trinh lai ngan hang khi biet tien ban dau, so thang vay, lai xuat thang
//bai 6: in hinh trai tim
function bai1(n) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (f0 == 0) document.write(0 + "<br>");
    if (f1 == 1) document.write(1 + "<br>");
    if (fn == 1) document.write(1 + "<br>");
    for (let i = 0; i < n; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        document.write(fn + '<br>');
    }
}

// bai1(20);
function bai2() {
    let n = parseInt(prompt("Nhap so can tinh giai thua"));
    var gt = 1;
    for (let i = 1; i <= n; i++) {
        gt *= i;
    }
    return document.write("Giai thua cua " + n + " la: " + gt);
}

// bai2();
function bai3(n) {
    for (let i = n; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            document.write("<td>" + '*' + "</td>");
        }
        document.write("<tr>" + "</tr>" + '<br>');
    }
    document.write("<br>");

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            document.write("<td>" + '*' + "</td>");
        }
        document.write("<tr>" + "</tr>" + '<br>');
    }
    document.write("<br>");

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                document.write("<td>" + '*' + "</td>");
            } else {
                document.write("<td>" + '&nbsp' + '&nbsp' + "</td>");
            }

        }

        document.write("<tr>" + "</tr>" + '<br>');
    }
    document.write("<br>");

    for (let i = n; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                document.write("<td>" + '*' + "</td>");
            } else {
                document.write("<td>" + '&nbsp' + '&nbsp' + "</td>");
            }
        }
        document.write("<tr>" + "</tr>" + '<br>');
    }
    document.write("<br>");

}

// bai3(5);
function bai4(n, m) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i == 1 || i == n) {
                document.write("<td>" + '*' + "</td>");
            } else {
                if (j == 1 || j == m) {
                    document.write("<td>" + '*' + "</td>");
                } else {
                    document.write("<td>" + '&nbsp' + '&nbsp' + "</td>");
                }
            }
        }
        document.write("<tr>" + "</tr>" + '<br>');

    }
}

// bai4(5, 15);

function bai5() {
    var tienVay = parseInt(prompt("Nhap so tien vay"));
    var hanVay = parseFloat(prompt("Nhap vao so thang vay"));
    var laiSuat = parseFloat(prompt("Nhap vao lai suat hang thang"));
    var tienVayCongDon = tienVay;

    for (let i = 0; i < hanVay; i++) {
        let tinhLai = ((tienVayCongDon * laiSuat) / 100);
        tienVayCongDon += tinhLai;
    }
    document.write("Tien lai trong " + hanVay + " voi lai suat " + laiSuat
        + " cua " + tienVay + " la " + (tienVayCongDon - tienVay));
}
// bai5();
function bai6() {
    
}
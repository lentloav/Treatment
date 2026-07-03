const form = document.getElementById("formPinjam");
const tbody = document.getElementById("tbodyPinjam");

let editIndex = -1;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const buku = document.getElementById("buku").value;
    const pinjam = document.getElementById("tglPinjam").value;
    const kembali = document.getElementById("tglKembali").value;
    const status = document.getElementById("status").value;

    if (editIndex == -1) {

        tambahBaris(
            nama,
            nim,
            buku,
            pinjam,
            kembali,
            status
        );

    } else {

        const row = tbody.rows[editIndex];

        row.cells[1].innerHTML = nama;
        row.cells[2].innerHTML = nim;
        row.cells[3].innerHTML = buku;
        row.cells[4].innerHTML = pinjam;
        row.cells[5].innerHTML = kembali;
        row.cells[6].innerHTML = status;

        editIndex = -1;

    }

    form.reset();

});

function tambahBaris(nama,nim,buku,pinjam,kembali,status){

    const row = tbody.insertRow();

    row.insertCell(0).innerHTML = tbody.rows.length;

    row.insertCell(1).innerHTML = nama;

    row.insertCell(2).innerHTML = nim;

    row.insertCell(3).innerHTML = buku;

    row.insertCell(4).innerHTML = pinjam;

    row.insertCell(5).innerHTML = kembali;

    row.insertCell(6).innerHTML = status;

    row.insertCell(7).innerHTML =

    `
    <button onclick="editData(this)" class="editBtn">
        Edit
    </button>

    <button onclick="hapusData(this)" class="hapusBtn">
        Hapus
    </button>
    `;

}

function hapusData(button){

    if(confirm("Hapus data ini?")){

        const row = button.parentElement.parentElement;

        row.remove();

        nomorUlang();

    }

}

function editData(button){

    const row = button.parentElement.parentElement;

    editIndex = row.rowIndex - 1;

    document.getElementById("nama").value =
    row.cells[1].innerHTML;

    document.getElementById("nim").value =
    row.cells[2].innerHTML;

    document.getElementById("buku").value =
    row.cells[3].innerHTML;

    document.getElementById("tglPinjam").value =
    row.cells[4].innerHTML;

    document.getElementById("tglKembali").value =
    row.cells[5].innerHTML;

    document.getElementById("status").value =
    row.cells[6].innerHTML;

}

function nomorUlang(){

    for(let i=0;i<tbody.rows.length;i++){

        tbody.rows[i].cells[0].innerHTML = i+1;

    }

}
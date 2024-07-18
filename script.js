let nilai = 0;
let nilaiks = 0;
let nilaisx = 0;
let nilaiNe = 0;
let nilaiMx = 0;

// -->su2id
function plus() {
	nilai++;
	const pluss = document.getElementById('su2id');
	const total = document.getElementById('total');
	total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2;
	pluss.value = nilai;
}

function min() {
	if (nilai > 0) {
		nilai--;
		const minn = document.getElementById('su2id');
		const total = document.getElementById('total');
		minn.value = nilai;
		total.value = total.value - 1;
	} else {
		alert('jumlah unit SU2ID belum dimasukan!');
	}
}

//ks
function plusks() {
	nilaiks++;
	const plusks = document.getElementById('ks');
	const total = document.getElementById('total');
	plusks.value = nilaiks;
	total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2;
}

function minks() {
	if (nilaiks > 0) {
		nilaiks--;
		const minks = document.getElementById('ks');
		const total = document.getElementById('total');
		minks.value = nilaiks;
		total.value = total.value - 1;
	} else {
		alert('jumlah unit KS belum dimasukan!');
	}
}

//SX2ID
function plussx() {
	nilaisx++;
	const plussx = document.getElementById('sx2id');
	const total = document.getElementById('total');
	plussx.value = nilaisx;
	total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2;
}

function minsx() {
	if (nilaisx > 0) {
		nilaisx--;
		const minsx = document.getElementById('sx2id');
		const total = document.getElementById('total');
		minsx.value = nilaisx;
		total.value = total.value - 1;
	} else {
		alert('jumlah unit SX2ID belum dimasukan!');
	}
}

//NE
function plusNe() {
	nilaiNe++;
	const plusNe = document.getElementById('ne');
	const total = document.getElementById('total');
	plusNe.value = nilaiNe;
	total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2;
}

function minNe() {
	if (nilaiNe > 0) {
		nilaiNe--;
		const minNe = document.getElementById('ne');
		const total = document.getElementById('total');
		minNe.value = nilaiNe;
		total.value = total.value - 1;
	} else {
		alert('jumlah unit NE belum dimasukan!');
	}
}

//MX5
function plusMx() {
	nilaiMx++;
	const plusMx = document.getElementById('mx5');
	const total = document.getElementById('total');
	plusMx.value = nilaiMx;
	total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2;
}

function minMx() {
	if (nilaiMx > 0) {
		nilaiMx--;
		const minMx = document.getElementById('mx5');
		const total = document.getElementById('total');
		minMx.value = nilaiMx;
		total.value = total.value - 1;
	} else {
		alert('jumlah unit MX5 belum dimasukan!');
	}
}

// black unit
let nilaiBks = 0;
let nilaiBsx = 0;
let nilaiBNe = 0;
let nilaiBmx = 0;
let nilaiBsu2 = 0;
// SU2ID
function plusBsu2() {
	if ((total = 1)) {
		nilaiBsu2++;
		const plusBsu2 = document.getElementById('Bsu2id');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		plusBsu2.value = nilaiBsu2;
	}
}

function minBsu2() {
	if (nilaiBsu2 > 0) {
		nilaiBsu2--;
		const minBsu2 = document.getElementById('Bsu2id');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		minBsu2.value = nilaiBsu2;
	} else {
		alert('Tolong Masukan Total Unit Black SU2ID!');
	}
}

//KS
function plusBks() {
	if ((total = 1)) {
		nilaiBks++;
		const plusBks = document.getElementById('Bks');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		plusBks.value = nilaiBks;
	}
}

function minBks() {
	if (nilaiBks > 0) {
		nilaiBks--;
		const minBks = document.getElementById('Bks');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		minBks.value = nilaiBks;
	} else {
		alert('Tolong Masukan Total Unit Black MX5!');
	}
}

//MX5
function plusBmx() {
	if ((total = 1)) {
		nilaiBmx++;
		const plusBmx = document.getElementById('Bmx5');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		plusBmx.value = nilaiBmx;
	}
}

function minBmx() {
	if (nilaiBmx > 0) {
		nilaiBmx--;
		const minBmx = document.getElementById('Bmx5');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		minBmx.value = nilaiBmx;
	} else {
		alert('Tolong Masukan Total Unit Black MX5!');
	}
}

//sX2id
function plusBsx() {
	if ((total = 1)) {
		nilaiBsx++;
		const plusBsx = document.getElementById('Bsx');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		plusBsx.value = nilaiBsx;
	}
}

function minBsx() {
	if (nilaiBsx > 0) {
		nilaiBsx--;
		const minBsx = document.getElementById('Bsx');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		minBsx.value = nilaiBsx;
	} else {
		alert('Tolong Masukan Total Unit Black MX5!');
	}
}

//sX2id
function plusBne() {
	if ((total = 1)) {
		nilaiBNe++;
		const plusBne = document.getElementById('Bne');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		plusBne.value = nilaiBNe;
	}
}

function minBne() {
	if (nilaiBNe > 0) {
		nilaiBNe--;
		const minBne = document.getElementById('Bne');
		const total = document.getElementById('total');
		total.value = nilai + nilaiks + nilaisx + nilaiNe + nilaiMx - nilaiBsu2 - nilaiBmx - nilaiBks - nilaiBsx - nilaiBNe;
		minBne.value = nilaiBNe;
	} else {
		alert('Tolong Masukan Total Unit Black MX5!');
	}
}

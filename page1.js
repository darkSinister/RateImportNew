var d = new Date();
var auto_year = d.getYear();
var auto_month = d.getMonth();

var year = prompt("Year?", auto_year);
var month = prompt("Month? (YTD-6 => 6)", auto_month);

document.getElementsByTagName('select')[0].value = 'Year'
document.getElementsByTagName('select')[1].value = '1'			//Month-Start
document.getElementsByTagName('select')[2].value = month		//Month-End
document.getElementsByTagName('select')[3].value = 'EUR'		//Basiswährung
document.getElementsByTagName('select')[4].getElementsByTagName('option')[2].selected = 1

document.getElementsByTagName('input')[3].value = year
document.getElementsByTagName('input')[4].value = year

var CurrElements = [];
var ReqCurrencies = [];
var element = document.getElementsByTagName('select')[4].childNodes;
var element1 = document.getElementsByTagName('select')[4].getElementsByTagName('option');

for (i=0; i<element.length; i++) {
	var str = element[i].value;
	CurrElements[i] = str;
}

for (i=0; i<element1.length; i++) {
	document.getElementsByTagName('select')[4].getElementsByTagName('option')[i].selected = 0
}

ReqCurrencies[1] = 'AUD';
ReqCurrencies[2] = 'BRL';
ReqCurrencies[3] = 'CAD';
ReqCurrencies[4] = 'CHF';
ReqCurrencies[5] = 'CLP';
ReqCurrencies[6] = 'CNY';
ReqCurrencies[7] = 'COP';
ReqCurrencies[8] = 'CZK';
ReqCurrencies[9] = 'DKK';
ReqCurrencies[10] = 'EUR';
ReqCurrencies[11] = 'GBP';
ReqCurrencies[12] = 'HKD';
ReqCurrencies[13] = 'HUF';
ReqCurrencies[14] = 'IDR';
ReqCurrencies[15] = 'INR';
ReqCurrencies[16] = 'ISK';
ReqCurrencies[17] = 'JPY';
ReqCurrencies[18] = 'MXN';
ReqCurrencies[19] = 'MYR';
ReqCurrencies[20] = 'NOK';
ReqCurrencies[21] = 'NZD';
ReqCurrencies[22] = 'PASB';
ReqCurrencies[23] = 'PEN';
ReqCurrencies[25] = 'PHP';
ReqCurrencies[26] = 'PLN';
ReqCurrencies[27] = 'RON';
ReqCurrencies[28] = 'RSD';
ReqCurrencies[29] = 'RUB';
ReqCurrencies[30] = 'SEK';
ReqCurrencies[31] = 'SGD';
ReqCurrencies[32] = 'THB';
ReqCurrencies[33] = 'TRY';
ReqCurrencies[34] = 'USD';
ReqCurrencies[35] = 'UYU';
ReqCurrencies[36] = 'VEF';
ReqCurrencies[37] = 'XAF';
ReqCurrencies[38] = 'ZAR';
ReqCurrencies[39] = 'EGP';
ReqCurrencies[40] = 'TWD';
				
		
var yy = [];


for (i=0;i<=ReqCurrencies.length;i++) {
	var x = CurrElements.indexOf(ReqCurrencies[i]);

	if (x >= 0) {
		yy[i] = x;
		document.getElementsByTagName('select')[4].getElementsByTagName('option')[x].selected = 1;
	}
}

var node_list = document.getElementsByTagName('input');

for (var i = 0; i < node_list.length; i++) {
	var node = node_list[i];
 
	if (node.getAttribute('type') == 'submit') {
		node.click();
	}
} 

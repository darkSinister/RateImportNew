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
ReqCurrencies.push('BRL')
ReqCurrencies.push('CAD')
ReqCurrencies.push('CHF')
ReqCurrencies.push('CLP')
ReqCurrencies.push('CNY')
ReqCurrencies.push('COP')
ReqCurrencies.push('CZK')
ReqCurrencies.push('DKK')
ReqCurrencies.push('EUR')
ReqCurrencies.push('GBP')
ReqCurrencies.push('HKD')
ReqCurrencies.push('HUF')
ReqCurrencies.push('IDR')
ReqCurrencies.push('INR')
ReqCurrencies.push('ISK')
ReqCurrencies.push('JPY')
ReqCurrencies.push('MXN')
ReqCurrencies.push('MYR')
ReqCurrencies.push('NOK')
ReqCurrencies.push('NZD')
ReqCurrencies.push('PAB')
ReqCurrencies.push('PEN')
ReqCurrencies.push('PHP')
ReqCurrencies.push('PLN')
ReqCurrencies.push('RON')
ReqCurrencies.push('RSD')
ReqCurrencies.push('RUB')
ReqCurrencies.push('SEK')
ReqCurrencies.push('SGD')
ReqCurrencies.push('THB')
ReqCurrencies.push('TRY')
ReqCurrencies.push('USD')
ReqCurrencies.push('UYU')
ReqCurrencies.push('VEF')
ReqCurrencies.push('XAF')
ReqCurrencies.push('ZAR')
ReqCurrencies.push('EGP')
ReqCurrencies.push('TWD')
ReqCurrencies.push('VND')
				
		
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

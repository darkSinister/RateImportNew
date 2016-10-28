	document.getElementById("logo").style.display = "none";
	//document.getElementById("top-right").style.display = "none";
	//document.getElementById("language_dropdown").style.display = "none";
	document.getElementsByTagName("footer")[0].style.display = "none";
	document.getElementById("page").style.display = "none";
	document.getElementById("fixed-risk-warning").style.display = "none";
	//document.getElementById("bot").style.display = "none";
	
	var output = [];
	var ReqCurrencies = [];

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

	var reqCurL = ReqCurrencies.length;

	for (i=1;i<reqCurL;i++){

		output[i-1] = document.getElementById("menu_content").getElementsByTagName("table")[i].getElementsByTagName("tr")[2].getElementsByTagName("td")[2].getElementsByTagName("font")[0].innerHTML;

	}
	
	var newDIV = document.createElement('div');
	var newTAB = document.createElement('table');
	
	var newTR;
	var newTD;
	
	var newTR2;
	var newTD2;
	
	document.getElementsByTagName('body')[0].appendChild(newDIV);
	newDIV.appendChild(newTAB);

	for (i=1;i<reqCurL;i++) {
		newTR2 = document.createElement('tr');
		newTD2 = document.createElement('td');
		newTD = document.createElement('td');
		
		newTAB.appendChild(newTR2);
		newTR2.appendChild(newTD2);
		newTD2.innerHTML = ReqCurrencies[i];
		newTR2.appendChild(newTD);
		newTD.innerHTML = output[i-1];
	}

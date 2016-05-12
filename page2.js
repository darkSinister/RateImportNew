	document.getElementById("logo").style.display = "none";
	document.getElementById("top-right").style.display = "none";
	document.getElementById("language_dropdown").style.display = "none";
	document.getElementsByTagName("footer")[0].style.display = "none";
	document.getElementById("page").style.display = "none";
	document.getElementById("fixed-risk-warning").style.display = "none";
	document.getElementById("bot").style.display = "none";
	
	var output = [];
	var ReqCurrencies = [];

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
	ReqCurrencies[22] = 'PAB';
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

	var reqCurL = ReqCurrencies.length-2;
	alert(reqCurL);

	for (i=1;i<reqCurL;i++){

		output[i-1] = document.getElementById("menu_content").getElementsByTagName("table")[i].getElementsByTagName("tr")[2].getElementsByTagName("td")[2].getElementsByTagName("font")[0].innerHTML;

	}
	
	var newDIV = document.createElement('div');
	var newTAB = document.createElement('table');
	
	var newTR;
	var newTD;
	
	var newTR2;
	var newTD2;
	
	document.getElementById('top').appendChild(newDIV);
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

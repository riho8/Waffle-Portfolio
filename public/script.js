const WEATHER_FORECAST ="https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"

async function request(){
	try{
		const responce = await fetch(WEATHER_FORECAST);
		const data = await responce.json();
		const area = data[0].timeSeries[0].areas[0];
		const today = area.weathers[1];

		const result = today.split('　');
		console.log(result)
		const div = document.getElementById('weather');
		switch (result[0]){
			case '晴れ':
				div.classList.add("bi-brightness-high");
			  	break;
			case 'くもり':
				div.classList.add("bi-cloud");
			  	break;
			case '雨':
				div.classList.add("bi-cloud-hail");
			  	break;
			case '雪':
				div.classList.add("bi-cloud-snow");	
			  	break;
			default:
				div.classList.add("bi-rainbow");
				console.log("done");			
		}
		const tokyo = div.title;
		div.title = tokyo + today;

		// ツールチップの設定 
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
	}catch(error){
		console.error(error);
	}
}
request()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '09355a82acmsh020f8f8d96de5dap1a6ebdjsn52378e8f6420',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
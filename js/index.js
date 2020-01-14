const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET'
const isAsync = false

main2()

function main () {
 const request = new XMLHttpRequest()
 request.open(method, url, isAsync);
 request.send()

 const data = JSON.parse(request.response);
console.log(data);
}
 
function main2(){
   fetch(url)
   .then(response => response.json())
   .then(data => console.log(data))
   
}

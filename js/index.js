const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
const method = 'GET'
const isAsync = false
main()

function main () {
 const request = new XMLHttpRequest()
 request.open(method, url, isAsync);
 request.send()

 console.log(request.response)
}
let btn = document.querySelector('.btn');
btn.addEventListener('click',changContent);
function changContent() {
    //跨網域API請求可用方法之一:用現成CORS Anywhere 代理服务(只能用於開發不能生產)
    fetch('https://cors-anywhere.herokuapp.com/https://api.adviceslip.com/advice')
    .then(response => response.text())
    .then(data => JSON.parse(data))     //將字串轉為JSON格式
    .then(data => {
        let number = document.querySelector('.advice_number');
        let content = document.getElementById('content');
        number.textContent = data.slip.id;
        content.textContent = data.slip.advice;
    })
    .catch(error => 
        content.textContent = "Error:Advice slip not found."
    );
}
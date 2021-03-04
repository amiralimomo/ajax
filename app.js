// Ajax
document.querySelector('#button2').addEventListener('click', sendData)
function sendData() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'employees.json', true)
    xhr.onload = function () {
        if (this.status === 200) {
            let parent = document.querySelector('#employees')
            let employes = JSON.parse(this.response)

            employes.forEach((item, index) => {
                let emp = document.createElement('div')
                emp.innerHTML=
                    `<ul>
              <li>${item.id}</li>
              <li>${item.name}</li>
              <li>${item.job}</li>
          </ul>`
                parent.appendChild(emp)
                // console.log(text)
            });
        }
    }
    xhr.send()
} 
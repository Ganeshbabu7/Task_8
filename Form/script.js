const formEl = document.querySelector('#form');
const tableEl = document.querySelector('.tbody')
const submitEl = document.querySelector('#submit')

submitEl.addEventListener('click', formDatas)

function formDatas (event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let radiobtnEl = document.querySelector('input[type="radio"]:checked').value;
    let doorNo = document.getElementById("doorNo").value;
    let streetName = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let selected1 = document.querySelector("#favFood1");
    let favFood1 = selected1.options[selected1.selectedIndex].value;
    let selected2 = document.querySelector("#favFood2");
    let favFood2 = selected2.options[selected2.selectedIndex].value;

    tableEl.innerHTML += `
        <tr>
            <td> ${firstName} </td>
            <td> ${lastName} </td>
            <td> ${dateOfBirth} </td>
            <td> ${radiobtnEl} </td>
            <td> ${doorNo}, ${streetName}, ${city} </td>
            <td> ${pincode} </td>
            <td> ${state} </td>
            <td> ${country} </td>
            <td> ${favFood1}, ${favFood2} </td>
        </tr>
    `;

    function clear () {
        formEl.forEach(a => { a.value = ""});
    }
    clear ();

    Array.from( document.querySelectorAll('input[name="gender"]:checked'), input => input.checked = false ); 
}
import {CustomerApi} from "../api/customer_api.js";
import {CustomerModel} from "../model/customer_model.js";

let customerPage = $('#customer_page');

const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

let customerId = $('#customer_id');
let customerName = $('#customerName');
let city = $('#city');
let email = $('#customerEmail');

let addCustomerBtn = $('#addBtn');
let saveUpdateBtn = $('#saveUpdateBtn');

let customerApi = new CustomerApi();

addCustomerBtn.eq(0).on('click',function (){
    openCustomerModal('Add New Customer','Save','btn-success',)
    generateCustomerId();
});

function showError(title, text) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        footer: '<a href="">Why do I have this issue?</a>'
    });
}

function generateCustomerId(){
    customerApi.generateCustomerId().then((custId) => {
        customerId.val(custId);
    }).catch((error) => {
        showError('Fetching Error', 'Error generating customer ID');
        console.error('Error generating customer ID:', error);
    });
}


function validation(value, message, test) {
    if (!value) {
        showError('Null Input', 'Input ' + message);
        return false;
    }
    if (test === null) {
        return true;
    }
    if (!test) {
        showError('Invalid Input', 'Invalid Input ' + message);
        return false;
    }
    return true;
}

function populateCustomerTable(){
    customerApi.getAllCustomer().then((customerDb)=>{
        $('#customer-table-body').eq(0).empty();
        customerDb.forEach((customer)=>{
            $('#customer-table-body').eq(0).append(
                `<tr>
                    <th row="span">${customer.customerId}</th>
                    <td>${customer.customerName}</td>
                    <td>${customer.city}</td>
                    <td>${customer.email}</td>
                    <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#studentModal"
                                data-student-id="${customer.customerId}">
                                <i class="fa-solid fa-pen-to-square fa-bounce"></i>
                            </button>
                            <button class="deleteBtn btn btn-danger btn-sm" data-student-id="${customer.customerId}">
                                <i class="fa-solid fa-trash fa-bounce" style="color: #1E3050;"></i>
                            </button>
                    </td>
                       
                </tr>`
            )
        });
    }).catch((error) => {
        console.log(error);
        showError('fetch Unsuccessful', error);
    });
}

$('#customer-table-body').eq(0).on('click','.deleteBtn', function (){

})

saveUpdateBtn.eq(0).on('click',function (){
    event.preventDefault();
    let customerIdValue = customerId.val();
    let customerNameValue = customerName.val();
    let cityValue = city.val();
    let emailValue = email.val();


    if (validation(customerNameValue,"customer name", null)&&
        validation(cityValue,"customer city",null)&&
        validation(emailValue,"customer email",emailPattern.test(emailValue))
    ){
        let customerModel = new CustomerModel(
            customerIdValue,
            customerNameValue,
            cityValue,
            emailValue
        );

        if (saveUpdateBtn.text() === 'Save Customer'){
            customerApi.saveCustomer(customerModel);
        }
    }
})

customerPage.eq(0).on('click',function (){
    console.log("hello lover");
    populateCustomerTable();
})


function openCustomerModal(heading, buttonText, buttonClass, custId){
    if (custId){
        customerApi.getCustomer(custId)
            .then((responseText)=>{
                let customer = JSON.parse(responseText);
                customerId.val(customer.customerId);
                customerName.val(customer.customerName);
                city.val(customer.city);
                email.val(customer.email);
            })
            .catch((error)=>{
                console.log(error);
                showError('Save unsuccessful',error);
            });
        $('#customerFormHeading').text(heading);
        saveUpdateBtn.text(buttonText);
        $('#customerModal').modal('show');
        saveUpdateBtn.removeClass('btn-primary').addClass(buttonClass);
    }
    function showError(title, text) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }
}
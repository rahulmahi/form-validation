var btn = document.querySelector('#btn');

btn.addEventListener('click',butn)

function butn(e)
{
 
 var check_box = document.querySelector('#check-box').checked;
 console.log(check_box);     
 var input_box1 = document.querySelector('#input-box1').value;
 var first_row = document.querySelector('#first-row');
 var first_para = document.querySelector('#first-para');

 if(input_box1 == '')
 {
    first_para.textContent = 'Name cannot be empty';
 }
 else if(check_box == true){
    first_row.textContent = input_box1;
    first_para.innerHTML ='';
 }

 var input_box2 = document.querySelector('#last_name').value;
 var second_row =  document.querySelector('#second-row');
 var four_para = document.querySelector('#four-para');

if(input_box2 == '')
{
    four_para.textContent = 'Name cannot be empty';
}
else{
    second_row.textContent = input_box2;
    four_para.innerHTML = '';
}

var input_box3 = document.querySelector('#ph_no').value;
var third_row = document.querySelector('#third-row');
var second_para = document.querySelector('#second-para');

if(input_box3 == '')
{
    second_para.textContent = 'Phone Number cannot be empty';
}
else if(input_box3.length > 9)
{
    third_row.textContent = input_box3;
    second_para.innerHTML ='';
}

var input_box4 = document.querySelector('#email').value;
var fourth_row = document.querySelector('#fourth-row');
var five_para = document.querySelector('#five-para');

if(input_box4 == '')
{
    five_para.textContent = 'Email cannot be empty';
}
else{
    fourth_row.textContent = input_box4;
    five_para.innerHTML = '';
}

var input_box5 = document.querySelector('#password').value;
var fifth_row = document.querySelector('#fifth-row');
var third_para = document.querySelector('#third-para');

if(input_box5 == '')
{
    third_para.textContent = 'Password cannot be empty';
}
else if(input_box5.length < 6)
{
    third_para.textContent = 'the password atleast 6 character';
}

var input_box6 = document.querySelector('#con-pass').value;
var sixth_row = document.querySelector('#sixth-row')
var six_para = document.querySelector('#six-para');
if(input_box6 == '')
{
    six_para.textContent = 'Confirm Password cannot empty';
}
else if(input_box5 == input_box6 && check_box == true)
{
    sixth_row.textContent = input_box6;
    six_para.innerHTML = '';
    fifth_row.textContent = input_box5;
    fifth_para.innerHTML = '';
}
else if(input_box5 != input_box6)
{
    six_para.textContent = 'this is wrong';
}

}
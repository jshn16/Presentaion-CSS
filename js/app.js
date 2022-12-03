//STEP 12:creating a variable that maps the alert with #myAlert on DOM
let myAlert=document.querySelector('#myAlert')

//STEP 17:creating a variables that maps the alert with #alertOld and #alertNew on DOM
let alertOld=document.querySelector('#alertOld')
let alertNew=document.querySelector('#alertNew')
//STEP 13: adding EventListner to make it listen the event
myAlert.addEventListener("close.bs.alert",(data)=>{
    //STEP: 14 passing data parameter and adding preventDefault method to stop the ideal function
    data.preventDefault();
    
    myAlert.classList.toggle("alert-warning")
})

//STEP 18: Adding EventListner to make it listen the event
alertOld.addEventListener("closed.bs.alert",()=>{
    //STEP 19: using classlist to add and remove the particular classes
    alertNew.classList.remove("hide")
    alertNew.classList.add("show")
})
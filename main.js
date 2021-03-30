
//Navbar

function barsToCross(x) {
  x.classList.toggle("change");
}

function showIcons() {
    let x = document.querySelector('#nav-links');
    //let windowWidth = window.innerWidth;

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

//Order Projects

let gc = document.querySelector('#project-grid');

function OldtoNew(){
  gc.classList.remove("grid-area-newToOld");
  gc.classList.add("grid-area-OldtoNew");
}

function NewtoOld(){
  gc.classList.remove("grid-area-OldtoNew");
  gc.classList.add("grid-area-newToOld");
}

//CLick and show project details

function projDetails(project_element) {
  project_element.classList.toggle("backg-img");
  project_element.classList.toggle("show");
  project_element.classList.toggle("projDetails");
}

//Form validations

form.addEventListener('submit', (e) => {

  let fname = document.querySelector('#input_fname');
  let lname = document.querySelector('#input_lname');
  let email = document.querySelector('#input_email');

  const empties = []
  
  if (fname.value === '' || fname.value == null) {
    empties.push('error1')
    alert("First name is required.")
  }

  if (lname.value === '' || lname.value == null) {
    empties.push('error2')
    alert("Last name is required.")
  }

  if (email.value === '' || email.value == null) {
    empties.push('error3')
    alert("E-mail is required.")
  }

  if (empties.length > 0) {
    e.preventDefault()
  }

})
// Function store the object user in localStorage
const store = () => {
  const user = {
    name : "Doe",
    firstName : "John"
  };

  const userString = JSON.stringify(user);
  localStorage.setItem('user', userString);

  window.open("../storage-js/show.html");
}

// Function show retrieve the data from localStorage and show it
const show = id => {
  const regularData = JSON.parse(localStorage.getItem('user'));

  if (regularData !== null) {
    console.log(regularData.name, regularData.firstName);
    const text = `Name : ${regularData.name} \n& firstName : ${regularData.firstName}`;
    id.innerHTML = text;
    id.style.color = 'red';
  };

  myStorage = window.localStorage;
  return myStorage;
}

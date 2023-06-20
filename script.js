const jokesContainer = document.querySelector('#jokes-container')
const newJoke = document.querySelector('#new-joke')
const inputName = document.querySelector('#input-name')

function displayOnTheScreen(joke){
  jokesContainer.innerText = joke.value;
}

async function callAPI(){        // async is independent
  try{
    const req = await fetch('https://api.chucknorris.io/jokes/random');
    const reqYourName = await fetch(`https://api.chucknorris.io/jokes/random?name=${inputName.value}`);
    //const req = await fetch('https://api.chucknorris.io/jokes/random?name=Bob&category=dev');
    //console.log(req);
    const res = await req.json();
    const resYourName = await reqYourName.json();
    //console.log(res);
    //console.log(res.value);
    inputName.value ? displayOnTheScreen(resYourName) : displayOnTheScreen(res);
        
  }catch(e){
    console.error();
  }
}

newJoke.addEventListener('click', () => {
  callAPI()
})
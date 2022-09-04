import './hello-world.css';
class HelloWorld{
render(){
    const button=document.createElement('button');
    const body=document.querySelector('body');
    body.appendChild(button)
    button.innerHTML='hello world';
    button.classList.add('hell-world-button');
}
}
export default HelloWorld;
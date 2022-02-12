let routes = {}
let templates = {}

let app_div = document.getElementById('app')

function home(){
    let div = document.createElement('div')
    let link = document.createElement('a')
    link.href = '#/about'
    link.innerText = 'About'

    div.innerHTML = '<h1>Home</h1>'
    div.appendChild(link)
    app_div.innerHTML = ''
    app_div.appendChild(div)
}//End home

function about(){
    let div = document.createElement('div')
    let link = document.createElement('a')
    link.href = '#/'
    link.innerText = 'Home'

    div.innerHTML = '<h1>About</h1>'
    div.appendChild(link)
    app_div.innerHTML = ''
    app_div.appendChild(div)
}//End about

function route(path, template){
    if(typeof template === 'function')
        return routes[path] = template
    else if(typeof template === 'string')
        return routes[path] = templates[template]
    else
        return;
}//End route

function template(name, templateFunction){
    return templates[name] = templateFunction
}//End template


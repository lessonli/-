import {a} from './util/a'
import obj from './util/b'
import './1.css'
import img from '../public/1.jpg'

let image = new Image();
image.src = img;
document.body.appendChild(image)

let xhr = new XMLHttpRequest();
xhr.open('get','/api/haha')
xhr.send()

let xhr2 = new XMLHttpRequest();
xhr2.open('post','/api/hehe')
xhr2.send()


console.log(a,obj)
console.log(123243535)
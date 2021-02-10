
```js
let wrap = function(p1) {
    let fail = null
    
    let p2 = new Promise((resolve,reject)=> {
        fail = reject // 此处保存promsie 的失败
    })
    
    let p = Promise.race([p1,p2])
    
    p.abort = fail
    
    return p
}
```
```js

let p = wrap(new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        resolve('ok')
    }, 2000)
} ))

p.abort('失败')
p.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
```
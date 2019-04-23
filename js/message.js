var APP_ID = 'uEAVuMVaqN6jj87Mhi3A6PY7-9Nh9j0Va';
var APP_KEY = 'DvNbr76o0ic0I8U9L6a0tcKX';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector('#postMessage')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
    }).then(function (object) {
        console.log(object)
        alert('存入成功');
    })
})

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})

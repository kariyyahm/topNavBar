var APP_ID = 'uEAVuMVaqN6jj87Mhi3A6PY7-9Nh9j0Va';
var APP_KEY = 'DvNbr76o0ic0I8U9L6a0tcKX';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
  let array = messages.map((item) => item.attributes)
  array.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = `${item.name}: ${item.content}`
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
  })
}, function (error) {
  alert('提交失败')
});

let myForm = document.querySelector('#postMessage')

console.log(myForm)
myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name': name,
    'content': content
  }).then(function (object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
    myForm.querySelector('input[name=content]').value = ''
  })
})

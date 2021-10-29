const onwork_list = document.getElementsByClassName('onwork');
const add_event_btn = document.querySelector('.submit');
const inputEve = document.getElementsByTagName('input');
const del_event_btn = document.getElementsByClassName('del');
let onwork_counter = document.getElementsByClassName('counter1');
let counter = 1;

let new_event = document.createElement('li');
new_event.innerHTML = '<button class="del">删除</button>' + '示例事件';
new_event.style.listStyle = "none";
new_event.style.marginBottom = "15px";
onwork_list[0].append(new_event);

add_event_btn.addEventListener('click', function () {
    let new_event = document.createElement('li');
    let nameOfevent = inputEve[0].value.toString();
    if (nameOfevent === '') {
        alert('请输入内容');
        return;
    }
    new_event.innerHTML = '<button class="del">删除</button>' + nameOfevent;
    new_event.style.listStyle = "none";
    new_event.style.marginBottom = "15px";
    onwork_list[0].append(new_event);
    inputEve[0].value = '';
    counter++;
    del_event_btn[counter - 1].setAttribute('id', counter.toString());
    onwork_counter[0].innerHTML = counter.toString();
    for (let i = 0; i < del_event_btn.length; i++) {
        del_event_btn[i].addEventListener('click', function (e) {
            this.parentNode.parentNode.removeChild(this.parentNode.parentNode.childNodes[i]);
        })
    }

});

// for (let i = 0; i < del_event_btn.length; i++) {
//     del_event_btn[i].addEventListener('click', function (e) {
//         this.parentNode.parentNode.removeChild(this.parentNode.parentNode.childNodes[0]);
//     })
// }
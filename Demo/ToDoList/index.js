function clear() {
    localStorage.clear();
    load();
}

function postaction() {
    // 获取title节点
    let title = document.getElementById("title");
    if (title.value.trim() == "") {
        alert("内容不能为空");
    } else {
        let data = loadData();
        let todo = { "title": title.value, "done": false };
        data.push(todo);
        saveData(data);
        let form = document.getElementById("form");
        form.reset();
        load();
    }
}

function loadData() {
    let collection = localStorage.getItem("todo");
    if (collection != null) {
        return JSON.parse(collection);
    } else return [];
}

function saveSort() {
    let todolist = document.getElementById("todolist");
    let donelist = document.getElementById("donelist");
    let ts = todolist.getElementsByTagName("p");
    let ds = donelist.getElementsByTagName("p");
    let data = [];
    for (i = 0; i < ts.length; i++) {
        let todo = { "title": ts[i].innerHTML, "done": false };
        data.unshift(todo);
    }
    for (i = 0; i < ds.length; i++) {
        let todo = { "title": ds[i].innerHTML, "done": true };
        data.unshift(todo);
    }
    saveData(data);
}

function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
}

function remove(i) {
    let data = loadData();
    let todo = data.splice(i, 1)[0];
    saveData(data);
    load();
}

function update(i, field, value) {
    let data = loadData();
    let todo = data.splice(i, 1)[0];
    todo[field] = value;
    data.splice(i, 0, todo);
    saveData(data);
    load();
}

function edit(i) {
    load();
    let p = document.getElementById("p-" + i);
    title = p.innerHTML;
    p.innerHTML = "<input id='input-" + i + "' value='" + title + "/>";
    let input = document.getElementById("input-" + i);
    input.setSelectionRange(0, input.value.length);
    input.focus();
    input.onblur = function() {
        if (input.value.length == 0) {
            p.innerHTML = title;
            alert("内容不能为空");
        } else {
            update(i, "title", input.value);
        }
    };
}

function load() {
    let todolist = document.getElementById("todolist");
    let donelist = document.getElementById("donelist");
    let collection = localStorage.getItem("todo");
    if (collection != null) {
        let data = JSON.parse(collection);
        let todoCount = 0;
        let doneCount = 0;
        let todoString = "";
        let doneString = "";
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].done) {
                doneString += "<li draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",false)' checked='checked' />" +
                     "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
                    "<a href='javascript:remove(" + i + ")'>-</a></li>";
                 doneCount++;
            } else {
                todoString += "<li draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",true)' />" +
                    "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
                    "<a href='javascript:remove(" + i + ")'>-</a></li>";
                todoCount++;
            }
        };
        todocount.innerHTML = todoCount;
        todolist.innerHTML = todoString;
        donecount.innerHTML = doneCount;
        donelist.innerHTML = doneString;
    } else {
        todocount.innerHTML = 0;
        todolist.innerHTML = "";
        donecount.innerHTML = 0;
        donelist.innerHTML = "";
    }
}

window.onload = load;

// window.addEventListener("storage", load, false);

index.js

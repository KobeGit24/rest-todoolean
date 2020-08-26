function init() {
    getTodoList(); 
    addItemTodoList();
    deleteItem();
}

function getTodoList() {

    $.ajax({
        url: `http://157.230.17.132:3034/todos`,
        method: 'GET',
        success: function (data) {
            printTodoList(data);
        },
        error: function (err) {
            console.log('err', err);
        }
    });
}

function printTodoList(item) {
    
    var list = $('#list');
    list.text('');
    for (var i = 0; i < item.length; i++) {
        var y = item[i]; 
        list.append(`<li> ${y.text} <span data-id= "${y.id}"  class="delete">X</span></li>`);   
    }
}

function addItemTodoList () {
    
    var btn = $('#add');
    btn.click(insertItemApi);
    $(document).keyup(pressApi);
}

function insertItemApi () {

    var input = $('#new-item');
    var text = input.val();

    $.ajax({
        url: `http://157.230.17.132:3034/todos`,
        method: 'POST',
        data: {
            text: text
        },
        success: function (data) {
            console.log('data', data);
            getTodoList();
        },
        error: function (err) {
            console.log('err', err);
        }
    });
}

function pressApi(event) {   
    if (event.which==13 || event.keyCode==13) {
        insertItemApi(); 
    }
}

function deleteItem() {
    $(document).on('click','.delete', function () {
       
        var x = $(this); 
        var z = x.data('id');

        $.ajax({
            url: `http://157.230.17.132:3034/todos/${z}`,
            method: 'DELETE',
            success: function (data) {
                console.log('data', data);
                getTodoList();
            },
            error: function (err) {
                console.log('err', err);
            }
        });
    });
}

$(document).ready(init);
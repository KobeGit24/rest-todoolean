function init() {
    getTodoList(); 
}

function getTodoList() {
    $.ajax({
        url: `http://157.230.17.132:3034/todos`,
        method: 'GET',
        success: function (data) {
            console.log('data', data);
        },
        error: function (err) {
            console.log('err', err);
        }
    });
}

$(document).ready(init);
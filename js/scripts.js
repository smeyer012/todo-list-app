let theList = $('#list');

$("#button").click(function() {

    let inputValue = $('#input').val();
    let inputBox = $('#inputBox');

    if (inputValue === '') {
        if (!inputBox.hasClass('error')) {
            inputBox.append('<label for="input">Type to-do item into the box above</label>');
        }
        inputBox.addClass('error');
    } else {
        inputBox.removeClass('error');
        $('#inputBox label').remove();
        $('#list').append('<li>' + inputValue + '<span class="deleteItem">x</span></li>');
        $('#input').val('');
    }

});


theList.on("click", "li", function(e){
    let target = $(e.target);
    if(!$(target).is("span")) {
        $(this).toggleClass("strike");
    } 
    else {
        target.parent().css("opacity", 0);
        setTimeout(function() { 
            target.parent().remove();
        }, 600);
    }
}).sortable();
let theList = $('#list');

// enables input of a to-do item and adds it to the list 
$("#button").click(function() {

    let inputValue = $('#input').val();
    let inputBox = $('#inputBox');

    if (inputValue === '') {
        // creates error message if input is empty
        if (!inputBox.hasClass('error')) {
            inputBox.append('<label for="input">Type to-do item into the box above</label>');
        }
        inputBox.addClass('error');
    } else {
        // removes any error messages if input has content
        inputBox.removeClass('error');
        $('#inputBox label').remove();
        // adds item to list
        $('#list').append('<li>' + inputValue + '<span class="deleteItem">x</span></li>');
        // resets input for easy addition of new item
        $('#input').val('');
    }

});

// enables the ability to cross off or delete a list item or to reorder the list
theList.on("click", "li", function(e){
    let target = $(e.target);
    if(!$(target).is("span")) { // crosses off item if not clicking on the "X"
        $(this).toggleClass("strike");
    }
    else { // deletes item
        target.parent().css("opacity", 0);
        setTimeout(function() {
            target.parent().remove();
        }, 600);
    }
}).sortable(); // makes items sortable
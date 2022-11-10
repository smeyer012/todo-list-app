function newItem(){

        let inputValue = $('#input').val();

        if (inputValue === '') {
            $('#inputBox').addClass('error');
            $('#inputBox').append('<label for="input">Type to-do item into the box above</label>');
        } else {
            $('#inputBox').removeClass('error');
            $('#inputBox label').remove();
            $('#list').append('<li>' + inputValue + '<span class="deleteItem">x</span></li>');
            $('#input').val('');
        }
       
        $('#list li').on("click", function() {
            $(this).toggleClass("strike");
        });
       
        $('.deleteItem').on("click", function() {
            let $this = $(this);
            $this.parent().css("opacity", 0);
            setTimeout(function() { 
                $this.parent().remove();
            }, 600);
        });
     
        //enables reordering 
        $('#list').sortable();
}
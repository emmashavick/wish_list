/* Exercise 1: Wish list */
$(document).on('click', 'button#add-to-list', function (){
var inputItem = $("input#item").val();
addToList(inputItem);
$("input#item").val("");
$("input#item").focus();
});

function addToList(item) {
var list = $("ol#items");

list.append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

$(document).on('click', 'span.label.pending', function(){
var item = $(this).parent();
item.addClass("complete");
item.append("<span class='label success'>Done!</span>");
$(this).remove();
});

$(document).on('click', 'span.label.success', function(){
	$(this).parent().remove();
});

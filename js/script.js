/**
 * Created by Кирилл on 10.07.2015.
 */
$(document).ready(function () {
    var syntax = new Syntax();

    $('.editor').on('input', function () {
        var text = $(this).html();
        //console.log(window.getSelection().getRangeAt(0));
        //alert(getCaret(document.getElementById('thetext')));
        //var car = getSelection(document.getElementById('thetext'));
        //alert(car);
        var re = syntax.replacer(text);
        //var re = '<span class="photo">'+text+'</span>';
        //$(this).html(re);


        //$(this).html(re);
        console.log(getCaretPos($(this)));
        moveCaretToEnd(document.getElementById('thetext'));

    });
});

function getCaretPos(element) {
    element.focus();
    if (document.selection) {
        var sel = document.selection.createRange();
        var clone = sel.duplicate();
        console.log(clone);
        sel.collapse(true);
        clone.moveToElementText(element);
        clone.setEndPoint('EndToEnd', sel);
        return clone.text.length;
    } else {
        return window.getSelection().getRangeAt(0).endOffset;
    }
    return 0;
}


function moveCaretToEnd(inputObject)
{
    if (inputObject.selectionStart)
    {
        var end = inputObject.value.length;
        inputObject.setSelectionRange(end,end);
        inputObject.focus();
    }
}

/**
 * Created by Кирилл on 10.07.2015.
 */
function Syntax(){
    this.replacer = function(text){
        var re = /Test/g;
        var newstr = text.replace(re, '123');
        console.log(newstr);
        return newstr;
    }
}
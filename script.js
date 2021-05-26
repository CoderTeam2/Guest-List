var Guests = [];
var name_found_times = 0;
function add_Guest(){
    var guest = document.getElementById("g").value;
    Guests.push(guest);
    document.getElementById("guests").innerHTML = Guests;
    document.getElementById("g").value = "";
}
function display(){
    if(Guests.length >= 1){
        var display_text = "";
        var length = Guests.length;
        for(var i=0; i<length; i++){
            display_text+=Guests[i]+"<br>";
        }
        document.getElementById("vertical").innerHTML = display_text;
    }else{
        alert("Please add at least 1 name to the list!");
    }
}
function sort(){
    if(Guests.length >= 1){
        var display_text = "";
        var sorted_list = Guests.sort();
        for(var i=0; i<sorted_list.length; i++){
            display_text+=sorted_list[i]+"<br>";
        }
        document.getElementById("without_commas").innerHTML = display_text;
    }else{
        alert("Please add at least 1 name to the list!");
    }
}
function search(){
    var search_guest = document.getElementById("s").value;
    name_found_times = 0;
    if(Guests.length >= 1){
        for(var i=0; i<Guests.length; i++){
            if(search_guest == Guests[i]){
                name_found_times++;
            }
        }
        if(name_found_times >= 1){
            document.getElementById("search_result").innerHTML = "Name found "+name_found_times+" times";
        }else{
            document.getElementById("search_result").innerHTML = "Name found 0 times";
        }
    }else{
        alert("Please add at least 1 name to the list!");
    }
}
function remove(){
    Guests = [];
    name_found_times = 0;
    document.getElementById("vertical").innerHTML = "";
    document.getElementById("without_commas").innerHTML = "";
    document.getElementById("search_result").innerHTML = "";
    document.getElementById("s").value = "";
    document.getElementById("guests").innerHTML = "";
    document.getElementById("g").value = "";
}
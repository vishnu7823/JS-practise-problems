//closures example

function update(){

    var name = "vishnu"

    function deletefunction(){
        console.log(name)  //nested funciton has access to variable of outer scope
    }
    deletefunction();

}

update()
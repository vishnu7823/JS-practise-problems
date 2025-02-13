//async and await example

const fetchdata = async()=>{

    try{
        let response = await fetch('https://api.example.com/data')
        let data = await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
console.log(fetchdata)
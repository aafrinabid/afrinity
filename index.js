module.exports=async function afretch(method,url,body,headers){
try{
    const axios=require('axios')
    let result
if(method.toUpperCase()==='GET'){
    if(headers&&body){
        result=await axios.get(url,{headers:headers},body)
        return result
    }else if(headers){
        result=await axios.get(url,{headers:headers})
        return result
    }else{
        result=await axios.get(url)
        return result

    }
     
}
if(method.toUpperCase()==='POST'){

    result=await axios.post(url,body)
    return result
}
}catch(e){
    let result=e
    return result

}    
}
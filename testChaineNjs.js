var searchElement = function (data, callback){
    let cp = 0;
    for (var i = 0; i <= data.chaine.length; i++)
    {
    if (data.chaine.substring(i, i + data.filtre.length) == data.filtre) 
       cp++;
    }
    
    if (cp > 0) return callback(null, cp);
    else return callback('Element ' + data.filtre + ' non retrouve dans la string: ' + data.chaine);
};

var str = "abaabbbaaaababa";
var subStr = "ab";

var data = {chaine : str, filtre : subStr};
searchElement(data, function (err,result){
    if (err)
    console.error("erreur :" + err)
    else
    console.log("la sous chaîne " + subStr + " apparait " + result + " fois dans la chaîne " + str)
});



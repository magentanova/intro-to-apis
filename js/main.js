console.log($)

var fetchDataPerQuery = function(zip) {
  $.getJSON("http://congress.api.sunlightfoundation.com/legislators/locate?" + "zip=" + zip + "&apikey=7ba96d266cc84b168fab4d878d9aa141").then(function(d){
    
    var el = document.querySelector('#container')  
    console.log(d)
    var pols = d.results

    var htmlStr = ''

    for(var i = 0 ; i < pols.length ; i++){
       var p = pols[i]
       
       htmlStr += '<div class="card pols">'
       htmlStr += '<h3>'+p.first_name+' '+p.last_name+'</h3>'
       htmlStr += '<h4>'+p.title +' -- '+ p.party+'-'+p.state_name+ '</h4>'
       htmlStr += '<ul>'
       htmlStr +=    "<li>email: "+ p.email +"</li>"
       htmlStr +=    "<li>website: "+ p.website+"</li>"
       htmlStr +=    "<li>facebook: "+ p.facebook_id+"</li>"
       htmlStr +=    "<li>twitter: "+ p.twitter_id+"</li>"
       htmlStr += '</ul>'
       htmlStr += '<h5> Term End'+p.term_end+'</h5>'
       htmlStr += '</div>'
    } 

    console.log(htmlStr)
    document.querySelector('#container').innerHTML = htmlStr
  })
}

document.querySelector('input').addEventListener('keypress',function(e) {
  console.log(e.keyCode)
  if (e.keyCode === 13) {

      fetchDataPerQuery(e.target.value)
  }
})

var fetchDataNoQuery = function() {
  $.getJSON("http://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141").then(function(d){
    
    var el = document.querySelector('#container')  
    console.log(d)
    var pols = d.results

    var htmlStr = ''

    for(var i = 0 ; i < pols.length ; i++){
       var p = pols[i]
       
       htmlStr += '<div class="card pols">'
       htmlStr += '<h3>'+p.first_name+' '+p.last_name+'</h3>'
       htmlStr += '<h4>'+p.title +' -- '+ p.party+'-'+p.state_name+ '</h4>'
       htmlStr += '<ul>'
       htmlStr +=    "<li>email: "+ p.email +"</li>"
       htmlStr +=    "<li>website: "+ p.website+"</li>"
       htmlStr +=    "<li>facebook: "+ p.facebook_id+"</li>"
       htmlStr +=    "<li>twitter: "+ p.twitter_id+"</li>"
       htmlStr += '</ul>'
       htmlStr += '<h5> Term End'+p.term_end+'</h5>'
       htmlStr += '</div>'
    } 

    console.log(htmlStr)
    document.querySelector('#container').innerHTML = htmlStr
  })
}

fetchDataNoQuery()

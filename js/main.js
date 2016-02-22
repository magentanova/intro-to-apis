console.log($)



$.getJSON("http://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141").then(function(d){
  document.querySelector('#data-output-container pre').innerHTML = JSON.stringify(d,null,2)
})




$.getJSON("http://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141").then(function(d){
  
  var el = document.querySelector('#container-part-3')  
  console.log(el)
  var pols = d.results


  for(var i = 0 ; i < pols.length ; i++){
     var p = pols[i], htmlStr=''
     
     htmlStr += '<div class="card pols">'
     htmlStr += '<h3>'+p.first_name+' '+p.last_name+'</h3>'
     htmlStr += '<h4>'+p.title +' -- '+ p.party+'-'+p.state_name+ '</h4>'
     htmlStr += '<ul>'
     htmlStr +=    "<li>"+ p.email +"</li>"
     htmlStr +=    "<li>"+ p.website+"</li>"
     htmlStr +=    "<li>"+ p.facebook_id+"</li>"
     htmlStr +=    "<li> "+ p.twitter_id+"</li>"
     htmlStr += '</ul>'
     htmlStr += '<h5> Term End'+p.term_end+'</h5>'
     htmlStr += '</div>'

     el.innerHTML += htmlStr
    //   <ul>
    //     <li>email: </li>
    //     <li>website: </li>
    //     <li>facebook: </li>
    //     <li>twitter: </li>
    //   </ul>
    //   <h6>term ends: DATE</h6>
    // </div>
  } 

})

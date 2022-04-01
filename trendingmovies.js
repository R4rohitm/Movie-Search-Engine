
var tm = document.getElementById("trendingmovies");

async function trendingmovies(){
    try{
        let res = await fetch(`https://api.themoviedb.org/4/list/1?api_key=e1162bd980f10add05a0dcf5e708e20c`)
        let data = await res.json()

        console.log(data)
        results = data.results
        console.log(results)
        appendingTM(results)
        // poster = results[0].poster_path
        // console.log(poster)
        
    }catch(error){
        console.log(error)
    }
}

trendingmovies()

function appendingTM(results) {
    results.forEach(function(elem,index,arr){

        var divtag = document.createElement('div')
        divtag.setAttribute('id',"divtag")

        var poster = document.createElement('img')
        poster.src = `https://image.tmdb.org/t/p/original/${elem.poster_path}`

        var name = document.createElement('h3')
        name.innerText = elem.title

        var datediv = document.createElement('div')
        datediv.setAttribute("id","datediv")

        var releasedate = document.createElement('p')
        releasedate.innerText ="Release Date: " + elem.release_date

        var languages = document.createElement('p')
        languages.innerText = "Languages: "+ elem.original_language
        
        datediv.append(releasedate, languages)

        var divvotes = document.createElement('div')
        divvotes.setAttribute("id","divvotes")
        var votesavg = document.createElement('p')
        votesavg.innerText = "Average Votes: " + elem.vote_average

        var overviewinfo = document.createElement('p')
        overviewinfo.innerText = "Overview: "+ elem.overview

        divvotes.append(votesavg,overviewinfo)

        divtag.append(poster,name,datediv,divvotes)
         tm.append(divtag)
    })
}
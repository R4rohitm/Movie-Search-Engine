let timerid;

    let movies = document.getElementById("parent");
    
  async function searchMovie() {
      try{
            let input = document.getElementById("query").value;
            let res = await fetch(`https://www.omdbapi.com/?apikey=6a6b6722&s=${input}`)
            let data = await res.json();

            array = data.Search

          console.log(array);
        //   appendMovies(data.Search)
        return array;
      }
      catch(error){
           console.log(error);
        //   alert("Movie Not Found")
      }
        
    }

    function appendMovies(data){
        movies.innerHTML = null

       

        data.forEach(function(el){

            var poster = document.createElement("img")
            poster.src = el.Poster
            poster.setAttribute("id", "poster")

            var titlediv = document.createElement("div")
            titlediv.setAttribute("id", "titlediv")
            let title= document.createElement("div");
            title.innerText= el.Title;
            
            let year = document.createElement("div")
            year.innerText= "(" + el.Year + ")"

            titlediv.append(title,year)
            var container = document.createElement("div")
            container.setAttribute("id", "container")
            container.addEventListener("click",function(){
                getMoviesInfo(el)
            })
            

            container.append(poster, titlediv)

            movies.append(container)
        })
    }

    async function main(){
        try {
            let data = await searchMovie();
            console.log(data)

            if (data == undefined) {
                return false;
            }
            appendMovies(data)

        } catch(error){
            console.log(error)
        }
        
    }

    function debounce(func, delay){

        if(timerid){

            clearTimeout(timerid)
        }

       timerid = setTimeout(function(){
            func()
        },delay)
    }


    async function getMoviesInfo(el){
        console.log(el.Title)

        var name = el.Title
        let url = `http://www.omdbapi.com/?t=${name}&apikey=6a6b6722`
        

        try{let res = await fetch(url);

        let data = await res.json();
        console.log(data);
        displayData(data)
        
        }
            catch(error){
            console.log(error);
            alert("Movie Not Found")
        }
    }



    
    var containermovie = document.querySelector("#containermovie");   

    function displayData(data){

       containermovie.innerHTML = ""
        var divleft = document.createElement("div");
        divleft.setAttribute("id","divleft")
        
        var poster = document.createElement("img");
        poster.src = data.Poster

        divleft.append(poster)

        var divright = document.createElement("div");
        divright.setAttribute("id", "divright")

        var divtitle = document.createElement("div");
        
        divtitle.setAttribute("id", "divtitle")

        var title = document.createElement("h3")
        title.textContent = data.Title

        var year = document.createElement("h6")
        year.innerText= "("+ data.Year + ")"

        var genre = document.createElement("h6")
        genre.innerText ="Genre :" + data.Genre
        genre.setAttribute("id", "genre")
        
        divtitle.append(title,year,genre)

       

        var divlogo = document.createElement("div")
        divlogo.setAttribute("id", "divlogo")

        var imdblogo = document.createElement("img")
        imdblogo.src = "https://img.icons8.com/color/48/000000/imdb.png"
        var imdbrat = document.createElement("h6")
        imdbrat.innerText = data.imdbRating
        var runtime = document.createElement("h6")
        runtime.innerText = "Run Time :" + data.Runtime
        var language = document.createElement("h6")
        language.innerText = "Language :" + data.Language
        language.setAttribute("id", "language")

        if(data.imdbRating>=8.5)
        {
          var rec = document.createElement("h6")
          rec.setAttribute("id", "rec")
          rec.innerText = "Recommended"
          divlogo.append(imdblogo, imdbrat, rec, language, runtime)
        }
        else{
          divlogo.append(imdblogo, imdbrat,language, runtime)
        }
        
        // divlogo.append(imdblogo, imdbrat, rec, language, runtime)


        var director = document.createElement("h6")
        director.innerText ="Directed by : "+ data.Director
        director.setAttribute("id", "director")

        var divinfo = document.createElement("div")
        divinfo.setAttribute("id", "divinfo")

        var actor = document.createElement("p")
        actor.innerText = "Cast : "+ data.Actors

        var plot= document.createElement("p")
        plot.innerText ="Plot : "+ data.Plot

        var award = document.createElement("p")
        award.innerText ="Awards : " + data.Awards

        divinfo.append(actor,plot,award)

        divright.append(divtitle,divlogo, director, divinfo)
        
        containermovie.append(divleft,divright)        

    }
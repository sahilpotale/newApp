//d2d314585b7e49b4adf99a3094fb92f8
let newsAccordian = document.getElementById('newsAccordian');

const xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d2d314585b7e49b4adf99a3094fb92f8',true);
xhr.onload = function () {
    if (this.status === 200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        let news ="";
        articles.forEach(function(element,index){
            news += `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link search" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>Breaking News-${index+1} : </b>${element.title}
                                            </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                                <div class="card-body">
                                    ${element.content}, <a href="${element.url}" target="_blank">Read more Here</a>
                                        </div>
                            </div>
                        </div>`
                    });
        newsAccordian.innerHTML=news;
    }
    else
        console.log('some error occured');
}

xhr.send();

//remember to add search element
/*
let inputVal=document.getElementById('inputVal');
inputVal.addEventListener('input',function(e){
    let search = document.getElementsByClassName('search');
    Array.from(search).forEach(function(element){
       let Title=element.getElementsByTagName('p')[0].innerText;
       if(Title.includes(inputVal.value))
        element.style.display='block';
       else
       element.style.display='none';
   })
});*/
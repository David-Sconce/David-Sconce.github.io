
window.onload = init();

function init(){
    console.log("working")
    fetch("../raw/projects.json").then(res => res.json()).then(data => {

        renderProject(data);
    });
}


function renderProject(data){
    let container = document.getElementById("repeat");
    let cardHtml = `
    <div class="col-md-4">
        <div class="card project-card" style="width: 20rem;">
            <img src="${data.Img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${data.Short_dis}</p>
                <a href="${data.Link}" class="btn btn-primary">${data.Name}</a>
            </div>
        </div>
    </div>
`; 
}

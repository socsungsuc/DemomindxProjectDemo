let teamlist = document.querySelectorAll(".listmember");
let teamitem = document.querySelectorAll(".team-item");

for (let i = 0; i < teamlist.length; i++){
    teamlist[i].addEventListener('click', function(){
        for (let j = 0; j < teamlist.length; j++){
            teamlist[j].classList.remove('active');
        }
        this.classList.add('active');
    

    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < teamitem.length; k++){
        teamitem[k].classList.add('hide');

        if (teamitem[k].getAttribute('data-item') == dataFilter || dataFilter == "All"){
            teamitem[k].classList.remove('hide');
            //teamitem[k].classList.add('act');
        }
    }
    });
}
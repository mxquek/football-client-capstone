export async function PostTeam(club){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(club)
    }
    alert(JSON.stringify(club));
    fetch("http://localhost:5101/api/club", init)
        .then(response => {
            alert(JSON.stringify(club));
            if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.body);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new club " + json.clubId);
        })
        .catch(m => alert(m));

}
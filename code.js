console.log("loaded");

function gen()
{
    console.log("click");

    let truc = fetch("https://v1.api.amethyste.moe/generate/3000years",
    { 
        method: "POST",
        headers: 
        {
            'Authorization': "Bearer " + token.value,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
            'url': image.value,
        })
    });

    truc.then(r => {
        console.log(r);
    });
}
let url_string = window.location.href;
let url = new URL(url_string);

function getIdByUrl(){
    return url.searchParams.get("id");
}


const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');
const noVoldy = document.querySelector('#noVoldy');

update.addEventListener('click', _ => {
    //send put request here
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Voldemort',
            quote: 'There is no good and evil. There is only power... and those too weak to seek it.'
        })
    })
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(response => {
        window.location.reload(true);
    })
    .catch(error => console.error(error));
})

deleteButton.addEventListener('click', _ => {
    //delete fetch request
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Voldemort'
        })
    })
    .then(response => {
        if(response.ok) return response.json()
    })
    .then(response => {
        if(response === 'No quote to delete') {
            noVoldy.textContent = 'Error: No Voldemort quote to delete'
        } else {
            window.location.reload();
        }
    })
    .catch(error => console.error(error));
})
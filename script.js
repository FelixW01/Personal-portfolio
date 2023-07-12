const egg = $('#egg');
const yolk = $('#yolk')


egg.on('click', (event) => {
    const frontEnd = $('#front-end');
    if (event) {
        frontEnd.css('visibility', 'visible');
    }
})
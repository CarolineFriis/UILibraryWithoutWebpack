//create a tooltip
const tooltip = new Tooltip (document.querySelector('.tooltip'));

tooltip.init();

//Create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

//Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

//button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You clicked me!');
})



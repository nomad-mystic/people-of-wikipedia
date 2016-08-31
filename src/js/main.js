/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// requires main css files and webpack bundles up the css for client
require('../scss/main.scss');

// getting utilities
// import getPromise from './utilities/getPromise';
// import buildTemplate from './utilities/buildTemplate';

// import Classes
// import InitialPages from './classes/CategoryPage';

// Grabs data from promise, sends template name and array of objects
// Builds out the DOM
import categoryPage from './components/categoryPage';
// Getting initial template of ten people from the API
// this is the path to the express route
// getPromise('/').then((response) => {
//     console.log(response);
// }, (err) => {
//     console.log(err);
// });


let createPage = () => {
    let href = window.location.href;
    console.log(href);
    if (href === 'http://localhost:3000/') {
        // the the root page
        categoryPage('history');
    }
};

createPage();




// if I need jQuery
$(function() {
    // $('body').css('background', 'red');
});
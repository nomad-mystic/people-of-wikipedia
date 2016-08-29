/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// requires main css files and webpack bundles up the css for client
require('../scss/main.scss');

// console.log('testing');
console.log('Location: ' + window.location.href);

// getting utilities
import getPromise from './utilities/getPromise';

// import Classes


// Getting initial template of ten people from the API
// this is the path to the express route
getPromise('/').then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});


// if I need jQuery
$(function() {
    $('body').css('background', 'red');

});
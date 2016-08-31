/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// requires main css files and webpack bundles up the css for client
require('../scss/main.scss');

// getting utilities
import getPromise from './utilities/getPromise';
import buildTemplate from './utilities/buildTemplate';

// import Classes
import InitialPages from './classes/InitialPages';

// Getting initial template of ten people from the API
// this is the path to the express route
// getPromise('/').then((response) => {
//     console.log(response);
// }, (err) => {
//     console.log(err);
// });

// calls initialPages endpoint and returns object for mustache templating
let initializePages = () => {
    getPromise('/initialPages').then((response) => {
        // console.log(response);
        let InitialPagesClass = new InitialPages(response);
        let pages = InitialPagesClass.getInitialPages();
        let parsedInitialPages = JSON.parse(pages);

        // console.log(parsedInitialPages.query.categorymembers);
        let categoryMembersArray = parsedInitialPages.query.categorymembers;
        // console.log(categoryMembersArray);

        // this function takes the name of the template wanted to be used
        // and the data for that template
        buildTemplate('initialPagesTemplate', categoryMembersArray);
    },
    (err) => {
        console.log(err);
    });
};
// the the root page
initializePages();







// if I need jQuery
$(function() {
    // $('body').css('background', 'red');
});
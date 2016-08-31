/**
 * Created by Nomad_Mystic on 8/31/2016.
 */

// grabbing all import need from displaying categories
import getPromise from '../utilities/getPromise';
import buildTemplate from '../utilities/buildTemplate';
import CategoryPage from '../classes/CategoryPage';


// calls initialPages endpoint and returns object for mustache templating
let categoryPage = (category) => {
    getPromise('/category/' + category + '').then((response) => {
            // console.log(response);
            // call constructor
            let CategoryPageClass = new CategoryPage(response);
            // get the member variable(Object)
            let page = CategoryPageClass.getCategoryPage();
            let parsedCategoryPage = JSON.parse(page);

            // console.log(parsedInitialPages.query.categorymembers);
            let categoryMembersArray = parsedCategoryPage.query.categorymembers;
            // console.log(categoryMembersArray);

            // this function takes the name of the template wanted to be used
            // and the data for that template
            buildTemplate('categoryPageTemplate', categoryMembersArray);
        },
        (err) => {
            console.log(err);
        });
};

export default categoryPage;
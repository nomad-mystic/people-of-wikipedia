/**
 * Created by Nomad_Mystic on 8/29/2016.
 */

import buildTemplatePromise from './templatePromise';

// Load Libraries
let Mustache = require('mustache');

let buildTemplate = (chosenTemplate, data) => {
    // console.log(chosenTemplate);
    // console.log(data);

    buildTemplatePromise('./views/' + chosenTemplate + '.mst').then((templateFromPromise) => {
        console.log(templateFromPromise);

        // render method which builds the mustache template
        let rendered = Mustache.render(templateFromPromise, data);
        let template = document.getElementById('template');
        template.innerHTML = rendered;
    },
    (err) => {
        console.log(err);
    });
};

export default buildTemplate;




/**
 * Created by Nomad_Mystic on 8/28/2016.
 */
var InitialPages = class {

    constructor(pages) {
        this.initialPagesObject = pages;
    }

    getInitialPages() {
        // console.log(this.initialPagesObject);
        return this.initialPagesObject;
    }
};

export default InitialPages;
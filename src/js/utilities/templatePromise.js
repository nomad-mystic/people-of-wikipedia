/**
 * Created by Nomad_Mystic on 8/29/2016.
 */


let buildTemplatePromise = (template) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.responseText))
            }
        };

        req.onerror = (err) => {
            console.log(err);
            reject(Error(req.responseText));
        };

        req.open('GET', template, true);
        req.send();

    });
};

export default buildTemplatePromise;

/**
 * Created by Nomad_Mystic on 8/19/2016.
 */


let getPromise = (url) => {
    return new Promise((resolve, reject) => {

        let req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onLoad = (res) => {
            // this will send if it has any status code
            if (res.statusCode === 200) {
                resolve(req.response);
                console.log(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onError = (err) => {
            console.log(err);
            reject(Error(req.statusText));
        };
        req.send();
    });
};

export default getPromise;
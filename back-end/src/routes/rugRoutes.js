import { 
    addNewRug,
    getRugs,
    getRugWithID,
    updateRug,
    deleteRug
 } from '../controllers/rugController';


const routes = (app) => {
     app.route('/rug')
     .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getRugs)
    /*
    }, (req, res, next) => {
    res.send('GET request successfull!!!');
    })

*/



    .post(addNewRug);
    
 /* .post((req, res) =>
    res.send('POST request successfull!!!')); */




     app.route('/rug/:inbuiltId')
     //get specific Rug
     .get(getRugWithID)
    // put request  
    /*
    .put((req, res) =>
    res.send('PUT request successfull!!!')) */


     .put(updateRug)
 
     .delete(deleteRug);
}

export default routes;
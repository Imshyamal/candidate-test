import mongoose from 'mongoose';
import { RugSchema } from '../models/rugModel';

const Rug = mongoose.model('Rug', RugSchema);


// Controller for adding rug in DB
export const addNewRug = (req, res) => {
    console.log(req.body);
    let newRug = new Rug(req.body);

    newRug.save((err, rug) => {
        if (err) {
            res.send(err);
        }
        res.json(rug);
    });
};


// Second Controller for getting all rugs 

export const getRugs = (req, res) => {
    console.log(req.body);
    Rug.find({}, (err, rug) => {
        if (err) {
            res.send(err);
        }
        res.json(rug);
    });
};


//Third controller for getting specific rug

export const getRugWithID = (req, res) => {
    console.log(req.body);
    Rug.findById(req.params.inbuiltId, (err, rug) => {
        if (err) {
            res.send(err);
        }
        res.json(rug);
    });
};

// forth controller for getting update 
export const updateRug = (req, res) => {
    Rug.findOneAndUpdate({ _id: req.params.inbuiltId}, req.body, { new: true }, (err, rug) => {
        if (err) {
            res.send(err);
        }
        res.json(rug);
    })
}

//fifth controller for delete rug

export const deleteRug = (req, res) => {
    Rug.remove({ _id: req.params.inbuiltId }, (err, rug) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}

import { createError } from "../../error.js";
import { Query } from "../../models/Query.js";



export const createquery = async (req, res, next) => {
    try {
        const query = req.body.query;
        console.log(query);
        

        const newQuery = new Query({ ...req.body });
        console.log(newQuery);
        const saveQuery = await newQuery.save();
        console.log(saveQuery);
        if (saveQuery)
            res.status(200).json({
                success: true,
                message: "Query posted Successfully"
            })
    } catch (error) {
        next(error);
    }
}

export const getquery = async (req, res, next) => {
    try {

        const allQueries = await Query.find();
        res.status(200).json(allQueries);

    } catch (error) {
        next(error);
    }
}
export const getSpecificQuery=async (req, res, next) => {
    try {
        const {id}=req.params
        const query = await Query.findById(id);
        res.status(200).json(query);

    } catch (error) {
        next(error);
    }
}

export const createquerysolution = async (req, res, next) => {
    try {
        const id=req.body._id;
        const message=req.body.solution
        
        // if (!message.solution) next(createError(404, "Please fill all the necessary details!"));

       const updatesolution=await Query.updateOne(
        {
            _id:id
        },
        {
            $push:{
                querySolution:{
                    solution:message
                }
            }
        }
       )
        if (updatesolution)
            res.status(200).json({
                success: true,
                message: "Query solution posted Successfully"
            })
    } catch (error) {
        next(error);
    }
}
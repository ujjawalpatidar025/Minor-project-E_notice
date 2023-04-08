import { createError } from "../../error.js";
import { Query } from "../../models/Query.js";



export const createquery = async (req, res, next) => {
    try {
        const query = req.body.query;
        if(!query)return  next(createError(404, "Please fill the necessary fields"))
       const newQuery = new Query({ ...req.body });
        const saveQuery = await newQuery.save();
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
        const id=req.params.id;
        const message=req.body.querySolutionText
        if (!message) return next(createError(404, "Please fill all the necessary details!"));

       const updatesolution=await Query.updateOne(
        {
            _id:id
        },
        {
            $push:{
                querySolution:{
                    solution:message,
                    date: new Date()
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


<<<<<<< HEAD



export const dltquery = async (req, res, next) => {
    try {
        const id=req.body._id;
        
        
        // if (!message.solution) next(createError(404, "Please fill all the necessary details!"));

       const dltquery= await Query.deleteOne({
        _id:id
       })
        if (dltquery)
            res.status(200).json({
                success: true,
                message: "Query deleted Successfully"
            })
    } catch (error) {
=======
export const deleteQuery = async(req, res, next)=>{
    try{
       const delId=req.params.id;
       await Query.findByIdAndDelete(delId);
       res.status(200).json("Query Deleted!");

    }catch(error){
>>>>>>> 2e24bdf5a5c36d3449cd3bc4f6df863e2544d8c3
        next(error);
    }
}
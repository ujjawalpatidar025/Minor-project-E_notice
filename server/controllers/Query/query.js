import { createError } from "../../error.js";
import { Query } from "../../models/Query.js";
import { User } from "../../models/User.js";

export const createquery = async (req, res, next) => {
  try {
    const query = req.body.query;
    const userId = req.user.id;
    if (!query)
      return next(createError(404, "Please fill the necessary fields."));
    const newQuery = new Query({ userId, ...req.body });

    const saveQuery = await newQuery.save();
    if (saveQuery)
      res.status(200).json({
        success: true,
        message: "Query posted Successfully.",
      });
  } catch (error) {
    next(error);
  }
};

export const getquery = async (req, res, next) => {
  try {
    const allQueries = await Query.find().sort({ updatedAt: -1 });
    if (!allQueries) return next(createError(404, "There is no query."));
    res.status(200).json({
      success: true,
      message: "",
      allQueries,
    });
  } catch (error) {
    next(error);
  }
};
export const getSpecificQuery = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = await Query.findById(id);
    res.status(200).json(query);
  } catch (error) {
    next(error);
  }
};

export const createquerysolution = async (req, res, next) => {
  try {
    const id = req.params.id;
    const message = req.body.querySolutionText;
    if (!message)
      return next(createError(404, "Please fill all the necessary details!"));

    const updatesolution = await Query.updateOne(
      {
        _id: id,
      },
      {
        $push: {
          querySolution: {
            solution: message,
            date: new Date(),
          },
        },
      }
    );
    if (updatesolution)
      res.status(200).json({
        success: true,
        message: "Query solution posted Successfully",
      });
  } catch (error) {
    next(error);
  }
};

export const deleteQuery = async (req, res, next) => {
  try {
    const userAdmin = await User.findById(req.user.id);

    const delQueryId = req.params.id;
    const query = await Query.findById(delQueryId);
    if (userAdmin.admin || req.user.id === query.userId) {
      await Query.findByIdAndDelete(delQueryId);
      res.status(200).json({
        success: true,
        message: "Query Deleted Successfully.",
      });
    } else {
      console.log("delete");
      return next(createError(402, "You are not authorized to delete query."));
    }
  } catch (error) {
    next(error);
  }
};

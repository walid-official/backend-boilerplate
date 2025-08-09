import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { createUserService } from "./user.service"
import httpStatus from "http-status"
import { Request, Response, NextFunction } from "express"

export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    
    const user = await createUserService(req.body)

    // res.status(httpStatus.CREATED).json({
    //     message: "User Created Successfully",
    //     user
    // })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user,
    })
})
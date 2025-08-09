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


// const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const userId = req.params.id;
//     // const token = req.headers.authorization
//     // const verifiedToken = verifyToken(token as string, envVars.JWT_ACCESS_SECRET) as JwtPayload

//     const verifiedToken = req.user;

//     const payload = req.body;
//     const user = await updateUserService(userId, payload, verifiedToken as JwtPayload)

//     // res.status(httpStatus.CREATED).json({
//     //     message: "User Created Successfully",
//     //     user
//     // })

//     sendResponse(res, {
//         success: true,
//         statusCode: httpStatus.CREATED,
//         message: "User Updated Successfully",
//         data: user,
//     })
// })
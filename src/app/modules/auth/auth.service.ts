import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../../config/env";
import AppError from "../../errorHelpers/AppError"
import { createNewAccessTokenWithRefreshToken } from "../../utils/userTokens"
import { User } from "../user/user.model"
import bcryptjs from "bcryptjs"
import  httpStatus  from 'http-status-codes';

export const getNewAccessTokenService = async (refreshToken: string) => {
    const newAccessToken = await createNewAccessTokenWithRefreshToken(refreshToken)

    return {
        accessToken: newAccessToken
    }

}

export const changePasswordService = async (oldPassword: string, newPassword: string, decodedToken: JwtPayload) => {

    const user = await User.findById(decodedToken.userId)

    const isOldPasswordMatch = await bcryptjs.compare(oldPassword, user!.password as string)
    if (!isOldPasswordMatch) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Old Password does not match");
    }

    user!.password = await bcryptjs.hash(newPassword, Number(envVars.BCRYPT_SALT_ROUND))

    user!.save();


}
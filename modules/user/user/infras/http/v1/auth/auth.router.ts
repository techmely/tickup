import { mittAsync } from "modules/core/domain-base/events/domain-event.helper";
import { UserController } from "modules/user/user/application/controllers/user.controller";
import { CreateUserInteractor } from "modules/user/user/domain/use-cases/interactors/create-user.interactor";
import { LoginEmailPasswordInteractor } from "modules/user/user/domain/use-cases/interactors/login.interactor";
import { UserMapper } from "../../../mappers/user.mapper";
import { UserPlanetScaleRepository } from "../../../persistence/plannet-scale/user.impl.reposity";

const userMapper = new UserMapper();
const userRepo = new UserPlanetScaleRepository(userMapper, mittAsync());
const createUserUseCases = new CreateUserInteractor(userRepo);
const loginUserPasswordUseCases = new LoginEmailPasswordInteractor(userRepo);
const userController = new UserController(createUserUseCases, loginUserPasswordUseCases);

// POST("/v1/auth/email-password", userController.loginEmailPassword)

// NEXTJS handler (req) {
/**
 *  const body = req.body
 *   userController.loginEmailPassword(body)
 * */
// }
//

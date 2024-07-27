import { CounterSliceSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: CounterSliceSchema,
    user: UserSchema,
    login: LoginSchema
}
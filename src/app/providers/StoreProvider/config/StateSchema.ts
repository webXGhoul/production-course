import { CounterSliceSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface StateSchema {
    counter: CounterSliceSchema,
    user: UserSchema
}
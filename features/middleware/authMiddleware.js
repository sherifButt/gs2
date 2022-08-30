import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setCredentials } from "../auth/authSlice";

const authMiddleware = createListenerMiddleware()
authMiddleware.startListening( {
    actionCreator:
})
// load user upon successful login

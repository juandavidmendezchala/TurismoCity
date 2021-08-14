import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserAuth0 = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user)

    if (isLoading) {
        return <div>Cargando ...</div>
    }
    return (
        isAuthenticated &&
        <div>
            <h2>{user.name}</h2>
        </div>
    )
}

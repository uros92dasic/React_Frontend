import React from "react";
import UsersList from "../components/UsersList";

const USERS = [
    {
        id: 'u0',
        image: 'https://i.picsum.photos/id/14/367/267.jpg?hmac=TbT8rXUKlWmCUhgl5NDXz283dV3FiFhR0tgREh-fzFo',
        name: 'Mihailo Dasic',
        places: 2
    },
    {
        id: 'u1',
        image: 'https://i.picsum.photos/id/28/367/267.jpg?hmac=yLGWd6QHCcj0A8iajtgeax570C_GRx3TnhfJn8V0GM4',
        name: 'Nevena Dasic',
        places: 3
    },
    {
        id: 'u2',
        image: 'https://i.picsum.photos/id/11/367/267.jpg?hmac=Pqqy5lI70sWPJXIxlIgdd2tcga3zmI8Otf9rnP5t8T0',
        name: 'Uros Dasic',
        places: 3
    },
    {
        id: 'u3',
        image: 'https://i.picsum.photos/id/12/367/267.jpg?hmac=IImCkieVtLT6kd7dM0pvmOWlN31cxtzijB2AFkNaK-0',
        name: 'Dragan Dasic',
        places: 4
    },
    {
        id: 'u4',
        image: 'https://i.picsum.photos/id/13/367/267.jpg?hmac=PlowotpQVsKI5u9zmCSxPrAdWuH7CqFxaqGgk5IbLtk',
        name: 'Mihailo Dasic',
        places: 5
    },
    {
        id: 'u5',
        image: 'https://i.picsum.photos/id/16/367/267.jpg?hmac=ZyyuET1a6X-Ym6MXK8OyHrdWFJiLI4To0iYLTlyrD-0',
        name: 'Elena Dasic',
        places: 1
    },
];

const Users = () => {

    return (
        <UsersList items={USERS}/>
    );
}

export default Users;
import { writable } from 'svelte/store';

export const Statee = writable("student");

export const UserStore = writable({

    name: "",
    token: "",
    pfp: "",
    email: ""
});
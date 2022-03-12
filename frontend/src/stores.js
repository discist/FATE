import { writable } from 'svelte/store';

export const Statee = writable("student");

export const UserStore = writable({
    uid: "",
    name: "",
    gender:"",
    token: "",
    pfp: "",
    email: "",
    dob: "",
    place: "",
    time: ""

});


export const UserDbData = writable({

    name: "",
    gender:"",
    email: "",
    dob: "",
    place: "",
    time: ""
})
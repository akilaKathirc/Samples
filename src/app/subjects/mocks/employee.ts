import { Address, Geo } from "src/app/interface/user";



export const GEO: Geo = {
    lat: '25',
    lng: '26'
}


export const ADDRESS: Address = {
    street: 'Galichista',
    suite: 'Royal suite',
    city: 'sofia',
    zipcode: '4137',
    geo: GEO
}


export const EMPLOYEE = {
    id: 1,
    name: 'Akila',
    designation: 'SE',
    address: ADDRESS
};


export const EMPLOYEE_SUBJECT = {
    id: 1,
    name: 'Subject',
    designation: 'SE',
    address: ADDRESS
};


export const EMPLOYEE_BEHAVIOUR = {
    id: 1,
    name: 'Behaviour subject',
    designation: 'SE',
    address: ADDRESS
};


export const EMPLOYEE_REPLAY = {
    id: 1,
    name: 'Replay subject',
    designation: 'SE',
    address: ADDRESS
};
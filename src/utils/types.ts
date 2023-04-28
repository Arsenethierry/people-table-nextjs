
export interface TableBodyProps {
    data: Array<any>,
    columns: Array<string>
}

export interface Address {
    street: string;
    streetName: string;
    buildingNumber: string;
    city: string;
    zipcode: string;
    country: string;
    county_code: string;
    latitude: string;
    longitude: string;
}

export type Person = {
    id: number;
    image: string;
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    phone: string;
    address: Address;
}

export type sorts = {
    columns: string;
    order: string;
}

export interface headerProps {
    columns: Array<string>
    sorting: sorts
    pageLimit: number
    setPageLimit: (page: number) => void
}

export type HeaderCellProps = {
    column: string;
    sorting: sorts;
}
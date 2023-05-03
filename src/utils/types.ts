
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

export type SortType = {
    field: string;
    order: string;
}
export interface headerProps {
    columns: Array<string>
    pageLimit: number
    setPageLimit: (page: number) => void
    sorting: SortType;
    sortTable: ({ field, order }: SortType) => void;
}

export type HeaderCellProps = {
    sortTable: ({ field, order }: SortType) => void;
    sorting: SortType;
    column: string;
}
import React from 'react';
import styles from './styles.module.css';
import { Address } from '@/utils/types';

type AddressProps = {
    adress: Address
}

function PersonAddress({ adress }: AddressProps) {
    return (
        <ul className={styles.addresslist}>
            <li>
                <strong>Street:</strong>
                <span>{adress.street}</span>
            </li>
            <li>
                <strong>Street Name:</strong>
                <span>{adress.streetName}</span>
            </li>
            <li>
                <strong>Building Number:</strong>
                <span>{adress.buildingNumber}</span>
            </li>
            <li>
                <strong>City:</strong>
                <span>{adress.city}</span>
            </li>
            <li>
                <strong>Zipcode:</strong>
                <span>{adress.zipcode}</span>
            </li>
            <li>
                <strong>Country:</strong>
                <span>{adress.country}</span>
            </li>
            <li>
                <strong>County Code:</strong>
                <span>{adress.county_code}</span>
            </li>
            <li>
                <strong>Latitude:</strong>
                <span>{adress.latitude}</span>
            </li>
            <li>
                <strong>Longitude:</strong>
                <span>{adress.longitude}</span>
            </li>
        </ul>
    );
}

export default PersonAddress;
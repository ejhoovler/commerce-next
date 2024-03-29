const BuyerFormDetails = (
    buyerFirstName,
    buyerLastName,
    email,
    address,
    city,
    geoState,
    zipCode
) => [
    {
        controlId: 'buyerFirstName',
        smallColSize: 6,
        value: buyerFirstName,
        formLabel: 'First Name',
        placeholder: 'First Name',
        name: 'buyerFirstName',
    },
    {
    controlId: 'buyerLastName',
    smallColSize: 6,
    value: buyerLastName,
    formLabel: 'Last Name',
    placeholder: 'Smith',
    name: 'buyerLastName',
},
{
    controlId: 'email',
    smallColSize: 12,
    value: email,
    formLabel: 'Email',
    placeholder: 'example@example.com',
    name: 'email',
},
{
    controlId: 'address',
    smallColSize: 12,
    value: address,
    formLabel: 'Address',
    placeholder: '1234 Example Ave.',
    name: 'address',
},
{
    controlId: 'city',
    smallColSize: 6,
    value: city,
    formLabel: 'City',
    placeholder: 'New York',
    name: 'city',
},
{
    controlId: 'geoState',
    smallColSize: 2,
    value: geoState,
    formLabel: 'State',
    placeholder: 'NY',
    name: 'geoState',
},
{
    controlId: 'zipCode',
    smallColSize: 4,
    value: zipCode,
    formLabel: 'Zip Code',
    placeholder: '10001',
    name: 'zipCode',
  },
];

export default BuyerFormDetails;
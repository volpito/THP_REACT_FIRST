import React from 'react';
import faker from 'faker';
import Client from 'components/Client';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    imageUrl: faker.image.avatar(),
    jobTitle: faker.name.jobTitle()
  }));

  return (
    <ul>
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </ul>
  );
};

export default Clients;

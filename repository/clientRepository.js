import { Client } from "../Entities/clients";

let clients = [
  {
    id: crypto.randomUUID(),
    name: "Bruno",
    birthDate: "05/04/1976",
    gender: "Masculino",
    healthProblems: [
      {
        title: "Diabetes",
        grade: 2,
      },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    name: "Márcia",
    birthDate: "05/08/1998",
    gender: "Feminino",
    healthProblems: [
      {
        title: "Hipertensão",
        grade: 1,
      },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    name: "Anísio",
    birthDate: "18/02/1956",
    gender: "Masculino",
    healthProblems: [
      {
        title: "Diabetes",
        grade: 1,
      },
      {
        title: "Hipertensão",
        grade: 2,
      },
      {
        title: "Miocardia",
        grade: 1,
      },
    ],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];
export const getAllClients = () => {
  return clients;
};

export const getClient = (id) => {
  clients.map((client) => {
    if (client.id === id) {
      return client;
    }
  });
};

export const createClient = (...props) => {
  c = new Client(props, crypto.randomUUID());
  clients.push(c);
};

export const updateClient = (props, id) => {
  clients.map((client) => {
    if (client.id === id) {
      client = { ...props };
      return client;
    }
  });
};

export const deleteClient = (id) => {
  clients.map((client) => {
    if (client.id === id) {
      return client;
    }
  });
};

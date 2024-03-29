import { prismaClient } from "../lib/db";

type ClientInput = {
  input: {
    name: string;
    email: string;
    phone: string;
    userId: string;
  };
};

type ClientUpdateInput = {
  id: string;
  input: {
    name?: string;
    email?: string;
    phone?: string;
    userId: string;
  };
};

const getAllClients = async (_: any, args: any) => {
  const allClients = await prismaClient.client.findMany({});
  console.log("allClients", allClients);
  return allClients;
};

const getClientById = async (_: any, args: { id: string }) => {
  const client = await prismaClient.client.findUnique({
    where: { id: args.id },
  });
  return client;
};

const createClient = async (_: any, args: ClientInput) => {
  //   console.log("args", args);
  const { name, email, phone, userId } = args.input;

  const createdClient = await prismaClient.client.create({
    data: {
      email,
      phone,
      name,
      userId,
    },
  });
  return createdClient;
};

const deleteClient = async (_: any, args: { input: string }) => {
  //   console.log("args", args);
  const deletedClient = await prismaClient.client.delete({
    where: { id: args.input },
  });
  //   console.log("deletedClient", deletedClient);
  return deletedClient;
};

const updateClient = async (_: any, args: ClientUpdateInput) => {
  //   console.log("args", args);
  const { id } = args;

  const { name, email, phone, userId } = args.input;
  const updatedUser = await prismaClient.client.update({
    where: { id },
    data: {
      name,
      email,
      phone,
      userId,
    },
  });
  return updatedUser;
};

export {
  createClient,
  deleteClient,
  updateClient,
  getAllClients,
  getClientById,
};

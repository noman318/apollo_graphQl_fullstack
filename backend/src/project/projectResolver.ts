import { prismaClient } from "../lib/db";
import { ProjectStatus } from "@prisma/client";
import checkAuthorization from "../middleware/authentication";

type ProjectInput = {
  input: {
    name: string;
    status: string;
    description: string;
    clientId: string;
  };
};

type ProjectUpdateInput = {
  id: string;
  input: {
    name?: string;
    status?: string;
    description?: string;
    clientId: string;
  };
};

const ProjectStatusStrings = {
  [ProjectStatus.NotStarted]: "Not Started",
  [ProjectStatus.InProgress]: "In Progress",
  [ProjectStatus.Completed]: "Completed",
} as const;

type ProjectStatusFile = keyof typeof ProjectStatusStrings;

const createProject = async (_: any, args: ProjectInput) => {
  const { name, status, description, clientId } = args.input;
  try {
    const project = await prismaClient.project.create({
      data: {
        name,
        status: status as ProjectStatusFile,
        description,
        clientId,
      },
    });
    // console.log("project", project);
    return project;
  } catch (error) {
    console.log("error", error);
  }
};

const getProjects = async () => {
  const projectsWithUserData = await prismaClient.project.findMany({
    include: {
      client: true,
    },
  });
  console.log("projectsWithUserData", projectsWithUserData);

  return projectsWithUserData;
};

const getProjectById = async (_: any, args: { id: string }) => {
  const { id } = args;
  const project = await prismaClient.project.findUnique({
    where: { id },
    include: { client: true },
  });
  return project;
};

const updateProject = async (
  _: any,
  args: ProjectUpdateInput,
  context: any
) => {
  console.log("args", args);
  const { id } = args;
  const { name, description, status, clientId } = args.input;
  checkAuthorization(context);
  const updatedProject = await prismaClient.project.update({
    where: { id },
    data: {
      name,
      description,
      status: status as ProjectStatusFile,
      clientId,
    },
  });
  return updatedProject;
};

const deleteProject = async (_: any, args: { id: string }) => {
  const deletedProject = await prismaClient.project.delete({
    where: { id: args.id },
  });
  return deletedProject;
};

export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};

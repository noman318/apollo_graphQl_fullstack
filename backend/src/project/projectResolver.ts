import { prismaClient } from "../lib/db";
import { ProjectStatus } from "@prisma/client";

type ProjectInput = {
  input: {
    name: string;
    status: string;
    description: string;
    userId: string;
  };
};

const ProjectStatusStrings = {
  [ProjectStatus.NotStarted]: "Not Started",
  [ProjectStatus.InProgress]: "In Progress",
  [ProjectStatus.Completed]: "Completed",
} as const;

type ProjectStatusFile = keyof typeof ProjectStatusStrings;

const createProject = async (_: any, args: ProjectInput) => {
  const { name, status, description, userId } = args.input;
  try {
    const project = await prismaClient.project.create({
      data: {
        name,
        status: status as ProjectStatusFile,
        description,
        userId,
      },
    });
    // console.log("project", project);
    return project;
  } catch (error) {
    console.log("error", error);
  }
};

export { createProject };

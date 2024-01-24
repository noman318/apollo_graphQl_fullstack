/*
  Warnings:

  - Changed the type of `project_status` on the `projects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "project_status",
ADD COLUMN     "project_status" "ProjectStatus" NOT NULL;

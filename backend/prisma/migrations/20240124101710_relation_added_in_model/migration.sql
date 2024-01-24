-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "project_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

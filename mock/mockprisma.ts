import { mockDeep, DeepMockProxy } from "jest-mock-extended";
import { PrismaClient } from "../generated/prisma";

export const mockPrisma = mockDeep<PrismaClient>();
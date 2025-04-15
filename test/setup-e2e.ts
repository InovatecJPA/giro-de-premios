import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import { execSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';

const prisma = new PrismaClient()

function generateDatabaseUrl(schemaId: string) {
    if (!process.env.DATABASE_URL) {
        throw new Error('Please provide a DATABASE_URL environment variable.')
    }

    const url = new URL(process.env.DATABASE_URL)

    url.searchParams.set('schema', schemaId)

    return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
    process.env.DATABASE_URL = generateDatabaseUrl(schemaId)


    await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${schemaId}"`);
  
    execSync('npx prisma migrate deploy', {
        env: {
            ...process.env,
        }
    });
});
    


afterAll(async () => {
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
    await prisma.$disconnect()
})
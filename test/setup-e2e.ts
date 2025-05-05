import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaClient } from '../src/prisma/generated/prisma/client';
import 'dotenv/config';
import { execSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { AppModule } from '../src/app.module';
import { Test } from '@nestjs/testing';

const prisma = new PrismaClient()
export let schemaId: string
export let app: INestApplication

function generateDatabaseUrl(schemaId: string) {
    if (!process.env.DATABASE_URL) {
        throw new Error('Please provide a DATABASE_URL environment variable.')
    }

    const url = new URL(process.env.DATABASE_URL)

    url.searchParams.set('schema', schemaId)
    return url.toString()
}


beforeEach(async () => {
    await defineDatabaseSchema()
    await initializeApp()
});

afterEach(async () => {
    await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
})

afterAll(async () => {
    await prisma.$disconnect()
})

async function initializeApp() {
    const module = await Test.createTestingModule({
        imports: [AppModule],
    })
        .compile();

    app = module.createNestApplication();

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true
        })
    )

    await app.init()
}

async function defineDatabaseSchema() {
    schemaId = randomUUID()
    process.env.DATABASE_URL = generateDatabaseUrl(schemaId)

    await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${schemaId}"`);

    execSync('npx prisma migrate deploy', {
        env: {
            ...process.env,
        }
    });
}
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

export const create = async (customer) => {
    return await prisma.customer.create(
        {
            data: customer
        }
    )
}

export const list = async () => {
    return await prisma.customer.findMany()
}

export const getById = async (id) => {
    return await prisma.customer.findUnique(
        {
            where: { id }
        }
    )
}

export const remove = async (id) => {
    return await prisma.customer.delete(
        {
            where: { id }
        }
    )
}

export const update = async (id, customer) => {
    return await prisma.customer.update(

        {
            data: customer,
            where: { id }
        }
    )
}
import { PrismaClient } from '../generated/prisma/index.js'
import * as z from 'zod'

const prisma = new PrismaClient()

//Regras de negocio e validação com Zod

const profileSchema = z.object({
    id: z.number(
        { invalid_type_error: "ID deve ser um número." },
        { required_error: "ID é obrigatorio" }
    )
        .positive(
            { error: "ID deve ser um número positivo" }
        ),
    name: z.string()
        .min(3, { error: "O nome deve ter no minimo 3 caracteres" })
        .max(100, { error: "O nome deve ter no máximo 100 caracteres" }),
    email: z.email(),
    pass: z.string()
        .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
        .max(255, { error: "A senha deve ter o maximo de 255 caracteres" }),
    avatar: z.url({ error: "A imagem deve ser uma URL válida " })
})

export const validateProfile = (profile, partial = null) => {
    let result
    if (partial) {
        result = profileSchema.partial(partial).safeParse(profile)
    } else {
        result = profileSchema.safeParse(profile)
    }
    if (result.success) {
        return { success: true, data: result.data }
    } else {
        return { success: false, errors: z.flattenError(result.error).fieldErrors }
    }
}

export const create = async (profile) => {
    return await prisma.user.create({
        data: profile,
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const update = async (id, profile) => {
    return await prisma.user.update({
        data: profile,
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const list = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const getById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}
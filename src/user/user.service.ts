import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(user_name: string, password: string, rol: string): Promise<User> {
        // Cifra la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);


        // Guarda el usuario en la base de datos con la contraseña cifrada
        const user = await this.prisma.user.create({
            data: {
                username: user_name,
                password: hashedPassword,
                role: rol,
            },
        });

        return user;
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findOne(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async update(id: number, user_name: string, password: string, rol: string): Promise<User> {
        // Cifra la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        // Actualiza el usuario en la base de datos con la contraseña cifrada
        return this.prisma.user.update({
            where: { id },
            data: {
                username: user_name,
                password: hashedPassword,
                role: rol,
            }
        });
    }

    async remove(id: number): Promise<User> {
        return this.prisma.user.delete({
            where: { id },
        });
    }
    //permite comparar si el password plano es igual al password cifrado
    async matchPassword(data: User): Promise<{ isGenuineUser: boolean }> {
        const user = await this.prisma.user.findFirst({
            where: {
                username: data.username, // Campo por el que deseas buscar
            },
        });
        //Si el usuario no existe o la contraseña no es valida retorna false
        if (!user) {
            return { isGenuineUser: false };
          }
      
          const isPasswordValid = await bcrypt.compare(data.password, user.password);
      
          return { isGenuineUser: isPasswordValid };
    }
}

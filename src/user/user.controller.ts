import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { UserService } from './user.service'
@Controller('user/')
export class UserController {
    constructor(private UserService: UserService) { }

    @Post()
    async create(@Body() data: Prisma.UserCreateInput): Promise<User> {
        return this.UserService.create(data.user_name, data.password, data.rol);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput): Promise<User> {
        return this.UserService.update(+id, data.user_name.toString(), data.password.toString(), data.rol.toString());
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User | null> {
        return this.UserService.findOne(+id);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<User> {
        return this.UserService.remove(+id);
    }
    /*Este método maneja solicitudes POST en la ruta "
    isGenuine" y  autentica al usuario utilizando los datos
     proporcionados en el cuerpo de la solicitud (@Body() data). 
    Devuelve una promesa que se resuelve con un objeto que contiene un valor
     booleano "isGenuineUser" que indica si el usuario es auténtico o no. */
    @Post("isGenuine")
    async authenticateUser(@Body() data: User): Promise<{ isGenuineUser: boolean }> {
        return await this.UserService.matchPassword(data);
    }

}

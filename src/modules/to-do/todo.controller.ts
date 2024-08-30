import { Body, Controller, Post } from "@nestjs/common";
import { CreateTodoItem } from "./dtos/create-todo-item.dto";
import { TodoEntity } from "./entities/todo.entity";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post('create')
    async create(@Body() body: CreateTodoItem): Promise<TodoEntity> {
        return await this.todoService.createNewTodoItem(body.text, body.dificult)
    }
}
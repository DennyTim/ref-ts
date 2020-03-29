import { Model } from './Model';
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

/**
 * Класс принимает универсальную модель, которая в свою очередь принимает интерфейс
 * в котором описываются свойства инстансов и реализован пул методов для этих инстансов.
 * Дальше при создании модельки "Пользователя" вызывается конструктор родительской модели,
 * который получает три категории инстансов: атрибуты - свойства обьектов, события -
 * для отслеживания любых действий на ui, фетча данных с бекенда. У каждой категории есть
 * свой дженерифецированный интерфейс, что означает, что любая категория будет ждать
 * описания в качетсве интерфейса от конечного дочернего класса.
 * */
export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollecion(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, ( json: UserProps ) => User.buildUser(json));
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}

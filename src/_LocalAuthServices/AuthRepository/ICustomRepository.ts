export default interface ICustomRepository{ 
    login(username: string, password: string): any
    register(username: string, password: string): any
}

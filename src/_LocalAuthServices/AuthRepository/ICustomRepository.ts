export default interface ICustomRepository{ 
    findUserByUsername(username: string): any
    register(username: string, password: string): any
}




class Player{
    private tagName: string
    private id: number
    private experience: number

    constructor(tagName:string, id:number, experience: number){
        this.tagName = tagName
        this.id = id
        this.experience = experience

    }
    public levelDown(levels: number){
        this.experience = this.experience- levels
    }
    public getTagName(): string{
        return this.tagName
    }
    public getExperience():number{
        return this.experience 
    }
}



let RenDiego: Player = new Player("RenDiego", 1, 1000);
RenDiego.levelDown(1)
console.log(RenDiego.getExperience)

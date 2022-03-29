class Menu {
    constructor(id,name,picture,price,category){
        this.id = id
        this.name = name
        this.picture = picture
        this.price = price
        this.category = category
    }
    get getId(){
        return this.id
    }
    get getPrice(){
        return this.price
    }
    get getName(){
        return this.name
    }
    get getCategort(){
        return this.category
    }
    get getPicture(){
        return this.picture
    }
}
export default Menu

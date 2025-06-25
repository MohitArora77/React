class Computer{
    constructor(name){
        this.name=name
    }
    run(){
        console.log("The Computer is now running");
        
    }
}
class Windows extends Computer{
    constructor(name,company) {
        super(name) 
        this.company=company
    }

    logIn(){
        console.log("You are Logged in Windows" + this.name);
        
    }
}

const Windows_len= new Windows ('IdeaPad3','Lenovo');
Windows_len.logIn()
Windows_len.run()

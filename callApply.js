const normalParson = {
    firstName:"Md. Rajiul",
    lastName:"Islam",
    salary: 15000,
    getFullName:function(){
        console.log("Full name:",this.firstName, this.lastName);
        },
    chargeBill:function(amount){
        this.salary = this.salary-amount;
        return this.salary;
    }
}
normalParson.chargeBill(150);
console.log(normalParson.salary);
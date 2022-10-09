const Rajiul = {
    firstName:"Md. Rajiul",
    lastName:"Islam",
    salary: 15000,
    //getFullName is a method.
    getFullName:function(){
        console.log("Full name:",this.firstName, this.lastName);
        },
        // multi parameter this method.
        // here 10 is default value. if you don't pass parameter this vale are exact
    chargeBill:function(amount=10 , tips=10, tax=10){
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }
}
Rajiul.chargeBill( );
console.log("rajiul salary:", Rajiul.salary);
// end normal function.

const Rakibul = {
                    firstName:"Md. Rakibul",
                    lastName:"Islam",
                    salary: 16000,
                    getFullName:function(){
                        console.log("Full name:",this.firstName, this.lastName);
                    }
                }

// Here we use "Rajiuls" charge bill method. (call method)

Rajiul.chargeBill.call(Rakibul, 1000, 100, 10);
console.log("rakibul salary",Rakibul.salary);

const AzimUddin = {
    firstName:"Md. AzimUddin",
    lastName:"Atik",
    salary: 40000,
    getFullName:function(){
        console.log("Full name:",this.firstName, this.lastName);
    }
}
// Here we use "Rajiuls" charge bill method. (apply method)

Rajiul.chargeBill.apply(AzimUddin,[2000,1000,100])
console.log("Azimussid salary: ",AzimUddin.salary)
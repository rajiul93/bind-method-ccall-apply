const Rajiul = {
                        firstName:"Md. Rajiul",
                        lastName:"Islam",
                        salary: 15000,
                        //getFullName is a method.
                        getFullName:function(){
                            console.log("Full name:",this.firstName, this.lastName);
                            },
                        chargeBill:function(amount){
                            this.salary = this.salary-amount;
                            return this.salary;
                        }
                    }
    
Rajiul.chargeBill(150);
console.log(Rajiul.salary);
// end normal function.

const Rakibul = {
                    firstName:"Md. Rakibul",
                    lastName:"Islam",
                    salary: 16000,
                    getFullName:function(){
                        console.log("Full name:",this.firstName, this.lastName);
                    }
                }

// Here we use "Rajiuls" charge bill method. (bind method)

const rakibulChargeBill =Rajiul.chargeBill.bind(Rakibul);
rakibulChargeBill(500);
console.log(Rakibul.salary)
export class Invoice {
    client: string;
    details: string;
    amount: string;
    sinvoices: Invoice[] = [];
    constructor(c: string, 
        d: string, 
        a: string){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format(){
        return `${this.client} owes ${this.amount}`;
    }
    setsInvoicesArrayValues(){
        this.sinvoices.push(new Invoice('1','one','1'));
        this.sinvoices.push(new Invoice('2','two','2'));
        this.sinvoices.push(new Invoice('3','three','3'));

    }
    printArrsinvoices(){
        this.sinvoices.forEach(inv => {
            console.log(inv.client,inv.details,inv.amount,inv.format());

        });

    }
    // Return type is inferred as number[] | string
 getFirstThree(x: number[] | string) {
    if(x.length >3){
        return x.slice(0, 3);
    }else{
        return '';
    }
    
  }

  greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

 welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

}
interface IPerson{
    name: string;
    age: number;
    speak(a: number): number;
}

const me: IPerson = {
    name: 'shaun',
    age: 30,
    speak(amount: number): number{

        return amount;

    }
}
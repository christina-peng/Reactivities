export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1 : Duck = {
    name: 'Gyro',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2 : Duck = {
    name: 'Guo',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

duck1.makeSound("quack");
duck2.makeSound("sound");
duck1.name = "Ham"

export const ducks: Duck[] = [duck1, duck2]
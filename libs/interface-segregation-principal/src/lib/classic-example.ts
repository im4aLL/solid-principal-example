// problem
// ===============
interface Animal {
  walk(): void;
  fly(): void;
}

class Dog implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    throw new Error('Dogs cannot fly');
  }
}

class Duck implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    console.log('Flying');
  }
}

// solution
// ==================
interface AnimalCanWalk {
  walk(): void;
}

interface AnimalCanFly {
  fly(): void;
}

class Dog implements AnimalCanWalk {
  walk() {
    console.log('Walking');
  }
}

class Duck implements AnimalCanWalk, AnimalCanFly {
  walk() {
    console.log('Walking');
  }

  fly() {
    console.log('Flying');
  }
}

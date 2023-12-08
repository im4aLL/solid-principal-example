// problem
// ===============
interface Animal {
  walk(): void;
  fly(): void;
}

class Duck implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    console.log('Flying');
  }
}

class Dog implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    throw new Error('Dogs cannot fly');
  }
}

//
//
//
//
//
//
//
//
//

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

// another good example is how angular do it for OnInit, AfterViewInit

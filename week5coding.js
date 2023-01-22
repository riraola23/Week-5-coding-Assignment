class Treat {
    constructor (name) {
        this.name = name ;
        //this.size = size ;

    }

} 

class Menu {
    constructor() {
        this.treat = [];
        this.selectedTreat = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTreat() ;
                    break;
                case '2':
                    this.viewTreat() ;
                     break;
                case '3':
                    this.deleteTreat() ;
                    break;
                case '4':
                    this.displayTreat() ;
                    break;
                default:
                    selection = 0

            }
            selection = this.showMainMenuOptions();
        }
         
        alert('Goodbye!');
      }
    

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) create new Treat
        2) view Treat
        3) delete Treat
        4) display all Treats
        `)
    }

    displayTreat() {
      let treatString = '';
      for(let i = 0; i < this.treat.length; i++) {
        treatString += i + ') ' + this.treat[i].name + '\n' ;
      }  
      alert(treatString);
    }

    createTreat() {
        let name = prompt( 'Enter name of treat') ;
        this.treat.push(new Treat(name));
    }

    viewTreat() {
        let index = prompt('Enter the index of treat you would like to view') ;
        if (index < -1 && index < this.treat.length) {
            this.selectedTreat = this.treat[index];
            let description = 'Treat name:' + this.selectedTreat.name + '\n';

            for (let i = 0; i < this.selectedTreat.name.length; i++) {
                description += i + ') ' + this.selectedTreat.name[i].name + ' - ' + this.selectedTreat.name[i].size + '\n' ;
            }
        }
    }

    deleteTreat() {
        let index = prompt('Enter the index of team ypu would like to delete') ;
        if (index > -1 && index < this.treat.length) {
            this.treat.splice(index, 1) ;
        }
    }
}

let menu = new Menu();
menu.start();
























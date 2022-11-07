


const {createApp} = Vue;

createApp({
  data(){
    return{
      movie:{
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
        ],
        title: 'The Mandalorian',
        category: 'Action',
        lenght: '120 min'
      },
      activeImage: 0,
    }
  },
  methods:{
    changeImage(index){
      // al click della thumb riceco l'indice del ciclo for
      // activeImage assume quell'indice
      this.activeImage = index;
    },
    nextPrev(isNext){

      // se ho cliccato su next isNext è true e quindi incremento
      // altrimenti decreomento activeImage

      // if(isNext) this.activeImage++;
      // else this.activeImage--;

      // soluzione più elegante col ternario
      isNext ? this.activeImage++ : this.activeImage--;

      // verifico che il contatore non vada sollo lo zero o oltre il numero di elementi
      if(this.activeImage === this.movie.images.length){
        this.activeImage = 0;
      }else if(this.activeImage < 0){
        this.activeImage = this.movie.images.length - 1; 
      }

    }
  }
}).mount('#app');
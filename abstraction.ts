// Eita Dheke Idea Paichi
// interface MediaPlayer{
//     play():void;
//     pause():void;
//     stop():void;
// }

// // Idea theke Implrments Korchi
// class MusicPlayer implements MediaPlayer{
    
//     play(){
//         console.log("Playing Misic....");
//     }

//     pause(){
//         console.log("Pause Misic....");
//     }

//     stop(){
//         console.log("Stop Misic....");
//     }
// }

// const VlcPlayer = new MusicPlayer()
// VlcPlayer.pause()


abstract class MediaPlayer{

    abstract play():void;
    abstract pause():void;
    abstract stop():void;

}

class ShakilPlayer extends MediaPlayer{
    play():void{
        console.log("Playing Misic....");
     }

    pause():void{
        console.log("Pause Misic....");
     }

    stop():void{
       console.log("Stop Misic....");
    }
}

const Playe1 = new ShakilPlayer()
Playe1.pause()

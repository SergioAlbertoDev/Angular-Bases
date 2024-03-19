interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Nothing Else Matters",
    details: {
        author: 'Metallica',
        year : 2015
    }
}

const song = 'Ride the Ligthing';
const { song:anotherSong , songDuration:duration,details} = audioPlayer;
const { author,year } = details;
//const { author,year } = audioPlayer.details;

console.log(` Song: ${ song }`)
console.log(` Song: ${ anotherSong }`)
console.log(` SongDuration:  ${ duration }`)
console.log(` Author:  ${ author }`)
console.log(` Year:  ${ year }`)



const [,,trunks= 'Not Found']: string [] = ['Goku','Vegeta']; 
console.error('Personaje 3:',trunks)
export{};
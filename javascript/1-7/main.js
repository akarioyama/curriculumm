class Taiyaki {
    constructor(nakami) {
        this.nakami = nakami;
    }

    naka() {
        console.log('中身は' + this.nakami + 'です。');
    }
}

let annkoTaiyaki = new Taiyaki('あんこ');
let creamTaiyaki = new Taiyaki('クリーム');
let cheeseTaiyaki = new Taiyaki('チーズ');

annkoTaiyaki.naka();   
creamTaiyaki.naka();   
cheeseTaiyaki.naka();  